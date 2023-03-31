import React, { useEffect , useState } from "react";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import List from "./Pages/List";
import BreakPage from "./Pages/BreakPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Services from "./services";
import FunBreak from "./Pages/FunBreak";
import RelaxBreak from "./Pages/RelaxBreak";
import MoveBreak from "./Pages/MoveBreak";

function App() {
  const services = new Services();
  const [isShown, setIsShown] = useState(false);

  //Added useEffect to test API calls on page load, this can be removed when we have components that can call it instead!

  // useEffect(() => {
  //   services.getDogs();
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
            <Route path="/relaxbreak" element={<RelaxBreak />} /> 
            <Route path="/movebreak" element={<MoveBreak />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
