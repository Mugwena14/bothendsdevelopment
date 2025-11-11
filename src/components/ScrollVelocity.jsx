import { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useAnimationFrame
} from 'motion/react';

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  texts = [],
  velocity = 90,
  className = '',
  numCopies = 6, 
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    className = '',
    numCopies,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle
  }) {
    const baseX = useMotionValue(0);

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useMotionValue(0);

    useAnimationFrame((t, delta) => {
      let moveBy = baseVelocity * (delta / 1000);
      baseX.set(baseX.get() + moveBy);

      if (copyWidth > 0) {
        x.set(`${wrap(-copyWidth, 0, baseX.get())}px`);
      }
    });

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span
          className={`flex-shrink-0 ${className}`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {children}
        </span>
      );
    }

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden`}
        style={parallaxStyle}
      >
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-tight drop-shadow md:text-[5rem] md:leading-[5rem]`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      <VelocityText
        className={className}
        baseVelocity={velocity}
        numCopies={numCopies}
        parallaxClassName={parallaxClassName}
        scrollerClassName={scrollerClassName}
        parallaxStyle={parallaxStyle}
        scrollerStyle={scrollerStyle}
      >
        {texts.map((t, i) => (
          <span key={i} className="mx-2 inline-flex items-center">
            {t}
          </span>
        ))}
      </VelocityText>
    </section>
  );
};

export default ScrollVelocity;
