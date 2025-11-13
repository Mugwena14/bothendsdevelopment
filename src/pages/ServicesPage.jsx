import React from "react";
import { ArrowRight, LayoutTemplate, Search, BugOff } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "We design and develop clean, modern, responsive websites that not only look great but also convert. Your brand's digital presence is built to stand out and perform.",
      icon: <LayoutTemplate size={28} />, 
    },
    {
      title: "SEO Optimization",
      description:
        "We help your business get discovered by the right audience. Through strategic SEO practices, we improve your rankings, boost visibility, and drive organic growth.",
      icon: <Search size={28} />, 
    },
    {
      title: "Web Maintenance",
      description:
        "Keep your website running smoothly with ongoing updates, security checks, content updates, and performance optimizations—so you can focus on your business.",
      icon: <BugOff size={28} />, 
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f9fafb] text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
  
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-gray-500 font-semibold">
              <span className="text-indigo-500 mr-1">//</span> Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              <span className="text-[#0f172a]"> Services We Provide to{" "} </span><br />
              <span className="text-indigo-600">Elevate Your Business</span>
            </h2>
          </div>

          <Link 
          to="/servicesProvider"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold mt-10 px-6 py-3 rounded-full transition">
            View All Services
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-[#0f172a]">
                {service.title}
              </h3>

              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <Link
                to="/servicesProvider"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
