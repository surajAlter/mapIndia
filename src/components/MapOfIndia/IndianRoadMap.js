import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import roadMapImage from '../../assets/maps/india-road-map.jpg'; // replace with your road network map image

const IndiaRoadNetworkMap = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { name: "Road Maps", link: "/road-maps" },
    { name: "Distance Calculator", link: "/distance-calculator" },
    { name: "Driving Directions Map", link: "/driving-directions-map" },
    { name: "Pocket Maps", link: "/pocket-maps" },
    { name: "National Highway", link: "/national-highway" },
    { name: "Wall Map", link: "/wall-map" },
    { name: "Golden Quadrilateral", link: "/golden-quadrilateral" },
    { name: "Expressway", link: "/expressway" },
    { name: "States Road Network", link: "/states-road-network" },
    { name: "Mumbai Road Map", link: "/mumbai-road-map" },
    { name: "Hyderabad Road Map", link: "/hyderabad-road-map" },
    { name: "Delhi Road Map", link: "/delhi-road-map" },
    { name: "Bengaluru Road Map", link: "/bengaluru-road-map" },
    { name: "Pune Road Map", link: "/pune-road-map" },
    { name: "Jaipur Road Map", link: "/jaipur-road-map" },
    { name: "Ahmedabad Road Map", link: "/ahmedabad-road-map" },
    { name: "South India Road Map", link: "/south-india-road-map" },
    { name: "KMP Expressway Map", link: "/kmp-expressway-map" },
    { name: "India Traffic Signs", link: "/india-traffic-signs" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-md p-4 border-r">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navigation</h2>
        <ul className="space-y-3">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="block p-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
        {/* Heading */}
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800">India Road Network Map</h1>
          <h2 className="text-xl text-blue-700 mt-1">भारतीय सड़क नेटवर्क मानचित्र</h2>
        </header>

        {/* CTA */}
        <p className="text-lg font-medium text-blue-600 mb-3">
          Click on any Section of the Map to Explore Further
        </p>

        {/* Image */}
        <img
          src={roadMapImage}
          alt="Indian Road Network Map"
          className="w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-[1.02] mb-6"
        />

        {/* Separator */}
        <div className="flex items-center my-8">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 font-medium">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Custom Map Link */}
        <div
          onClick={() => navigate('/custom-road-map')}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline cursor-pointer mb-10 transition"
        >
          Click here for Customized Road Maps
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Info Section */}
        <section className="space-y-6 bg-white p-6 rounded-xl shadow-sm text-base leading-relaxed">
          <p>India road maps help you explore the vast road network across the country, featuring national highways, expressways, and rural roads.</p>
          <p>India has the third-largest road network in the world, covering approximately 3,320,410 kilometers.</p>
          <p>National Highways, managed by NHAI, connect key cities and economic hubs, while expressways provide fast, access-controlled routes.</p>
          <p>Major projects like the Yamuna Expressway and Golden Quadrilateral have significantly enhanced connectivity.</p>
          <p>Road infrastructure is crucial to India's economic growth, supporting trade, travel, and development in urban and rural areas.</p>
          <p>Future plans involve expanding the expressway network and upgrading existing highways to improve traffic flow and safety.</p>
        </section>

        {/* Last Updated */}
        <footer className="mt-10 text-sm text-gray-500">
          Last Updated on: January 09, 2025
        </footer>

        {/* Related Links */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Related Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {sidebarItems.map((item, idx) => (
              <p key={idx} className="hover:text-blue-600 cursor-pointer transition duration-150">
                • {item.name}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndiaRoadNetworkMap;
