import React, { useEffect } from "react";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import List from "./Pages/List";
import BreakPage from "./Pages/BreakPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Services from "./services";
import FunBreak from "./Pages/FunBreak";

function App() {
  const services = new Services();

  //Added useEffect to test API calls on page load, this can be removed when we have components that can call it instead!

  // useEffect(() => {
  //   services.getFacts();
  // }, []);

  {
    return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/list" element={<List />} />
            <Route path="/break" element={<BreakPage />} />
            <Route path="/funbreak" element={<FunBreak />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
