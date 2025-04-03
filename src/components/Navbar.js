import React, { useState } from "react";

const Navbar = () => {
  const [isStatesDropdownOpen, setIsStatesDropdownOpen] = useState(false);

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ];

  return (
    <nav className="bg-white shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center px-6 py-2">
        {/* Logo & Title */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Maps of India" className="h-10" />
          <span className="text-xl font-bold text-red-600">
            Maps<span className="text-blue-600">ofIndia</span>.com
          </span>
        </div>

        {/* Google Search */}
        <div className="flex items-center border rounded-md p-1 space-x-2 bg-gray-100">
          <input type="text" placeholder="Search" className="p-1 outline-none bg-transparent" />
          <button className="bg-gray-200 px-3 py-1 text-sm rounded-md">Search</button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-blue-600 text-white text-sm flex px-6">
        <a href="/" className="px-4 py-2 hover:bg-blue-700 font-bold">Home</a>

        <div className="relative">
          <button 
            onClick={() => setIsStatesDropdownOpen(!isStatesDropdownOpen)}
            className="px-4 py-2 hover:bg-blue-700 focus:outline-none"
          >
            States of India ▼
          </button>
          {isStatesDropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md overflow-hidden z-10">
              {statesOfIndia.map((state, index) => (
                <a 
                  key={index} 
                  href={`#${state.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {state}
                </a>
              ))}
            </div>
          )}
        </div>

        {[
          "Cities of India", "India Travel", "My India", 
          "Utilities", "Our Channel", "What's New"
        ].map((item, index) => (
          <a key={index} href="#" className="px-4 py-2 hover:bg-blue-700">
            {item}
          </a>
        ))}

        {/* City Selector */}
        <div className="ml-auto flex items-center px-4 py-2">
          <select className="text-black text-sm p-1 border rounded-md">
            <option>Select City, State</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Bangalore</option>
          </select>
          <button className="ml-2 bg-white text-black px-3 py-1 text-sm border rounded-md">
            Go
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-6 py-2 text-sm text-red-600">
        For Custom/Business Map Quote{" "}
        <span className="font-bold">+91 8929683196</span> |{" "}
        <a href="mailto:apoorv@mappingdigiworld.com" className="text-blue-600 underline">
          apoorv@mappingdigiworld.com
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
