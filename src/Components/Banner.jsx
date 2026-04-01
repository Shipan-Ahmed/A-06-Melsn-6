import React from "react";
import bannerImg from "../assets/banner.png";

import { TfiControlPlay } from "react-icons/tfi";

const Banner = () => {
  return (
    <section className="bg-white mt-10 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div  >
          <div className="inline-flex items-center pt-2 gap-2 bg-[#E1E7FF] border border-violet-300 text-violet-600 text-xs px-3 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-700 inline-block"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Supercharge Your <br />
            <span className="text-violet-600">Digital Workflow</span>
          </h1>
          <p className="text-gray-500 text-base mb-6 max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software — all in one place. Start creating faster today.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              className="text-white font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              }}
            >
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-violet-600 text-violet-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
              <TfiControlPlay />
              Watch Demo
            </button>
          </div>
        </div>

        <div className=" flex justify-center pb-4 md:justify-end">
          <img
            src={bannerImg}
            alt="Digital tools banner"
            className="w-full max-w-sm md:max-w-md rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
      </section>
      
  );
};

export default Banner;
