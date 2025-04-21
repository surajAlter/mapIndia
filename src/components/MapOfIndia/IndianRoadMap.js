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
    { name: "Kundli Manesar Palwal (KMP) Expressway Map", link: "/kmp-expressway-map" },
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

        {/* Subtext */}
        <p className="text-lg font-medium text-blue-600 mb-3">
          Click on any Section of the Map to Explore Further
        </p>

        {/* Map Image */}
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

        {/* Content Sections */}
        <section className="space-y-10 text-base leading-relaxed bg-white p-6 rounded-xl shadow-sm">
          <p>
            India road maps make you familiar with the Indian road network. India has a total road network of 3,320,410 kilometres, which is the third largest in the world.
          </p>

          <p>
            For every square kilometre of land, there is 0.66 km of highways — higher than the USA (0.65) and much higher than Brazil (0.20) or China (0.16).
          </p>

          <p>
            As of 2002, 47.3% of India's roads were paved. By 2012, India had only 600 km of expressways compared to China's 74,000 km.
          </p>

          <p>
            Recent projects like the Yamuna Expressway, National Highways Development Project, and Mumbai-Pune Expressway reflect India's major investment in road infrastructure.
          </p>

          <p>
            According to Goldman Sachs, India will need US$1.7 trillion in the next decade to improve infrastructure, with a significant chunk for roadways.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Indian Road Network Overview</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>State Highways: 128,000 km</li>
              <li>Expressways/National Highways: 66,754 km</li>
              <li>Rural and Other Roads: 2,650,000 km</li>
              <li>Important District Roads: 470,000 km</li>
              <li>Total: Approx. 3,314,754 km</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Expressways in India</h3>
            <p>High-speed access-controlled roads, expanding fast with a target of over 18,000 km.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">National Highways</h3>
            <p>Connecting major cities, ports, industrial hubs — managed by NHAI.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">State Highways</h3>
            <p>Connecting National Highways and important district headquarters within states.</p>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="mt-10 text-sm text-gray-500">
          Last Updated on: January 09, 2025
        </footer>
      </main>
    </div>
  );
};

export default IndiaRoadNetworkMap;
