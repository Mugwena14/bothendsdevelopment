import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AboutSection from "./AboutPage";
import ServicesSection from "./ServicesPage";
import WorkProcess from "./WorkPage";
import Projects from "./Projects";
import ContactSection from "./ContactPage";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Sparkle } from "lucide-react";
import ScrollVelocity from '../components/ScrollVelocity';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const velocity = 80;


  const navLinks = [
    { name: "Home", path: "/", isScroll: true },
    { name: "About Us", path: "about", isScroll: true },
    { name: "Services", path: "services", isScroll: true  },
    { name: "Projects", path: "projects", isScroll: true  },
    { name: "Contacts", path: "contacts", isScroll: true  },
    { name: "Testimonils", path: "testimonials", isScroll: true  },
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#0f172a] text-sm text-gray-300">

        {/* Left Contact Info */}
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-indigo-400 font-semibold" /> +27 84 234 7310
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-indigo-400 font-semibold" /> mlangaviclyde@gmail.com
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 bg-[#0b1a3a] px-4 py-2 rounded-full">
          <a href="tel:0842347310" className="hover:text-indigo-400 transition">
            <Phone size={18} />
          </a>
          <a href="mailto:mlangaviclyde@gmail.com" className="hover:text-indigo-400 transition">
            <Mail size={18} />
          </a>
          <a 
            href="https://wa.me/+27685021117"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition">
            <FaWhatsapp size={18} />
          </a>
          <a href="https://www.linkedin.com/in/langavi-makhubele-clyde/" className="hover:text-indigo-400 transition">
            <Linkedin size={18} />
          </a>
        </div>

      </div>

      {/* Navbar */}
      <nav className="relative flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="text-2xl font-semibold text-[#0f172a]">
          Both<span className="text-indigo-600">Ends</span>Development
        </div>

        {/* Desktop Links */}
        <ul className="hidden text-[14px] font-semibold md:flex gap-8 text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isScroll ? (
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-indigo-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-indigo-500 transition ${
                      isActive ? "text-indigo-600 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Quote Button */}
        
        <ScrollLink
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
          className="hidden text-sm font-semibold md:block bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full text-white font-medium cursor-pointer"
        >
          Get A Quote
        </ScrollLink>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 z-50 md:hidden shadow-md">
            <ul className="flex flex-col gap-4 py-6 text-center text-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isScroll ? (
                    <ScrollLink
                      to={link.path}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="block py-2 cursor-pointer hover:text-indigo-500 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 hover:text-indigo-500 transition ${
                          isActive ? "text-indigo-600 font-semibold" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
              <li>
                <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full text-white font-medium">
                  Get A Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* Smooth Soft Blur on Left Side */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
          }}
        ></div>

        {/* Darkening Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-xl z-10 text-white">
          <p className="font-semibold mb-3">
            <span className="mr-1 text-indigo-400">//</span> Experience The Best IT Solutions
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Where Creativity <br /> Meets Cutting-Edge <br /> Technology
          </h1>

          <p className="text-gray-200 font-medium mb-8">
            We merge creativity with high-end engineering to deliver solutions that 
            solve real problems and move businesses forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/servicesProvider"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-medium">
              Explore More
            </Link>

            {/* Scroll to Services section */}
            <ScrollLink
              to="services"
              smooth={true}
              duration={600}
              offset={-80}
              className="w-full sm:w-auto border border-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-medium transition cursor-pointer"
            >
              View Services
            </ScrollLink>
          </div>
        </div>
      </section>



      {/* Services Strip */}
      <section className="bg-indigo-600 text-white py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center font-base">
            <ScrollVelocity
              texts={[
                'Website Development',
                <Sparkle key="icon1" />,
                'Search Engine Optimization',
                <Sparkle key="icon2" />,
                'Web Maintenance',
                <Sparkle key="icon3" />,
              ]}
              velocity={velocity}
              className="custom-scroll-text text-xl font-semibold tracking-wide mx-6 [&_svg]:inline [&_svg]:align-middle [&_svg]:translate-y-[2px]"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      <section id="work-process">
        <WorkProcess />
          {/* Services Strip */}
          <section className="bg-indigo-600 text-white py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center font-base">
                <ScrollVelocity
                  texts={[
                    'Website Development',
                    <Sparkle key="icon1" />,
                    'Search Engine Optimization',
                    <Sparkle key="icon2" />,
                    'Web Maintenance',
                    <Sparkle key="icon3" />,
                  ]}
                  velocity={velocity}
                  className="custom-scroll-text text-xl font-semibold tracking-wide mx-6 [&_svg]:inline [&_svg]:align-middle [&_svg]:translate-y-[2px]"
                />
              </div>
            </div>
          </section>
      </section>

      {/* Projects Section */}
      <section id='projects'>
        <Projects />
      </section>

      {/* Projects Section */}
      <section id='contacts'>
        <ContactSection />
          {/* Services Strip */}
          <section className="bg-indigo-600 text-white py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center font-base">
                <ScrollVelocity
                  texts={[
                    'Website Development',
                    <Sparkle key="icon1" />,
                    'Search Engine Optimization',
                    <Sparkle key="icon2" />,
                    'Web Maintenance',
                    <Sparkle key="icon3" />,
                  ]}
                  velocity={velocity}
                  className="custom-scroll-text text-xl font-semibold tracking-wide mx-6 [&_svg]:inline [&_svg]:align-middle [&_svg]:translate-y-[2px]"
                />
              </div>
            </div>
          </section>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
          {/* Services Strip */}
          <section className="bg-indigo-600 text-white py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center font-base">
                <ScrollVelocity
                  texts={[
                    'Website Development',
                    <Sparkle key="icon1" />,
                    'Search Engine Optimization',
                    <Sparkle key="icon2" />,
                    'Web Maintenance',
                    <Sparkle key="icon3" />,
                  ]}
                  velocity={velocity}
                  className="custom-scroll-text text-xl font-semibold tracking-wide mx-6 [&_svg]:inline [&_svg]:align-middle [&_svg]:translate-y-[2px]"
                />
              </div>
            </div>
          </section>
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
