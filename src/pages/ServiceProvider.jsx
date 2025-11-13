import React from "react";
import {
    Globe,
    ShoppingBag,
    Briefcase,
    Rocket,
    Code,
    LineChart,
    Settings,
    ShieldCheck,
    Database,
    BugOff,
    LayoutTemplate,
    Search,
    ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from './Footer.jsx';

export default function ServicesProvider() {
    const navigate = useNavigate(); 

    const serviceCategories = [
        {
            title: "Website Development",
            icon: <LayoutTemplate size={28} />,
            description:
                "We design and build modern, responsive, and high-performing websites tailored to your brand and audience.",
            subServices: [
                {
                    name: "Business Websites",
                    desc: "Showcase your brand with a professional, conversion-focused online presence.",
                    icon: <Briefcase size={22} />,
                },
                {
                    name: "E-Commerce Stores",
                    desc: "Launch a scalable online shop with secure payments, analytics, and seamless UX.",
                    icon: <ShoppingBag size={22} />,
                },
                {
                    name: "Portfolio Websites",
                    desc: "Elegant, fast, and visually stunning portfolios built to impress your clients.",
                    icon: <Rocket size={22} />,
                },
                {
                    name: "Landing Pages",
                    desc: "High-converting, campaign-ready landing pages optimized for results.",
                    icon: <Globe size={22} />,
                },
            ],
        },
        {
            title: "SEO Optimization",
            icon: <Search size={28} />,
            description:
                "Boost your visibility, increase organic traffic, and rank higher with our targeted SEO strategies.",
            subServices: [
                {
                    name: "Keyword Research",
                    desc: "Discover what your customers are searching for to optimize your content strategy.",
                    icon: <LineChart size={22} />,
                },
                {
                    name: "On-Page Optimization",
                    desc: "Fine-tune metadata, content, and structure for improved rankings.",
                    icon: <Code size={22} />,
                },
                {
                    name: "Technical SEO",
                    desc: "Fix crawl issues, improve site speed, and enhance indexability.",
                    icon: <Settings size={22} />,
                },
            ],
        },
        {
            title: "Web Maintenance",
            icon: <BugOff size={28} />,
            description:
                "We handle all the behind-the-scenes upkeep—ensuring your site stays secure, updated, and running smoothly.",
            subServices: [
                {
                    name: "Security Monitoring",
                    desc: "Protect your site with ongoing malware scans and threat prevention.",
                    icon: <ShieldCheck size={22} />,
                },
                {
                    name: "Content Updates",
                    desc: "Keep your content fresh and aligned with your brand message.",
                    icon: <Database size={22} />,
                },
                {
                    name: "Performance Optimization",
                    desc: "Enhance loading times, reduce bloat, and improve user experience.",
                    icon: <Settings size={22} />,
                },
            ],
        },
    ];

    return (
        <section className="py-24 bg-[#f9fafb] text-gray-800 min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                {/* Go Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-10 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-all hover:gap-3"
                >
                    <ArrowLeft size={18} />
                    Go Back
                </button>

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[17px] font-semibold text-gray-600">
                        <span className="mr-1 text-indigo-600">//</span> Our Expertise
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-3">
                        We Offer <span className="text-indigo-600">Full-Service</span>{" "}
                        Digital Solutions
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        From beautiful web experiences to technical optimization and
                        long-term support — we provide everything your brand needs to grow
                        online.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="space-y-20">
                    {serviceCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-indigo-600 text-white p-3 rounded-xl">
                                    {category.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-[#0f172a]">
                                        {category.title}
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Sub-Services */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {category.subServices.map((sub, i) => (
                                    <div
                                        key={i}
                                        className="p-6 rounded-2xl bg-[#f9fafc] border border-gray-100 hover:border-indigo-300 transition"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">
                                                {sub.icon}
                                            </div>
                                            <h4 className="font-semibold text-[#0f172a]">
                                                {sub.name}
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {sub.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                {/* Footer Section */}
                <section>
                <Footer />
                </section>
        </section>
    );
}
