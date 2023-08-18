import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Route, Routes, useLocation } from "react-router-dom";
import LaunchPads from "./pages/LaunchPads/LaunchPads";
import Footer from "./components/Footer/Footer";
import Presale from "./pages/Presale/Presale";
import Staking from "./pages/Staking/Staking";

function App() {
  const location = useLocation();

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LaunchPads />} />
        <Route path="/presale" element={<Presale />} />
        <Route path="/staking" element={<Staking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
