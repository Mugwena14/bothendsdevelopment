import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
    return (
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* Left Contact Info Card */}
        <div className="bg-[#061C45] text-white p-8 rounded-2xl space-y-8">

            <div>
            <h4 className="text-lg font-semibold flex items-center gap-2">
                <MapPin size={18} /> Address
            </h4>
            <p className="text-sm mt-2">2464 Royal Ln. Mesa,<br />New Jersey 45463</p>
            </div>

            <div>
            <h4 className="text-lg font-semibold flex items-center gap-2">
                <Phone size={18} /> Contact
            </h4>
            <p className="text-sm mt-2">Phone : (+000) 000-0000</p>
            <p className="text-sm flex items-center gap-2">
                <Mail size={16} /> example@gmail.com
            </p>
            </div>

            <div>
            <h4 className="text-lg font-semibold flex items-center gap-2">
                <Clock size={18} /> Open Time
            </h4>
            <p className="text-sm mt-2">Monday - Friday : 10:00 - 20:00</p>
            </div>

            <div>
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-3 mt-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                    key={index}
                    className="bg-white/20 hover:bg-white/30 transition w-10 h-10 rounded-full flex items-center justify-center"
                >
                    <Icon size={18} />
                </button>
                ))}
            </div>
            </div>

        </div>

        {/* Right Contact Form */}
        <div>
            <p className="text-sm text-gray-500">// Contact Us</p>
            <h2 className="text-3xl font-semibold mt-1 text-black">
            Get Your <span className="text-blue-600">Free Quote</span> Today!
            </h2>

            <form className="mt-8 space-y-6">

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                        className="w-full border border-gray-300 bg-gray-50 text-black placeholder-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex. John Doe"
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        className="w-full border border-gray-300 bg-gray-50 text-black placeholder-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="example@gmail.com"
                    />
                    </div>
                </div>

                {/* Phone + Services */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                        className="w-full border border-gray-300 bg-gray-50 text-black placeholder-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Phone Number"
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                    <select
                        className="w-full border border-gray-300 bg-gray-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="" disabled selected>Select Services</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>App Development</option>
                        <option>Branding / Graphics</option>
                    </select>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                    className="w-full border border-gray-300 bg-gray-50 text-black placeholder-black px-4 py-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter here..."
                    ></textarea>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition">
                    Send Message
                </button>

            </form>
        </div>

        </div>
    </section>
    );
}
