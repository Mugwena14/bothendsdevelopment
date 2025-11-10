import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AboutSection from "./AboutPage";
import ServicesSection from "./ServicesPage";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", isScroll: true },
    { name: "Services", path: "/services", isScroll: true  },
    { name: "Projects", path: "/projects", isScroll: true  },
    { name: "Blogs", path: "/blogs", isScroll: true  },
    { name: "About Us", path: "about", isScroll: true },
    { name: "Pricing", path: "/pricing", isScroll: true  },
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#0f172a] text-sm text-gray-300">
        <div className="flex gap-6">
          <span>(000) 000-0000</span>
          <span>example@gmail.com</span>
          <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative flex justify-between items-center px-8 py-4 bg-[#101826] border-b border-gray-800">
        <div className="text-2xl font-semibold text-white">
          Both<span className="text-blue-500">Ends</span>Development
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isScroll ? (
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-blue-400 transition ${
                      isActive ? "text-blue-500 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Quote Button (Desktop Only) */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-white font-medium">
          Get A Quote
        </button>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#101826] border-t border-gray-700 z-50 md:hidden">
            <ul className="flex flex-col gap-4 py-6 text-center text-gray-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isScroll ? (
                    <ScrollLink
                      to={link.path}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="block py-2 cursor-pointer hover:text-blue-400 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 hover:text-blue-400 transition ${
                          isActive ? "text-blue-500 font-semibold" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
              <li>
                <button className="mt-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium">
                  Get A Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-[#0b0c10] relative">
        <div className="max-w-xl">
          <p className="text-blue-400 font-medium mb-3">
            Experience The Best IT Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Where Creativity <br /> Meets Cutting-Edge <br /> Technology
          </h1>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium">
              Explore More
            </button>
            <button className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-full font-medium">
              View All Services
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="bg-gray-800 w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero visual"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="bg-blue-600 text-white py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center text-lg font-medium">
          <span>Website Development</span>
          <span className="hidden md:block">✳️</span>
          <span>UX/UI Design</span>
          <span className="hidden md:block">✳️</span>
          <span>Graphics Design</span>
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
    </div>
  );
};

export default HomePage;
