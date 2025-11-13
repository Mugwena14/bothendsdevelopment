export default function Projects() {
  const projects = [
    {
      title: "Agency Appointment App",
      image: "/images/agency.png",
    },
    {
      title: "Personal Portfolio Website",
      image: "/images/Portfolio.png",
    },
    {
      title: "Car Wrap Booking App",
      image: "/images/drip coat clone.png",
    },
    {
      title: "AI-Powered Task Management App",
      image: "/images/Rexium.png",
    },
  ];

  return (
    <section className="py-16 bg-[#071B3A]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-white"> <span className="mr-1 text-indigo-600">//</span> Our Latest Projects</p>
        <h2 className="text-3xl font-semibold mt-2 text-indigo-600">
          Explore Our Showcase of <br />
          <span className="text-indigo-600">Featured Works</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
            >
              {/* Image with dark default brightness */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-70 object-cover brightness-75 group-hover:brightness-100 transition duration-300"
              />

              {/* Blue gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-900/80 via-blue-700/40 to-transparent"></div>

              {/* Title on top of gradient */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white z-10 text-left">
                <h3 className="text-lg font-medium">{project.title}</h3>
              </div>

              {/* Hover Icon */}
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-10">
                →
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition">
          View All Works
        </button>
      </div>
    </section>
  );
}
