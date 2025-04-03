import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar";
import  MoreInfoPage from "./components/MoreInfoPage"; // Import the MoreInfoPage component

function App() {
  return (
    <Router>
      <Navbar /> {/* Moved outside <Routes> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map-of-india" element={<HomePage />} />
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
        <Route path="/maps-of-india" element={<HomePage />} />
        <Route path="/india-maps-and-views" element={<HomePage />} />
        <Route path="/transport-network" element={<HomePage />} />
        <Route path="/india-travel" element={<HomePage />} />
        <Route path="/moreinfopage" element={<MoreInfoPage title="Maps of India - More Information" />} />

      </Routes>
    </Router>
  );
}

export default App;
