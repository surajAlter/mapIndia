import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold text-blue-600">Linkages</h2>
      <ul className="mt-2 text-sm space-y-2">
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Map of India</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Physical Map of India</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Outline Map of India</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">More...</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
