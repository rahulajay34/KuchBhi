import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./MainContent/Slider";
import { ChakraProvider } from "@chakra-ui/react";
import Images from "./MainContent/Images";
import CategoryReviewCurious from "./MainContent/CategoryReviewCurious";
import UserCards from "./MainContent/UserCards";
import Home from "./components/Home";
import OurTop10Finds from "./pages/OurTop10Finds";
import TeamFavourite from "./pages/TeamFavourite";
import Dropdown from "./components/Dropdown";
import Search from "./pages/Search.jsx";

function App() {
  return (
    <>
     
       <Routes>
        <Route path="/" element={<Home />}/>

            <Route path="/ourTop10Finds" element={<OurTop10Finds />}/>
            <Route path="/teamFavourites" element={<TeamFavourite />}/>

        </Routes>
       
      
    </>
  );
}

export default App;
