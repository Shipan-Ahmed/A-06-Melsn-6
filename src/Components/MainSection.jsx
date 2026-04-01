import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const MainSection = ({ cartItems, onAddToCart, onRemove, onCheckout }) => {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <section className="py-14 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "products"
                  ? "text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
              style={
                activeTab === "products"
                  ? { background: "linear-gradient(135deg, #7c3aed, #a855f7)" }
                  : {}
              }
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "cart"
                  ? "text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
              style={
                activeTab === "cart"
                  ? { background: "linear-gradient(135deg, #7c3aed, #a855f7)" }
                  : {}
              }
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <Cart
              cartItems={cartItems}
              onRemove={onRemove}
              onCheckout={onCheckout}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
