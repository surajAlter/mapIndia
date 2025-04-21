import React from "react";
import { useNavigate } from "react-router-dom";
import AdditionalSidebar from "../AdditionalSideBar";

import mapImage from "../../assets/India.jpg";
import politicalMap from "../../assets/maps/india-political-map.jpg";
import statesCapitalsMap from "../../assets/maps/india_states_and_capitals.jpg";
import railwayMap from "../../assets/maps/indianrail_zonal-map_big.jpg";
import physicalMap from "../../assets/maps/physical-map-indiajpg.jpg";
import worldMap from "../../assets/maps/india-location-map.jpg";

const MapofIndiaPage = () => {
  const navigate = useNavigate();

  const mostViewedMaps = [
    { title: "POLITICAL MAP OF INDIA", image: politicalMap, path: "/maps/political" },
    { title: "INDIA STATES AND CAPITALS", image: statesCapitalsMap, path: "/maps/states-capitals" },
    { title: "STATES AND CAPITALS ON INDIA MAP FOR SCHOOLS", image: statesCapitalsMap, path: "/maps/states-capitals-schools" },
    { title: "RAILWAY MAP OF INDIA", image: railwayMap, path: "/maps/railway" },
    { title: "PHYSICAL MAP OF INDIA", image: physicalMap, path: "/maps/physical" },
    { title: "INDIA ON WORLD MAP", image: worldMap, path: "/maps/world" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-md p-4 border-r">
        <AdditionalSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
        {/* Main Map Image */}
        <div className="flex justify-center">
          <img
            src={mapImage}
            alt="Map of India"
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="mt-6 text-gray-800 space-y-4">
          <p>
            India is officially known as the Republic of India. It comprises a total of 28
            states along with eight union territories. India is the second most populated country
            in the world and the world’s largest democracy. The country’s coastline measures 7,517
            kilometres in length, out of which 5,423 kilometres belong to peninsular India, and
            2,094 kilometres belong to Andaman, Nicobar, and Lakshadweep island chains.
          </p>

          <p>
            Broadly, India is divided into six major zones: East India, West India, North India,
            South India, Northeast India, and Central India.
          </p>

          {/* Most Viewed Maps Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-center mb-6">Most Viewed Maps of India</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {mostViewedMaps.map((map, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={map.image}
                    alt={map.title}
                    className="h-48 w-auto object-cover rounded-md shadow"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-800">{map.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 text-right pr-4">
              <button
                onClick={() => navigate("/maps/india")}
                className="text-blue-600 font-medium hover:underline"
              >
                See All &gt;&gt;
              </button>
            </div>
          </div>

          {/* Regional Sections */}
          <h2 className="text-lg font-semibold mt-8">Eastern India</h2>
          <p>
            Includes Bihar, Jharkhand, Odisha, West Bengal, and Andaman and Nicobar Islands.
            Total population: 226,925,195. Covers 418,323 sq km. Major languages: Bengali,
            Odia, Hindi, English, Maithili, Nepali, and Urdu.
          </p>

          <h2 className="text-lg font-semibold mt-4">Western India</h2>
          <p>
            Covers 508,052 sq km. Includes Gujarat, Goa, Maharashtra, Dadra & Nagar Haveli, and
            Daman & Diu. Mumbai, the financial capital of India, is in Maharashtra. Official
            languages: Marathi, Gujarati, Konkani, and English.
          </p>

          <h2 className="text-lg font-semibold mt-4">North India</h2>
          <p>
            Includes Himachal Pradesh, Uttar Pradesh, Rajasthan, Uttarakhand, Punjab, Haryana,
            Delhi, Chandigarh, Ladakh, and Jammu & Kashmir. Major cities: New Delhi, Lucknow,
            Chandigarh.
          </p>

          <h2 className="text-lg font-semibold mt-4">South India</h2>
          <p>
            Covers Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, Lakshadweep, and
            Puducherry. Bengaluru is the IT hub of India.
          </p>

          <h2 className="text-lg font-semibold mt-4">Northeast India</h2>
          <p>
            Includes the Seven Sister States: Arunachal Pradesh, Assam, Meghalaya, Tripura,
            Mizoram, Manipur, and Nagaland, along with Sikkim.
          </p>

          <h2 className="text-lg font-semibold mt-4">Central India</h2>
          <p>Includes Madhya Pradesh and Chhattisgarh.</p>

          <h2 className="text-lg font-semibold mt-4">India General Maps</h2>
          <ul className="list-disc pl-6">
            <li>India Political Map</li>
            <li>India Road Map</li>
            <li>India River Map</li>
            <li>India Vegetation Map</li>
            <li>India Nuclear Plant Map</li>
            <li>Poverty Map of India</li>
            <li>India Physical Map</li>
            <li>India Tourist Map</li>
            <li>Indian Railway Map</li>
            <li>Thermal Power Plant Map</li>
          </ul>

          <p className="text-gray-500 text-sm mt-4">Last Updated on: January 09, 2025</p>
        </div>
      </main>
    </div>
  );
};

export default MapofIndiaPage;
