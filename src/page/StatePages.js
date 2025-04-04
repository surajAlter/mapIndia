import React from "react";
import { motion } from "framer-motion";
import IndiaMap from "../assets/India.jpg";
import Sidebar from "../components/Sidebar";

const statesData = [
    { name: "Andhra Pradesh", description: "Known for Tirupati Temple and Telugu culture." },
    { name: "Arunachal Pradesh", description: "Land of dawn-lit mountains." },
    { name: "Assam", description: "Famous for tea and Kaziranga National Park." },
    { name: "Bihar", description: "Birthplace of Buddhism." },
    { name: "Chhattisgarh", description: "Rich in forests and waterfalls." },
    { name: "Goa", description: "Popular for beaches and nightlife." },
    { name: "Gujarat", description: "Home of Gir lions and Garba dance." },
    { name: "Haryana", description: "Land of Mahabharata’s Kurukshetra." },
    { name: "Himachal Pradesh", description: "Famous for hill stations like Shimla." },
    { name: "Jharkhand", description: "Rich in minerals and forests." },
    { name: "Karnataka", description: "Bengaluru, India's IT hub, is here." },
    { name: "Kerala", description: "God’s Own Country, famous for backwaters." },
    { name: "Madhya Pradesh", description: "Heart of India with Khajuraho temples." },
    { name: "Maharashtra", description: "Home to Mumbai and Bollywood." },
    { name: "Manipur", description: "Known for classical dance and Loktak Lake." },
    { name: "Meghalaya", description: "Abode of clouds and living root bridges." },
    { name: "Mizoram", description: "Land of rolling hills and bamboo forests." },
    { name: "Nagaland", description: "Famous for Hornbill Festival and Naga tribes." },
    { name: "Odisha", description: "Home of Jagannath Puri temple." },
    { name: "Punjab", description: "Land of five rivers and Golden Temple." },
    { name: "Rajasthan", description: "Known for deserts and palaces." },
    { name: "Sikkim", description: "Scenic state with Kanchenjunga peak." },
    { name: "Tamil Nadu", description: "Rich in temples and Dravidian culture." },
    { name: "Telangana", description: "Hyderabad, city of pearls, is here." },
    { name: "Tripura", description: "Home to Neermahal and bamboo forests." },
    { name: "Uttar Pradesh", description: "Taj Mahal is in Agra." },
    { name: "Uttarakhand", description: "Land of Yoga and Char Dham." },
    { name: "West Bengal", description: "Famous for Durga Puja and Sweets." },
    { name: "Andaman & Nicobar", description: "Beautiful islands with clear waters." },
    { name: "Chandigarh", description: "India’s best-planned city." },
    { name: "Dadra & Nagar Haveli", description: "Tribal culture and forests." },
    { name: "Daman & Diu", description: "Small yet rich in Portuguese heritage." },
    { name: "Lakshadweep", description: "Beautiful coral islands." },
    { name: "Delhi", description: "Capital of India with historic monuments." },
    { name: "Puducherry", description: "French-inspired coastal town." },
];

const StatesPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
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

                    <motion.img
                        src={IndiaMap}
                        alt="India Map"
                        className="w-full rounded-lg shadow-md mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />

                    <motion.div
                        className="text-gray-700 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <p>
                            India, as the democratic nation we know it today, came into being on 15th August, 1947, upon gaining independence. It is a Republic, meaning that the supreme power resides in the hands of the countrymen. All the decisions are made by the representatives elected by the public under and within a set of fundamental, written rules called the "Constitution". The Constitution is the supreme law of the land. It was adopted by the Constituent Assembly on 26 November 1949 and came into force on 26 January 1950. The preamble of the Indian Constitution promises it to be a Sovereign, Socialist,
                            Secular and Democratic Republic with a parliamentary system of government. Presently, India comprises 28 states and 8 Union Territories.                        </p>
                        <p className="mt-4">
                            The States Reorganization Act, formulated in 1956 was a primary force in reorganising the boundaries of Indian states along linguistic lines.
                            Later, as per an amendment in the Indian Constitution, three types of states, known as Part A states, Part B states, and Part C states, were amended to form a single type of state. Part A states refer to former governors' provinces of British India. Part B states refer to former princely states and Part C states included both the former chief commissioners' provinces and some princely states. Though additional changes have been introduced in the state boundaries since 1947, the Act is still considered an undisputed player in providing the present shape and contours to the Indian states. In November 2000, India gained three new states - Chattisgarh carved out of Madhya Pradesh, Uttaranchal from Uttar Pradesh, and Jharkhand from Bihar. In June 2014,
                            Telangana was carved out of Andhra Pradesh, and granted individual state status.
                            The States Reorganization Act, formulated in 1956 was a primary force in reorganising the boundaries of Indian states along linguistic lines.
                            Later, as per an amendment in the Indian Constitution, three types of states, known as Part A states, Part B states, and Part C states, were amended to form a single type of state. Part A states refer to former governors' provinces of British India. Part B states refer to former princely states and Part C states included both the former chief commissioners' provinces and some princely states. Though additional changes have been introduced in the state boundaries since 1947, the Act is still considered an undisputed player in providing the present shape and contours to the Indian states. In November 2000, India gained three new states - Chattisgarh carved out of Madhya Pradesh, Uttaranchal from Uttar Pradesh, and Jharkhand from Bihar. In June 2014,
                            Telangana was carved out of Andhra Pradesh, and granted individual state status.
                        </p>
                        <p className="mt-4">
                            The Jammu and Kashmir Reorganisation Act, 2019 is an act of the Parliament of India. It contains provisions to bifurcate the state of Jammu and Kashmir into two union territories, one will be called Jammu and Kashmir, and the other Ladakh. The act will come into effect on October 31, 2019.

                        </p>
                        <p className="mt-4">
                            The Constitution distributes legislative powers between the Centre and the State. The Parliament is bicameral - the lower house is known as the Lok Sabha (House of the People) and the upper house is known as the Rajya Sabha (Council of States). At state level, some legislatures are bicameral and are run along the lines of the two houses of the national Parliament.

                        </p>
                    </motion.div>

                    <motion.p
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        How many states and UTs are in India?<br />
                        Presently, India comprises{" "}
                        <span className="font-semibold text-blue-600">28 states and 8 Union Territories</span>.
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
                            >
                                <h2 className="text-lg font-semibold text-blue-700">{state.name}</h2>
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
