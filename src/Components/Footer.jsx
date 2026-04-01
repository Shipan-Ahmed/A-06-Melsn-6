import React from "react";
import rocketIcon from "../assets/rocket.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 text-center md:text-center-none lg:text-center-none md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10  ">
        <div className="lg:col-span-2 text-center md:text-start flex flex-col items-center md:justify-start md:items-start gap-4">
          <div className="flex items-center gap-2 mb-3">
            <img src={rocketIcon} alt="logo" className="w-6 h-6" />
            <span className="text-white font-bold text-lg">DigiTools</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {[
          {
            title: "Product",
            items: ["Features", "Pricing", "Templates", "Integrations"],
          },
          { title: "Company", items: ["About", "Blog", "Careers", "Press"] },
          {
            title: "Resources",
            items: ["Documentation", "Help Center", "Community", "Contact"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold text-sm mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {col.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-violet-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col justify-around items-center md:items-start md:justify-start">
          <h4 className="text-white font-semibold text-sm mb-4 md:text-start">
            Social Links
          </h4>
          <div className="flex gap-1 items-center md:gap-2 md:justify-start">
            <p className="rounded-full p-2 bg-white flex items-center ">
              <AiFillInstagram  />
            </p>
            <p className="rounded-full p-2 bg-white flex items-center ">
              <FaFacebook  />
            </p>
            <p className="rounded-full p-2 bg-white flex items-center ">
              <FaXTwitter  />
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-4">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((l) => (
            <a
              key={l}
              href="#"
              className="hover:text-violet-400 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
