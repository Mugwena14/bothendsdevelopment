import { useState } from "react";
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
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {

    const links = [
        {
        icon: FaWhatsapp,
        href: "https://wa.me/+27685021117", 
        },
        {
        icon: Phone,
        href: "tel:+27842347310", 
        },
        {
        icon: Mail,
        href: "mailto:mlangaviclyde@gmail.com", 
        },
        {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/langavi-makhubele-clyde/",
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); 

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok) {
            setStatus({ type: "success", message: "✅ Message sent successfully!" });
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        } else {
            setStatus({ type: "error", message: data.error || "Something went wrong." });
        }
        } catch (err) {
        setStatus({ type: "error", message: "⚠️ Server error. Please try again later." });
        } finally {
        setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-[#020B25] text-white" id="contact">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            {/* LEFT SIDE: Contact Info */}
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
                <div className="flex space-x-4">
                {links.map(({ icon: Icon, href }, i) => (
                    <a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="bg-blue-600/20 hover:bg-blue-600/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
                    >
                    <Icon size={22} />
                    </a>
                ))}
                </div>
            </div>

            {/* RIGHT SIDE: Contact Form */}
            <div>
            <p className="text-sm text-gray-400">
                <span className="mr-1 text-indigo-500">//</span> Contact Us
            </p>
            <h2 className="text-4xl font-semibold mt-1">
                Get Your <span className="text-blue-500">Free Quote</span> Today!
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm text-gray-300 mb-2">Your Name</label>
                    <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex. John Doe"
                    className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                    <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
                </div>

                {/* Phone + Service */}
                <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm text-gray-300 mb-2">Phone</label>
                    <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-300 mb-2">Service</label>
                    <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#091740]/60 border border-white/10 text-white px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                    <option value="">Select Service</option>
                    <option>Web Development</option>
                    <option>Web Maintenance</option>
                    <option>SEO Optimization</option>
                    </select>
                </div>
                </div>

                {/* Message */}
                <div>
                <label className="block text-sm text-gray-300 mb-2">Your Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter here..."
                    className="w-full bg-[#091740]/60 border border-white/10 text-white placeholder-gray-400 px-4 py-3.5 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
                </div>

                {/* Submit button */}
                <button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-md hover:shadow-blue-500/30 ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                }`}
                >
                {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Status message */}
                {status && (
                <p
                    className={`mt-3 text-sm ${
                    status.type === "success" ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {status.message}
                </p>
                )}
            </form>
            </div>
        </div>
        </section>
    );
}
