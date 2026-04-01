import React from "react";
import { toast } from "react-toastify";
import { ImFileEmpty } from "react-icons/im";

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

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    onRemove(item.id);
    toast.info(`"${item.name}" removed from cart.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    onCheckout();
    toast.success("Checkout successful! Cart cleared. 🎉", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ImFileEmpty className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-semibold text-gray-500">
          Your cart is empty
        </h3>
        <p className="text-gray-400  mt-1">
          Add some products to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Cart</h2>
      <div className="space-y-3">
        {cartItems.map((item) => {
          const iconSrc = iconMap[item.icon] || packageIcon;
          return (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                  <img
                    src={iconSrc}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-violet-600 text-sm font-medium">
                    ${item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="text-xs text-red-500 font-semibold hover:text-red-700 transition-colors cursor-pointer"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-6 px-1">
        <span className="text-gray-600 font-medium">Total:</span>
        <span className="text-xl font-extrabold text-gray-900">${total}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full py-3 text-white font-bold text-sm rounded-xl mt-4 transition-opacity hover:opacity-90 cursor-pointer"
        style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
