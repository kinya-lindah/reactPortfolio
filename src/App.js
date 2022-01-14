import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import NavBar from "./PortfolioContainer/Home/NavBar/NavBar";
import SideBar from "./PortfolioContainer/Home/SideBar/SideBar";

import React, {useState} from "react";
import NotFoundPage from "./Pages/NotFoundPage";



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);};
  
    ;
  return (
    <Router>
      <NavBar toggle={toggle}  />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path="/reactPortfolio/" element={<HomePage/>}  />
        <Route exact path="/reactPortfolio/contact" element={<ContactPage/>}  />
        <Route path="/reactPortfolio/*"  element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
