import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar"; 
import MoreInfoPage from "./components/MoreInfoMapPage"; 
import StatesPage from "./page/StatePages"; 
import MapofIndiaPage from "./components/MapofIndiaPage"; // Correct import
import Utility from "./page/UtilityMorePage"; // Correct import
import AndhraPradesh from "./components/States/AndhraPradesh";
import ArunachalPradesh from "./components/States/ArunachalPradesh"; //   Correct import
import  AndamanAndNicobar from "./components/States/AndamanAndNicobar";
import Assam from "./components/States/Assam";
import Bihar from "./components/States/Bihar";
import Chhattisgarh from "./components/States/Chattisgarh";
import ChandigarhComponent from "./components/States/Chandigarh";
import Dadranagarhaveli from "./components/States/DadraNagarHaveli";
import DamanDiuComponent from "./components/States/DamanDiu";
import DelhiComponent from "./components/States/Delhi";
import GoaComponent from "./components/States/Goa";
import GujaratComponent from "./components/States/Gujarat";
import Haryana from './components/States/Haryana';
import HimachalPradesh from "./components/States/HimachalPradesh";
import Jharkhand from "./components/States/Jharkhand";
import Karnataka from "./components/States/Karanatak"; // Correct import
import Kerala from "./components/States/kerala" // Correct import
import  Lakshadweep  from "./components/States/Lakshdweep"; // Correct import
import MadhyaPradesh from "./components/States/MadhyaPradesh";
import Maharashtra from "./components/States/Maharashtra"; // Correct import
import Manipur from "./components/States/Manipur"; // Correct import
import Meghalaya from "./components/States/Meghalaya"; // Correct import
import Mizoram from "./components/States/Mizoram"; // Correct import
import Nagaland from "./components/States/Nagaland"; // Correct import
import Odisha from "./components/States/Odisha"; // Correct import
import PuducherryPage from "./components/States/Puducherry";


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
        <Route path="/states/andhra-pradesh" element={<AndhraPradesh />} />
        <Route path="/states/arunachal-pradesh" element={<ArunachalPradesh />} />
        <Route path="/states/andaman-nicobar" element={<AndamanAndNicobar />} />
        <Route path="/states/assam" element={<Assam />} />
        <Route path="/states/bihar" element={<Bihar />} />
        <Route path="/states/chhattisgarh" element={<Chhattisgarh />} />
        <Route path="/states/chandigarh" element={<ChandigarhComponent />} />
        <Route path="/states/dadra-nagar-haveli" element={<Dadranagarhaveli/>} />
        <Route path="/states/daman-diu" element={<DamanDiuComponent />} />
        <Route path="/states/delhi" element={<DelhiComponent />} />
        <Route path="/states/goa" element={<GoaComponent />} />
        <Route path="/states/gujarat" element={<GujaratComponent />} />
        <Route path="/states/haryana" element={<Haryana />} />
        <Route path="/states/himachal-pradesh" element={<HimachalPradesh />} />
        <Route path="/states/jharkhand" element={<Jharkhand />} />
        <Route path="/states/karnataka" element={<Karnataka />} />
        <Route path="/states/kerala" element={<Kerala />} />
        <Route path="/states/lakshadweep" element={<Lakshadweep />} />
        <Route path="/states/madhya-pradesh" element={<MadhyaPradesh />} />
        <Route path="/states/maharashtra" element={<Maharashtra />} />
        <Route path="/states/manipur" element={<Manipur />} />
        <Route path="/states/meghalaya" element={<Meghalaya />} />
        <Route path="/states/mizoram" element={<Mizoram />} />
        <Route path="/states/nagaland" element={<Nagaland />} />
        <Route path="/states/odisha" element={<Odisha />} />
        <Route path="/states/puducherry" element={<PuducherryPage />} />

        {/* Add other state routes here */}





        
      </Routes>
    </Router>
  );
}

export default App;
