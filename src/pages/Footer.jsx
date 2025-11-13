import { Phone, Mail, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
    return (
    <footer className="bg-[#0B1A3A] text-white pt-20">
        <div className="max-w-6xl mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-12">
            <h2 className="text-3xl font-semibold">
            Let’s <span className="text-blue-500">Connect</span> there
            </h2>

            {/* Contact Us scroll button */}
            <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer"
            >
            Contact Us
            </ScrollLink>
        </div>

        {/* Links + Info */}
        <div className="grid md:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
            <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-lg font-bold">B</span>
                </div>
                <p className="text-lg font-semibold">EndsDevelopment.</p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                At BothEndsDevelopment, we believe every idea deserves great execution. Our team designs and develops tools
                that empower brands to grow, connect, and inspire.
            </p>

            <div className="flex gap-3 text-gray-300">
                <a
                href="https://wa.me/+27685021117"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 cursor-pointer"
                >
                <FaWhatsapp size={18} />
                </a>
                <a href="tel:+27842347310" className="hover:text-blue-400 cursor-pointer">
                <Phone size={18} />
                </a>
                <a
                href="mailto:mlangaviclyde@gmail.com"
                className="hover:text-red-400 cursor-pointer"
                >
                <Mail size={18} />
                </a>
                <a
                href="https://www.linkedin.com/in/langavi-makhubele-clyde/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 cursor-pointer"
                >
                <Linkedin size={18} />
                </a>
            </div>
            </div>

            {/* Navigation */}
            <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="hover:text-blue-400 cursor-pointer"
                >
                    About Us
                </ScrollLink>
                </li>
                <li>
                <ScrollLink
                    to="work-process"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="hover:text-blue-400 cursor-pointer"
                >
                    Work Process
                </ScrollLink>
                </li>
                <li>
                <ScrollLink
                    to="testimonials"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="hover:text-blue-400 cursor-pointer"
                >
                    Testimonial
                </ScrollLink>
                </li>
            </ul>
            </div>

            {/* Contact */}
            <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">(+27) 68-502-1117</p>
            <p className="text-gray-300 text-sm mb-2">(+27) 84-234-7310</p>
            <p className="text-gray-300 text-sm mb-2">mlangaviclyde@gmail.com</p>
            <p className="text-gray-300 text-sm">
                South Africa, <br /> Gauteng
            </p>
            </div>

            {/* Newsletter */}
            <div>
            <h3 className="text-sm font-semibold mb-4">Get the latest information</h3>
            <div className="flex bg-white/10 p-1 rounded-full items-center">
                <input
                type="email"
                placeholder="Email address"
                className="bg-transparent placeholder-gray-300 text-white text-sm px-3 py-2 w-full outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm transition">
                →
                </button>
            </div>
            </div>
        </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 py-5 text-center text-sm flex flex-col md:flex-row justify-between px-6 max-w-6xl mx-auto text-gray-400">
        <p>Copyright © 2025 BothEndsDevelopment. All Rights Reserved.</p>
        <div className="flex gap-6 justify-center mt-3 md:mt-0">
            <p className="hover:text-blue-400 cursor-pointer">User Terms & Conditions</p>
            <p className="hover:text-blue-400 cursor-pointer">Privacy Policy</p>
        </div>
        </div>
    </footer>
    );
}
