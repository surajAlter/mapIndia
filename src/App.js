import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar";
import MoreInfoPage from "./components/MoreInfoMapPage";
import StatesPage from "./page/StatePages";
import CitiesPage from "./page/CityPages";
import TravelPage from "./page/TravelPage";
import MapPage from "./page/MapPage";
import MapofIndiaPage from "./components/MapofIndiaPage"; // Correct import
import Utility from "./page/UtilityMorePage"; // Correct import
import PoliticalMapPage from "./page/map/PoliticalMapPage";
import PhysicalMapPage from "./page/map/PhysicalMapPage";
import OutlineMapPage from "./page/map/OutlineMapPage";
import RoadMapPage from "./page/map/RoadMapPage";
import RailwayMapPage from "./page/map/RailwayMapPage";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />

				{/* Fixing Map of India Route */}
				<Route path="/map-of-india" element={<MapofIndiaPage />} />
				<Route path="/maps/political" element={<PoliticalMapPage />} />
				<Route path="/maps/physical" element={<PhysicalMapPage />} />
				<Route path="/maps/outline" element={<OutlineMapPage />} />
				<Route path="/maps/railway" element={<RailwayMapPage />} />
				<Route path="/maps/road" element={<RoadMapPage />} />

				<Route path="/india-geography" element={<HomePage />} />
				<Route path="/history" element={<HomePage />} />
				<Route path="/census-maps" element={<HomePage />} />
				<Route path="/business-economy" element={<HomePage />} />
				<Route path="/india-culture" element={<HomePage />} />
				<Route path="/road-map" element={<HomePage />} />
				<Route path="/rail-network" element={<HomePage />} />
				<Route path="/air-network" element={<HomePage />} />
				<Route path="/ports-waterways" element={<HomePage />} />
				<Route path="/hotels" element={<HomePage />} />
				<Route path="/temples" element={<HomePage />} />
				<Route path="/hill-stations" element={<HomePage />} />

				{/* Fixing Maps of India Route */}
				<Route path="/maps-of-india" element={<MapofIndiaPage />} />

				<Route path="/india-maps-and-views" element={<HomePage />} />
				<Route path="/transport-network" element={<HomePage />} />
				<Route path="/india-travel" element={<HomePage />} />

				<Route
					path="/moreinfopage"
					element={
						<MoreInfoPage title="Maps of India - More Information" />
					}
				/>
				<Route path="/states" element={<StatesPage />} />
				<Route path="/cities" element={<CitiesPage />} />
				<Route path="/travel" element={<TravelPage />} />
				<Route path="/maps" element={<MapPage />} />
				<Route path="/utilities" element={<Utility />} />
			</Routes>
		</Router>
	);
}

export default App;
