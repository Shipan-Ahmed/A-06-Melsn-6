import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  {
    step: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
    color: "bg-violet-100",
  },
  {
    step: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the toolsthat fit your needs.",
    icon: packageIcon,
    color: "bg-blue-100",
  },
  {
    step: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
    color: "bg-emerald-100",
  },
];

const Steps = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Get Started in 3 Steps
        </h2>
        <p className="text-gray-500 text-sm mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center mb-4 shadow-sm`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-bold text-violet-400 mb-1">
                STEP {item.step}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
