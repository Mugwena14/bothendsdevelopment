export default function WorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: "🗂️",
    },
    {
      id: "02",
      title: "Strategy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: "💡",
    },
    {
      id: "03",
      title: "Implementation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: "📦",
    },
    {
      id: "04",
      title: "Final Result",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: "😊",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p className="text-sm text-gray-500">// Our Work Process</p>
        <h2 className="text-3xl font-semibold mt-1 text-black">
        Our Proven <span className="text-blue-600">Work Process</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <span className="text-2xl">{step.icon}</span>
                <span className="absolute -top-2 -right-2 text-white bg-blue-600 text-xs w-6 h-6 flex items-center justify-center rounded-full">
                  {step.id}
                </span>
              </div>
              <h4 className="font-semibold mt-4 text-lg">{step.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
