import { Star } from "lucide-react";

export default function Testimonials() {
    return (
    <section className="py-20 bg-[#0B1A3A] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Label */}
        <p className="text-[17px] font-md text-gray-300 tracking-wide mb-2"> <span className="mr-1 text-indigo-600">//</span>Testimonials</p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-14">
            Testimonials: <span className="text-blue-500">Trusted by Our Clients</span>
        </h2>

        {/* Testimonials Cards */}
        <div className="grid sm:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-[#14224A] p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                <span className="text-white ml-2 text-sm font-medium">5.0</span>
            </div>

            <h3 className="text-xl text-left font-semibold mb-3">A Wonderful Experience!</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam.
            </p>

            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                <p className="font-medium text-white">Jenny Wilson</p>
                <p className="text-sm text-gray-400">Owner, Furniture Store</p>
                </div>
            </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#14224A] p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                <span className="text-white ml-2 text-sm font-medium">5.0</span>
            </div>

            <h3 className="text-xl text-left font-semibold mb-3">Highly Recommended!</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam.
            </p>

            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                <p className="font-medium text-white">Drip Coat</p>
                <p className="text-sm text-gray-400">Car Wrap Booking App</p>
                </div>
            </div>
            </div>

        </div>

        {/* Slider Dots */}
        <div className="flex justify-center mt-10 gap-2">
            <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
            <span className="w-8 h-1 bg-white/20 rounded-full"></span>
            <span className="w-8 h-1 bg-white/20 rounded-full"></span>
            <span className="w-8 h-1 bg-white/20 rounded-full"></span>
        </div>

        </div>
    </section>
    );
}
