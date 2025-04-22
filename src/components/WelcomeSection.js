import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IndiaMap } from "../assets/pol/India.svg"; // Updated import

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

const WelcomeSection = () => {
  const navigate = useNavigate();

  // Effect hook to handle SVG path click events
  useEffect(() => {
    const svg = document.getElementById("india-svg");
    if (!svg) return;
    const paths = svg.querySelectorAll("path");

    // Attach click event listeners to each state path
    paths.forEach((path) => {
      const slug = idToSlugMap[path.id];
      if (!slug) return; // Skip if there's no corresponding slug

      path.style.cursor = "pointer"; // Change cursor to pointer

      const onClick = () => navigate(`/states/${slug}`); // Navigate to respective state page
      path.addEventListener("click", onClick);

      // Cleanup function
      return () => path.removeEventListener("click", onClick);
    });
  }, [navigate]);

  return (
    <section className="flex flex-col items-center text-center px-4 py-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Discover the Maps of India
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Explore India's states and territories interactively — dive into the beauty of diversity with just a click.
      </p>

      {/* SVG map is now clickable */}
      <IndiaMap
        id="india-svg"
        className="w-full max-w-3xl rounded-lg shadow-md"
      />

      <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
        India is officially known as the Republic of India. It comprises a total of 28 states along with eight union territories. Broadly, India is divided into six major zones: East, West, North, South, Northeast, and Central India.
      </p>

      <button
        onClick={() => navigate("/maps/india")}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Explore All Maps
      </button>
    </section>
  );
};

export default WelcomeSection;
