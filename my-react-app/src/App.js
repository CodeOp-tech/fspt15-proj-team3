import React, { useState } from "react";
import DashBoard from "./Pages/DashBoard";
import BreakPage from "./Pages/BreakPage";
import Home from "./Pages/Home"
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import Services from "./services";
import FunBreak from "./Pages/FunBreak";
import RelaxBreak from "./Pages/RelaxBreak";
import MoveBreak from "./Pages/MoveBreak";
import BreakEnd from "./Components/BreakEnd";
import Login from "./Components/Login";
import logo from "./Illustrations/logoBreaktime.png";
import CountdownTimer from "./Components/CountdownTimer";
import { TimerContext } from "./Hooks/TimerContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Hooks/UserContext";

function App(props) {
  const services = new Services();
  const [isShown, setIsShown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 
  let [token, setToken] = useState(null);
  const [userId, setUserId] = useState(0)

  //Functions & var related to timer, passed via UseContext/TimerContext
  //toggleStart passed to FunBreak, RelaxBreak, MoveBreak to use StartButton comp
  //TargetMin & start passed to CountdownTimer comp
  const [targetMin, setTargetMin] = useState(0.17)
  const [start, setStart] = useState(false)
  const toggleStart = () => {
    setStart(!start)
    console.log(start)
    console.log("toggle clicked")
}
 //calc targetMin to milliseconds
 const countDownTime = targetMin * 60 * 1000
  console.log(countDownTime)

 //timer stateVar 
 const [timer, setTimer] = useState(countDownTime);
  console.log(timer)


function logOut(){
  localStorage.removeItem("token");
  setToken(null);
  stopReminders()
  console.log("logged out")
  navigate("/");
}

 let timerObj = {targetMin, setTargetMin, start, setStart, toggleStart, timer, setTimer, countDownTime };
 let userObj = {userId, setUserId};

 const startReminders = async () => {
  try {
    let id = userId
    let options = {
      method: "POST",
      headers: {
      "Content-Type": "application/json"},
    }
    let results = await fetch(`/reminders-start/${id}`, options)
    let notification = await results.json();
    console.log(notification)
    }
    catch (error) {
    console.log(error)
  } 
};

const stopReminders = async () => {
  try {
    let id = userId
    let options = {
      method: "POST",
      headers: {
      "Content-Type": "application/json"},
    }
    let results = await fetch(`/reminders-stop//${id}`, options)
    let notification = await results.json();
    console.log(notification)
    }
    catch (error) {
    console.log(error)
  } 
};

	//Added useEffect to test API calls on page load, this can be removed when we have components that can call it instead!

	// useEffect(() => {
	//   services.getFacts();
	// }, []);

  {
    return (
      <div>{location.pathname != "/" ?
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo-img" src={logo} />
            </a>
            <button
              className="navbar-toggler"
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
                  <Link to="/relax">
                    <a className="nav-link active">Relax</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/fun">
                    <a className="nav-link active">Fun</a>
                  </Link>
                </li>
                <li class="nav-item"> 
                  <a  onClick={()=> logOut()} class="bi bi-box-arrow-right">Log Out</a>
                </li>
              </ul>
            </div>
          </div>
          <button onClick={startReminders}> Start </button>
          <button onClick={stopReminders}> Stop </button>

        </nav> :null}

        <div className="App">
    
        <TimerContext.Provider value={timerObj}>
        <UserContext.Provider value={userObj}>
           <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/test" element={<Home/>} />
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
          </UserContext.Provider>
					</TimerContext.Provider>
				</div>
			</div>
		);
	}
}
export default App;
