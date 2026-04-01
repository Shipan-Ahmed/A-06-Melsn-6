import React from 'react';

const Rating = () => {
    return (
      <div style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}>
        <div className="mt-12 rounded-2xl text-white py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-extrabold">50K+</p>
            <p className="text-purple-200 text-sm mt-1">Active Users</p>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-purple-400 py-4 md:py-0">
            <p className="text-3xl font-extrabold">200+</p>
            <p className="text-purple-200 text-sm mt-1">Premium Tools</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">4.9</p>
            <p className="text-purple-200 text-sm mt-1">Rating</p>
          </div>
        </div>
      </div>
    );
};

export default Rating;