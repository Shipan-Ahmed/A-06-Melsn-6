import React from 'react';

const Optional = () => {
    return (
      <section
        className="py-16 px-4 md:px-8 lg:px-16 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #6d28d9, #7c3aed, #a855f7)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-purple-200 text-sm mb-8 leading-relaxed">
            Join thousands of professionals who trust DigiTools for their
            digital workflow. Start creating today.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="bg-white text-violet-700 font-bold rounded-full px-6 py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              Explore Products
            </button>
            <button className="border border-white text-white font-bold rounded-full px-6 py-3 hover:bg-white hover:text-violet-700 transition-colors cursor-pointer">
              View Pricing
            </button>
          </div>
          <p className="text-purple-300 text-xs mt-6">
            No credit card required · Cancel anytime · Free 14-day trial
          </p>
        </div>
      </section>
    );
};

export default Optional;