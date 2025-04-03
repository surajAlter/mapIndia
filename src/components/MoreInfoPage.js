import React from "react";
import Sidebar from "./Sidebar";

const MoreInfoPage = ({ title }) => {
  return (
    <div className="flex">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700">
          Welcome to the detailed information section about Maps of India.
          Here you will find various categories of maps, including Physical, Outline, 
          Census, Business, Economy, Culture, and much more.
        </p>

        {/* Information & Maps on India */}
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold">Information & Maps on India</h2>
          <ul className="grid grid-cols-3 gap-4 mt-2">
            <li>India Map in Different Languages</li>
            <li>Physical Map of India</li>
            <li>Zonal Maps of India</li>
            <li>Reference Maps</li>
            <li>Political Map of India</li>
            <li>General Information on India</li>
            <li>Tricolor Map of India</li>
            <li>Outline Map of India</li>
            <li>Maps for School Children</li>
            <li>States and Territories Map of India</li>
          </ul>
        </div>

        {/* Additional Information Sections */}
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold">Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <div>
              <h3 className="font-bold">About India</h3>
              <ul>
                <li>India Flag</li>
                <li>Geography of India</li>
                <li>History of India</li>
                <li>Economy of India</li>
                <li>Culture of India</li>
                <li>Languages in India</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Transport in India</h3>
              <ul>
                <li>Road Map of India</li>
                <li>National Highways</li>
                <li>Indian Railways</li>
                <li>Airports in India</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Cities of India</h3>
              <ul>
                <li>Top Ten Cities</li>
                <li>Agra</li>
                <li>Hyderabad</li>
                <li>Pune</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Travel to India</h3>
              <ul>
                <li>Hotels in India</li>
                <li>Tourist Places</li>
                <li>Beaches in India</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Government Schemes</h3>
              <ul>
                <li>Digital India</li>
                <li>Make in India</li>
                <li>Swachh Bharat Abhiyan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage;