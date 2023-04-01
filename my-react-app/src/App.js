import React, { useEffect , useState } from "react";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import BreakPage from "./Pages/BreakPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Services from "./services";
import FunBreak from "./Pages/FunBreak";
import RelaxBreak from "./Pages/RelaxBreak";
import MoveBreak from "./Pages/MoveBreak";
import BreakEnd from "./Components/BreakEnd";
import logo from "./Illustrations/logoBreaktime.png";
import CountdownTimer from "./Components/CountdownTimer";
import { TimerContext } from "./Hooks/TimerContext"

function App() {
  const services = new Services();
  const [isShown, setIsShown] = useState(false);

  //Related to timer. Default min, start/pause variables and toggle function
  //Passed on to FunBreak, RelaxBreak, MoveBreak and CountdownTimer Components
  const [targetMin, setTargetMin] = useState(0.1)
  const [start, setStart] = useState(false)
  const toggleStart = () => {
    setStart(!start)
    console.log(start)
    console.log("toggle clicked")
}

  let timerObj = {targetMin, setTargetMin, start, setStart, toggleStart};

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
    
        <TimerContext.Provider value={timerObj}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />

            <Route path="/timer" element={<CountdownTimer />} />
            <Route path="/welldone" element={<BreakEnd />} />

            <Route path="/fun" element={<FunBreak />} />
            <Route path="/fun/welldone" element={<BreakEnd />} />

            <Route path="/relax" element={<RelaxBreak />} />
            <Route path="/relax/welldone" element={<BreakEnd />} />

            <Route path="/move" element={<MoveBreak />} />
            <Route path="/move/welldone" element={<BreakEnd />} />

          </Routes>
         </TimerContext.Provider>
    
        </div>
      </div>
    );
  }
}
export default App;
