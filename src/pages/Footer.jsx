import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
    <footer className="bg-[#0B1A3A] text-white pt-20">
        <div className="max-w-6xl mx-auto px-6">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-12">
            <h2 className="text-3xl font-semibold">
            Let’s <span className="text-blue-500">Connect</span> there
            </h2>

            <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-medium transition">
            Contact Us
            </button>
        </div>

        {/* Links + Info */}
        <div className="grid md:grid-cols-4 gap-10">

            {/* Company Info */}
            <div>
            <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-lg font-bold">I</span>
                </div>
                <p className="text-lg font-semibold">IT Company.</p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex gap-3 text-gray-300">
                <Facebook className="hover:text-blue-400 cursor-pointer" size={18} />
                <Twitter className="hover:text-blue-400 cursor-pointer" size={18} />
                <Instagram className="hover:text-blue-400 cursor-pointer" size={18} />
                <Linkedin className="hover:text-blue-400 cursor-pointer" size={18} />
            </div>
            </div>

            {/* Navigation */}
            <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-blue-400 cursor-pointer">Our Team</li>
                <li className="hover:text-blue-400 cursor-pointer">Career</li>
                <li className="hover:text-blue-400 cursor-pointer">About Us</li>
                <li className="hover:text-blue-400 cursor-pointer">Testimonial</li>
                <li className="hover:text-blue-400 cursor-pointer">FAQs</li>
            </ul>
            </div>

            {/* Contact */}
            <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">(000) 000-0000</p>
            <p className="text-gray-300 text-sm mb-2">example@gmail.com</p>
            <p className="text-gray-300 text-sm">
                2464 Royal Ln. Mesa, <br /> New Jersey 45463
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
        <p>Copyright © 2025 IT Company. All Rights Reserved.</p>
        <div className="flex gap-6 justify-center mt-3 md:mt-0">
            <p className="hover:text-blue-400 cursor-pointer">User Terms & Conditions</p>
            <p className="hover:text-blue-400 cursor-pointer">Privacy Policy</p>
        </div>
        </div>
    </footer>
    );
}
