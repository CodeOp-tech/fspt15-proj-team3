import React, { useEffect , useState } from "react";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import List from "./Pages/List";
import BreakPage from "./Pages/BreakPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Services from "./services";
import FunBreak from "./Pages/FunBreak";
import RelaxBreak from "./Pages/RelaxBreak";
import MoveBreak from "./Pages/MoveBreak";
import logo from "./Illustrations/logoBreaktime.png";

function App() {
  const services = new Services();
  const [isShown, setIsShown] = useState(false);

  //Added useEffect to test API calls on page load, this can be removed when we have components that can call it instead!

  // useEffect(() => {
  //   services.getFacts();
  // }, []);

  {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
          <div className="container-fluid">
            <a class="navbar-brand" href="#">
            <img className="logo-img" src={logo} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/dashboard">
                <a className="nav-link active">Home</a>
              </Link>
              </li>
              <li class="nav-item">
              <Link to="/move">
                <a className="nav-link active">Move</a>
              </Link>
              </li>
              <li class="nav-item">
              <Link to="/relax" >
                <a className="nav-link active">Relax</a>
              </Link>
              </li>
              <li class="nav-item">
              <Link to="/fun">
                <a className="nav-link active">Fun</a>
              </Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="App">
          <Routes>
      
            <Route path="/" element={<DashBoard />} />
            <Route path="/list" element={<List />} />
            <Route path="/break" element={<BreakPage />} />
            <Route path="/fun" element={<FunBreak />} />
            <Route path="/relax" element={<RelaxBreak />} /> 
            <Route path="/move" element={<MoveBreak />} />

          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
