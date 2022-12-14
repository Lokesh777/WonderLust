import React from "react";
import './App.css';
import { LandingPage } from "./Component/landingPage/LandingPage";
import Navbar from './Component/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage />
    </div>
  );
}

export default App;
