export default function WhyChooseUs() {
    const features = [
        {
        title: "Affordable Price",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "💲",
        },
        {
        title: "Professional Team",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "👨‍💼",
        },
        {
        title: "18+ Years Experience",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "🎓",
        },
        {
        title: "Award Winning",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: "🏆",
        },
    ];

    return (
        <section className="bg-[#061C45] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>
            <p className="text-sm text-blue-300">// Why Choose Us</p>
            <h2 className="text-3xl font-semibold leading-snug mt-2">
                Why Trust Us for <br /> Your IT Needs?
            </h2>

            <img
                src="https://images.unsplash.com/photo-1598257006463-7f9eb9600d9f?auto=format&fit=crop&w=800&q=80"
                alt="Team Meeting"
                className="rounded-xl mt-6 shadow-lg"
            />
            </div>

            {/* Right Side */}
            <div className="space-y-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 transition-all">
                Get A Quote
            </button>

            <div className="grid sm:grid-cols-2 gap-8 mt-6">
                {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-gray-300 text-sm mt-1">{feature.text}</p>
                    </div>
                </div>
                ))}
            </div>

            </div>

        </div>
        </section>
    );
}
