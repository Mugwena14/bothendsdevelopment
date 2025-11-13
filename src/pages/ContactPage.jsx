import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";

export default function ContactSection() {
    return (
    <section className="py-20 bg-[#020B25] text-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Left Contact Info Card */}
        <div className="bg-[#041033]/90 backdrop-blur-md p-10 rounded-3xl flex flex-col justify-between shadow-lg border border-white/5">
            <div className="space-y-10">
            <div>
                <h4 className="text-xl font-semibold mb-2 flex items-center gap-3">
                <MapPin size={22} className="text-blue-400" /> Location
                </h4>
                <p className="text-base text-gray-300 leading-relaxed">
                South Africa <br /> Gauteng
                </p>
            </div>

            <div>
                <h4 className="text-xl font-semibold mb-2 flex items-center gap-3">
                <Phone size={22} className="text-blue-400" /> Contact
                </h4>
                <p className="text-base text-gray-300">
                Phone: <span className="text-white">+27 68 502 1117</span>
                </p>
                <p className="text-base flex items-center gap-2 mt-1 text-gray-300">
                <Mail size={20} className="text-blue-400" />{" "}
                mlangaviclyde@gmail.com
                </p>
            </div>

            <div>
                <h4 className="text-xl font-semibold mb-2 flex items-center gap-3">
                <Clock size={22} className="text-blue-400" /> Availability
                </h4>
                <p className="text-base text-gray-300">Mon–Sun 24/7</p>
            </div>
            </div>

            {/* Social Icons */}
            <div className="mt-12">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                    key={index}
                    className="bg-blue-600/20 hover:bg-blue-600/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
                >
                    <Icon size={22} />
                </button>
                ))}
            </div>
            </div>
        </div>

        {/* Right Contact Form */}
        <div>
            <p className="text-sm text-gray-400"> <span className="mr-1 text-indigo-500">//</span> Contact Us</p>
            <h2 className="text-4xl font-semibold mt-1">
            Get Your <span className="text-blue-500">Free Quote</span> Today!
            </h2>

            <form className="mt-10 space-y-6">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                <label className="block text-sm text-gray-300 mb-2">
                    Your Name
                </label>
                <input
                    className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Ex. John Doe"
                />
                </div>

                <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                    className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="example@gmail.com"
                />
                </div>
            </div>

            {/* Phone + Service */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                <label className="block text-sm text-gray-300 mb-2">Phone</label>
                <input
                    className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter Phone Number"
                />
                </div>

                <div>
                <label className="block text-sm text-gray-300 mb-2">
                    Service
                </label>
                <select
                    className="w-full bg-[#091740]/60 border border-white/10 text-white px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    defaultValue=""
                >
                    <option value="" disabled>
                    Select Services
                    </option>
                    <option>Web Development</option>
                    <option>Web Maintenance</option>
                    <option>SEO Optimization</option>
                </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm text-gray-300 mb-2">
                Your Message
                </label>
                <textarea
                className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter here..."
                ></textarea>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-md hover:shadow-blue-500/30">
                Send Message
            </button>
            </form>
        </div>
        </div>
    </section>
    );
}
