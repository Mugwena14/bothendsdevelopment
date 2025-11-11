import { TbBulb } from "react-icons/tb";
import { Layers, Smile, NotepadText } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      description: "We take the time to understand your goals and challenges.",
      icon: <NotepadText size={22} />,
    },
    {
      id: "02",
      title: "Strategy",
      description: "We define a clear, tailored roadmap for your project.",
      icon: <TbBulb size={22} />,
    },
    {
      id: "03",
      title: "Implementation",
      description: "We develop, refine, and execute with precision.",
      icon: <Layers size={22} />,
    },
    {
      id: "04",
      title: "Final Result",
      description: "We deliver a polished, high-quality final product.",
      icon: <Smile size={22} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-gray-500 font-medium mb-1">
          <span className="text-blue-500 mr-1">//</span> Our Work Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Proven <span className="text-blue-600">Work Process</span>
        </h2>

        {/* Steps */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between relative">

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center w-full md:w-auto">

              {/* ICON + STEP NUMBER */}
              <div className="relative flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full text-blue-600 text-3xl">
                {step.icon}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-8 h-8 bg-blue-600 text-white text-xs flex items-center justify-center font-semibold rounded-full">
                  {step.id}
                </span>
              </div>

              {/* TITLE */}
              <h4 className="font-semibold text-gray-900 mt-6 text-lg">
                {step.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
                {step.description}
              </p>
            </div>
          ))}

          {/* CONNECTING LINES (Blue Gradient) */}
          <div className="hidden md:flex absolute inset-0 -z-10 px-14">
            <div className="flex items-center justify-around w-full">
              <div className="h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
