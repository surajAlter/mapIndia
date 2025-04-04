import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar"; 
import MoreInfoPage from "./components/MoreInfoMapPage"; 
import StatesPage from "./page/StatePages"; 
import MapofIndiaPage from "./components/MapofIndiaPage"; // Correct import
import Utility from "./page/UtilityMorePage"; // Correct import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Fixing Map of India Route */}
        <Route path="/map-of-india" element={<MapofIndiaPage />} />

        <Route path="/physical-map" element={<HomePage />} />
        <Route path="/outline-map" element={<HomePage />} />
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
        
        <Route path="/moreinfopage" element={<MoreInfoPage title="Maps of India - More Information" />} />
        <Route path="/states" element={<StatesPage />} />
        <Route path="/utilities" element={<Utility />} />

        
      </Routes>
    </Router>
  );
}

export default App;
