export default function Projects() {
  const projects = [
    {
      title: "Care Connect - Doctor Appointment App",
      image: "/images/agency.png",
      tags: ["UI/UX Design", "App Design", "Wireframe"],
    },
    {
      title: "Dental - Dentist and Dental Clinic Website UI/UX Design",
      image: "/images/Portfolio.png",
      tags: ["UI/UX Design", "Web Design", "Wireframe"],
    },
    {
      title: "Car Rental - Car Rental Booking Mobile App",
      image: "/images/drip coat clone.png",
      tags: ["UI/UX Design", "App Design", "Wireframe"],
    },
    {
      title: "Hotel Booking - Hotel Booking App Landing Page UI/UX Design",
      image: "/images/Rexium.png",
      tags: ["UI/UX Design", "Landing Page", "Wireframe"],
    },
  ];

    return (
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

        <p className="text-sm text-gray-500">// Our Latest Projects</p>
        <h2 className="text-3xl font-semibold mt-2 text-gray-900">
        Explore Our Showcase of <br />
        <span className="text-blue-600">Featured Works</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-lg font-medium">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-white/20 rounded-full backdrop-blur-md">
                        {tag}
                    </span>
                    ))}
                </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                →
                </div>
            </div>
            ))}
        </div>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
            View All Works
        </button>

        </div>
    </section>
    );
}
