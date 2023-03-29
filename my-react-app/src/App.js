import React, { useEffect } from "react";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import List from "./Pages/List";
import BreakPage from "./Pages/BreakPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Services from "./services";

function App() {
  const services = new Services();

  //Added useEffect to test API calls on page load, this can be removed when we have components that can call it instead!

  // useEffect(() => {
  //   services.getFacts();
  // }, []);

  {
    return (
      <div className="container">
       
       <nav>
            <Link to ="/dashboard"><button className="btn btn-primary">DashBoard</button></Link>
            <Link to ="/list"><button className="btn btn-primary">List</button></Link>
            <Link to ="/break"><button className="btn btn-primary">Break</button></Link>
        </nav>


        <div className="App">
         
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/list" element={<List />} />
              <Route path="/break" element={<BreakPage />} />
            </Routes>
        
        </div>
      </div>
    );
  }
}
export default App;
