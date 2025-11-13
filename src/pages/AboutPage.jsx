import React from "react";
import { IoSparklesSharp } from "react-icons/io5"; 

const AboutSection = () => {
    return (
    <section id="about" className="bg-white text-gray-900 py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Image Grid */}
        <div className="relative md:w-1/2 space-y-4">


        {/* One Large Sparkle */}
        <IoSparklesSharp className="absolute -bottom-10 -left-10 text-indigo-700 text-8xl opacity-90" />

        {/* TOP ROW */}
        <div className="flex gap-4">
            {/* Top Left — wider */}
            <div className="flex-[1.6] overflow-hidden">
            <img
                src="/images/team-work.jpeg"
                alt="Team working together"
                className="w-full h-[220px] object-cover rounded-sm rounded-tl-[110px]"
            />
            </div>

            {/* Top Right — narrower */}
            <div className="flex-[1] overflow-hidden">
            <img
                src="/images/leadership.jpeg"
                alt="Business leader"
                className="w-full h-[220px] object-cover rounded-sm rounded-tr-[120px]"
            />
            </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex gap-4">
            {/* Bottom Left — narrower */}
            <div className="flex-[1.2] overflow-hidden rounded-sm rounded-bl-[100px]">
            <img
                src="/images/meeting.jpeg"
                alt="Office meeting"
                className="w-full h-[180px] object-cover"
            />
            </div>

            {/* Bottom Right — wider */}
            <div className="flex-[1.4] overflow-hidden">
            <img
                src="/images/office.jpeg"
                alt="Work environment"
                className="w-full h-[180px] object-cover rounded-sm rounded-br-[90px]"
            />
            </div>
        </div>

        </div>


        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
        <p className="text-gray-600 font-semibold mb-2"><span className="text-indigo-500 mr-1">//</span> About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
        Transforming <span className="text-indigo-600">Ideas</span><br />
        <span className="text-indigo-600">into Digital Reality</span>
        </h2>
        <p className="text-gray-600 font-semibold mb-8">
            We combine creativity, strategy, and technology to craft digital experiences that stand out. 
            Whether you’re elevating your brand or launching something new, 
            we’re here to help bring your vision to life with clarity and purpose.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center gap-8 mb-10">
            <div>
            <h3 className="text-2xl font-bold text-indigo-600">5+</h3>
            <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div>
            <h3 className="text-2xl font-bold text-indigo-600">50+</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
            <div>
            <h3 className="text-2xl font-bold text-indigo-600">99%</h3>
            <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>
        </div>

        {/* Signature */}
            <div>
            <p className="allura-regular text-[24px] leading-tight italic signature-underline">
                Langavi Makhubele
            </p>
            <p className="text-gray-500 text-sm">Langavi — CEO</p>
            </div>
        </div>
    </section>
    );
};

export default AboutSection;
