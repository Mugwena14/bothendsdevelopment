import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f9fafb] text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <p className="text-blue-500 font-medium">// Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Services We Provide to{" "}
              <span className="text-blue-600">Elevate Your Business</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full">
            View All Services
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl text-3xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
