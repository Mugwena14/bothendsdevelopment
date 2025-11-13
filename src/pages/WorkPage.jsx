import { ClipboardList, Lightbulb, Layers, Smile } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      text: "We take the time to understand your goals and challenges.",
      icon: <ClipboardList size={24} />,
    },
    {
      id: "02",
      title: "Strategy",
      text: "Crafting a clear roadmap tailored to your business needs.",
      icon: <Lightbulb size={24} />,
    },
    {
      id: "03",
      title: "Implementation",
      text: "Turning strategy into seamless digital experiences.",
      icon: <Layers size={24} />,
    },
    {
      id: "04",
      title: "Final Result",
      text: "Delivering impactful outcomes that drive success.",
      icon: <Smile size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section header */}
        <p className="text-[17px] font-semibold text-gray-800">
          <span className="mr-1 text-indigo-600">//</span> Our Work Process
        </p>
        <h2 className="text-3xl font-semibold mt-2 text-[#0f172a]">
          Our Proven <span className="text-indigo-600">Work Process</span>
        </h2>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon bubble */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white mb-6">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-[#0f162a] text-indigo-400 text-[14px] font-semibold rounded-full w-6 h-6 flex items-center justify-center">
                  {step.id}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h4>
              <p className="text-gray-500 text-sm mt-2 max-w-[200px]">
                {step.text}
              </p>

              {/* Horizontal line (desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 right-[-3rem] w-12 h-[2px] bg-indigo-700"></div>
              )}

              {/* Vertical line (mobile only) */}
              {index !== steps.length - 1 && (
                <div className="block lg:hidden absolute bottom-[-3rem] w-[2px] h-12 bg-indigo-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
