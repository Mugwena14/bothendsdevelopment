import React from "react";

const AboutSection = () => {
    return (
    <section id="about" className="bg-white text-gray-900 py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Image Grid */}
        <div className="grid grid-cols-2 gap-4 md:w-1/2">
        <div className="rounded-2xl overflow-hidden bg-blue-100 p-2">
            <img
            src="https://via.placeholder.com/300x300"
            alt="Team working together"
            className="w-full h-full object-cover rounded-xl"
            />
        </div>
        <div className="rounded-2xl overflow-hidden bg-blue-50 p-2">
            <img
            src="https://via.placeholder.com/300x300"
            alt="Business leader"
            className="w-full h-full object-cover rounded-xl"
            />
        </div>
        <div className="rounded-2xl overflow-hidden bg-blue-50 p-2">
            <img
            src="https://via.placeholder.com/300x300"
            alt="Office meeting"
            className="w-full h-full object-cover rounded-xl"
            />
        </div>
        <div className="rounded-2xl overflow-hidden bg-blue-100 p-2">
            <img
            src="https://via.placeholder.com/300x300"
            alt="Work environment"
            className="w-full h-full object-cover rounded-xl"
            />
        </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
        <p className="text-blue-500 font-medium mb-2">// About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Transforming <span className="text-blue-600">Ideas</span> into Digital Reality
        </h2>
        <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center gap-8 mb-10">
            <div>
            <h3 className="text-2xl font-bold text-blue-600">150+</h3>
            <p className="text-gray-500 text-sm">Team Members</p>
            </div>
            <div>
            <h3 className="text-2xl font-bold text-blue-600">2000+</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
            <div>
            <h3 className="text-2xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>
        </div>

        {/* Signature */}
        <div>
            <p className="text-lg font-medium italic">Jenny Alexander</p>
            <p className="text-gray-500 text-sm">Jenny Alexander - CEO</p>
        </div>
        </div>
    </section>
    );
};

export default AboutSection;
