import { DollarSign, Users, Briefcase, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Affordable Price",
      text: "We deliver premium services without breaking your budget.",
      icon: <DollarSign size={28} />,
    },
    {
      title: "Professional Team",
      text: "Our skilled experts ensure top-tier solutions every time.",
      icon: <Users size={28} />,
    },
    {
      title: "18+ Years Experience",
      text: "Decades of proven expertise in technology and innovation.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Award Winning",
      text: "Recognized for excellence and customer satisfaction worldwide.",
      icon: <Award size={28} />,
    },
  ];

  return (
    <section className="bg-[#071B3A] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <p className="text-sm text-blue-400">// Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mt-3">
            Why Trust Us for <br /> Your IT Needs?
          </h2>

          <div className="relative mt-8">
            <img
              src="https://images.unsplash.com/photo-1598257006463-7f9eb9600d9f?auto=format&fit=crop&w=800&q=80"
              alt="Team Meeting"
              className="rounded-2xl shadow-xl"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                <div className="w-0 h-0 border-l-[12px] border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent border-l-white ml-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-10">
          <div className="flex justify-end">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-all">
              Get A Quote
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start space-x-4 hover:translate-y-[-3px] transition-transform"
              >
                <div className="bg-white/10 p-3 rounded-xl text-blue-400">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
