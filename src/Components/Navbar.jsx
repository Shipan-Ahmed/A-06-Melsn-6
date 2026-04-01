import React, { useState } from "react";
import rocketIcon from "../assets/rocket.png";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <a className="flex items-center gap-2 text-xl font-bold text-violet-700 cursor-pointer">
          <img src={rocketIcon} alt="logo" className="w-6 h-6" />
          DigiTools
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-600">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="px-3 py-2 rounded-lg hover:text-violet-700 hover:bg-violet-50 transition-colors"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <span
              className={`absolute -top-1 -right-1 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${cartCount > 0 ? "bg-violet-600" : "bg-gray-400"}`}
            >
              {cartCount}
            </span>
          </div>

          <a
            href="#"
            className="hidden md:block text-sm font-medium text-gray-700 hover:text-violet-700 transition-colors px-2"
          >
            Login
          </a>
          <a
            href="#"
            className="text-white text-sm font-semibold px-5 py-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
          >
            Get Started
          </a>

          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-3 px-4">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-sm text-gray-600 hover:text-violet-700"
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
