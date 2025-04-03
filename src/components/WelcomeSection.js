import React from "react";

const WelcomeSection = () => {
  return (
    <section className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Welcome to Maps of India</h2>
      <p className="text-gray-600 mt-2">
        Explore maps of India, states, cities, and much more. Discover the rich cultural heritage and geographical diversity of India.
      </p>
      <img src="/welcome-map.png" alt="Map of India" className="mt-4 w-full rounded-lg" />
    </section>
  );
};

export default WelcomeSection;
