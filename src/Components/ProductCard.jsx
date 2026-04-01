import React from "react";
import { toast } from "react-toastify";

import { FaCheck } from "react-icons/fa";

import packageIcon from "../assets/package.png";
import playIcon from "../assets/Play.png";
import rocketIcon from "../assets/rocket.png";
import userIcon from "../assets/user.png";
import designToolIcon from "../assets/design-tool.png";
import operationIcon from "../assets/operation.png";
import portfolioIcon from "../assets/portfolio.png";
import cartIcon from "../assets/shopping-cart.png";
import socialMediaIcon from "../assets/social-media.png";
import writingIcon from "../assets/writing_2327400_1.png";

const iconMap = {
  package: packageIcon,
  Play: playIcon,
  rocket: rocketIcon,
  user: userIcon,
  "design-tool": designToolIcon,
  operation: operationIcon,
  portfolio: portfolioIcon,
  "shopping-cart": cartIcon,
  "social-media": socialMediaIcon,
  writing: writingIcon,
};

const tagStyles = {
  new: "bg-emerald-100 text-emerald-700",
  popular: "bg-amber-100 text-amber-700",
  "best-seller": "bg-red-100 text-red-600",
};

const tagLabels = {
  new: "New",
  popular: "Popular",
  "best-seller": "Best Seller",
};

const ProductCard = ({ product, onAddToCart }) => {
  const { name, description, price, period, tag, tagType, features, icon } =
    product;
  const iconSrc = iconMap[icon] || packageIcon;

  const handleBuyNow = () => {
    onAddToCart(product);
    toast.success(`"${name}" added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col relative">
      {tagType && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[tagType] || "bg-gray-100 text-gray-600"}`}
        >
          {tagLabels[tagType] || tag}
        </span>
      )}

      <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
        <img src={iconSrc} alt={name} className="w-7 h-7 object-contain" />
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-1 pr-16">{name}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4">
        {description}
      </p>

      <div className="mb-4">
        <span className="text-2xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm ml-1">/{period}</span>
      </div>

      <ul className="space-y-1.5 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
              <FaCheck className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        className="w-full py-2.5 text-white font-semibold text-sm rounded-xl transition-opacity hover:opacity-90 cursor-pointer"
        style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
