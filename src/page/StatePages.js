import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IndiaMap } from "../assets/Indian.svg";
import Sidebar from "../components/Sidebar";

const idToSlugMap = {
  "IN-AN": "andaman-nicobar",
  "IN-AP": "andhra-pradesh",
  "IN-AR": "arunachal-pradesh",
  "IN-AS": "assam",
  "IN-BR": "bihar",
  "IN-CH": "chandigarh",
  "IN-CT": "chhattisgarh",
  "IN-DN": "dadra-nagar-haveli",
  "IN-DD": "daman-diu",
  "IN-DL": "delhi",
  "IN-GA": "goa",
  "IN-GJ": "gujarat",
  "IN-HR": "haryana",
  "IN-HP": "himachal-pradesh",
  "IN-JH": "jharkhand",
  "IN-KA": "karnataka",
  "IN-KL": "kerala",
  "IN-LD": "lakshadweep",
  "IN-MP": "madhya-pradesh",
  "IN-MH": "maharashtra",
  "IN-MN": "manipur",
  "IN-ML": "meghalaya",
  "IN-MZ": "mizoram",
  "IN-NL": "nagaland",
  "IN-OD": "odisha",
  "IN-PB": "punjab",
  "IN-PY": "puducherry",
  "IN-RJ": "rajasthan",
  "IN-SK": "sikkim",
  "IN-TN": "tamil-nadu",
  "IN-TG": "telangana",
  "IN-TR": "tripura",
  "IN-UP": "uttar-pradesh",
  "IN-UT": "uttarakhand",
  "IN-WB": "west-bengal",
  "IN-LA": "ladakh",
  "IN-JK": "jammu-kashmir"
};

const statesData = [
  { text: "Andhra Pradesh", description: "Known for Tirupati Temple and Telugu culture.", path: "/states/andhra-pradesh" },
  { text: "Arunachal Pradesh", description: "Land of dawn-lit mountains.", path: "/states/arunachal-pradesh" },
  { text: "Assam", description: "Famous for tea and Kaziranga National Park.", path: "/states/assam" },
  { text: "Bihar", description: "Birthplace of Buddhism.", path: "/states/bihar" },
  { text: "Chhattisgarh", description: "Rich in forests and waterfalls.", path: "/states/chhattisgarh" },
  { text: "Goa", description: "Popular for beaches and nightlife.", path: "/states/goa" },
  { text: "Gujarat", description: "Home of Gir lions and Garba dance.", path: "/states/gujarat" },
  { text: "Haryana", description: "Land of Mahabharata’s Kurukshetra.", path: "/states/haryana" },
  { text: "Himachal Pradesh", description: "Famous for hill stations like Shimla.", path: "/states/himachal-pradesh" },
  { text: "Jharkhand", description: "Rich in minerals and forests.", path: "/states/jharkhand" },
  { text: "Karnataka", description: "Bengaluru, India's IT hub, is here.", path: "/states/karnataka" },
  { text: "Kerala", description: "God’s Own Country, famous for backwaters.", path: "/states/kerala" },
  { text: "Madhya Pradesh", description: "Heart of India with Khajuraho temples.", path: "/states/madhya-pradesh" },
  { text: "Maharashtra", description: "Home to Mumbai and Bollywood.", path: "/states/maharashtra" },
  { text: "Manipur", description: "Known for classical dance and Loktak Lake.", path: "/states/manipur" },
  { text: "Meghalaya", description: "Abode of clouds and living root bridges.", path: "/states/meghalaya" },
  { text: "Mizoram", description: "Land of rolling hills and bamboo forests.", path: "/states/mizoram" },
  { text: "Nagaland", description: "Famous for Hornbill Festival and Naga tribes.", path: "/states/nagaland" },
  { text: "Odisha", description: "Home of Jagannath Puri temple.", path: "/states/odisha" },
  { text: "Punjab", description: "Land of five rivers and Golden Temple.", path: "/states/punjab" },
  { text: "Rajasthan", description: "Known for deserts and palaces.", path: "/states/rajasthan" },
  { text: "Sikkim", description: "Scenic state with Kanchenjunga peak.", path: "/states/sikkim" },
  { text: "Tamil Nadu", description: "Rich in temples and Dravidian culture.", path: "/states/tamil-nadu" },
  { text: "Telangana", description: "Hyderabad, city of pearls, is here.", path: "/states/telangana" },
  { text: "Tripura", description: "Home to Neermahal and bamboo forests.", path: "/states/tripura" },
  { text: "Uttar Pradesh", description: "Taj Mahal is in Agra.", path: "/states/uttar-pradesh" },
  { text: "Uttarakhand", description: "Land of Yoga and Char Dham.", path: "/states/uttarakhand" },
  { text: "West Bengal", description: "Famous for Durga Puja and Sweets.", path: "/states/west-bengal" },
  { text: "Andaman & Nicobar", description: "Beautiful islands with clear waters.", path: "/states/andaman-nicobar" },
  { text: "Chandigarh", description: "India’s best-planned city.", path: "/states/chandigarh" },
  { text: "Dadra & Nagar Haveli", description: "Tribal culture and forests.", path: "/states/dadra-nagar-haveli" },
  { text: "Daman & Diu", description: "Small yet rich in Portuguese heritage.", path: "/states/daman-diu" },
  { text: "Lakshadweep", description: "Beautiful coral islands.", path: "/states/lakshadweep" },
  { text: "Delhi", description: "Capital of India with historic monuments.", path: "/states/delhi" },
  { text: "Puducherry", description: "French-inspired coastal town.", path: "/states/puducherry" },
  { text: "Ladakh", description: "Mountain desert with Buddhist monasteries.", path: "/states/ladakh" }
];

const StatesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const svg = document.getElementById("india-svg");
    if (!svg) return;
    const paths = svg.querySelectorAll("path");

    paths.forEach((path) => {
      const stateId = path.id;
      const slug = idToSlugMap[stateId];
      if (slug) {
        path.style.cursor = "pointer";
        path.addEventListener("mouseenter", () => {
          path.style.opacity = 0.7;
        });
        path.addEventListener("mouseleave", () => {
          path.style.opacity = 1;
        });
        path.addEventListener("click", () => {
          navigate(`/states/${slug}`);
        });
      }
    });

    return () => {
      paths.forEach((path) => {
        const stateId = path.id;
        const slug = idToSlugMap[stateId];
        if (slug) {
          path.removeEventListener("mouseenter", () => {});
          path.removeEventListener("mouseleave", () => {});
          path.removeEventListener("click", () => {});
        }
      });
    };
  }, [navigate]);

	return (
		<div className="flex min-h-screen bg-gray-100">
			<Sidebar />
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <motion.div
          className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl font-bold text-center text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Indian States & Union Territories
          </motion.h1>

          <motion.div
            className="w-full rounded-lg shadow-md mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <IndiaMap id="india-svg" />
          </motion.div>

          <motion.div
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p>India, as the democratic nation ...</p>
          </motion.div>

          <motion.p
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            How many states and UTs are in India?<br />
            Presently, India comprises{" "}
            <span className="font-semibold text-blue-600">
              28 states and 8 Union Territories
            </span>.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {statesData.map((state, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                }}
                onClick={() => navigate(state.path)}
              >
                <h2 className="text-lg font-semibold text-blue-700">{state.text}</h2>
                <p className="text-gray-700">{state.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatesPage;
