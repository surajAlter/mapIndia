import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IndiaMap } from "../assets/Indian.svg"; // Adjust path as needed

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

  useEffect(() => {
    const svg = document.getElementById("india-svg");
    if (!svg) return;

    const paths = svg.querySelectorAll("path");

    const handleMouseEnter = (path) => {
      path.style.opacity = 0.8;
    };

    const handleMouseLeave = (path) => {
      path.style.opacity = 1;
    };

    const handleClick = (slug) => {
      navigate(`/states/${slug}`);
    };

    paths.forEach((path) => {
      const stateId = path.id;
      const slug = idToSlugMap[stateId];

      if (slug) {
        path.style.cursor = "pointer";
        path.style.transition = "opacity 0.3s ease";

        const onMouseEnter = () => handleMouseEnter(path);
        const onMouseLeave = () => handleMouseLeave(path);
        const onClick = () => handleClick(slug);

        path.addEventListener("mouseenter", onMouseEnter);
        path.addEventListener("mouseleave", onMouseLeave);
        path.addEventListener("click", onClick);
      }
    });

    return () => {
      paths.forEach((path) => {
        const stateId = path.id;
        const slug = idToSlugMap[stateId];

        if (slug && path.__onMouseEnter && path.__onMouseLeave && path.__onClick) {
          path.removeEventListener("mouseenter", path.__onMouseEnter);
          path.removeEventListener("mouseleave", path.__onMouseLeave);
          path.removeEventListener("click", path.__onClick);
        }
      });
    };
  }, [navigate]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-6 drop-shadow-md">
        Welcome to Xplorer
      </h2>
      <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed mb-10">
        Explore India's states and territories interactively — dive into the beauty of diversity with just a click.
      </p>

      {/* Properly Fitted Map Section */}
      <div className="flex justify-center items-center bg-white rounded-3xl shadow-2xl p-6 md:p-10 overflow-hidden">
        <div className="w-full max-w-7xl">
          <IndiaMap
            id="india-svg"
            className="w-full h-auto max-h-[700px] object-contain"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
