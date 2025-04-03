import React, { useState } from "react";
import Logo from "../assets/image.jpg";
import { FaSearch, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isStatesDropdownOpen, setIsStatesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ];

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center px-8 py-3 border-b">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Maps of India" className="h-12 rounded-md shadow-sm" />
          <span className="text-2xl font-bold text-red-600">
            Maps<span className="text-blue-600">ofIndia</span>.com
          </span>
        </div>

        {/* Google Search */}
        <div className="flex items-center bg-gray-100 border rounded-full px-4 py-2 space-x-2 shadow-sm">
          <input
            type="text"
            placeholder="Search anything..."
            className="outline-none bg-transparent w-64 text-sm px-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full transition-all"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-blue-600 text-white text-sm flex px-8">
        <a href="/" className="px-5 py-3 hover:bg-blue-700 transition-all font-bold">Home</a>

        {/* Dropdown for States */}
        <div className="relative">
          <button
            onClick={() => setIsStatesDropdownOpen(!isStatesDropdownOpen)}
            className="flex items-center gap-1 px-5 py-3 hover:bg-blue-700 transition-all"
          >
            States of India <FaAngleDown />
          </button>
          {isStatesDropdownOpen && (
            <div className="absolute left-0 mt-2 w-60 bg-white text-black shadow-lg rounded-lg overflow-hidden z-10 border">
              {statesOfIndia.map((state, index) => (
                <a
                  key={index}
                  href={`#${state.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-200 transition-all"
                >
                  {state}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Other Navigation Links */}
        {[
          "Cities of India", "India Travel", "My India",
          "Utilities", "Our Channel", "What's New"
        ].map((item, index) => (
          <a key={index} href="#" className="px-5 py-3 hover:bg-blue-700 transition-all">
            {item}
          </a>
        ))}

        {/* City Selector */}
        <div className="ml-auto flex items-center space-x-2 px-5 py-3">
          <select className="text-black text-sm p-2 border rounded-md shadow-sm focus:outline-none">
            <option>Select City, State</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Bangalore</option>
          </select>
          <button className="bg-white text-black px-4 py-2 text-sm border rounded-md shadow-sm hover:bg-gray-200 transition-all">
            Go
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-8 py-3 text-sm text-red-600 bg-gray-100 border-t">
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
