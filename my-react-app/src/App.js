import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
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
import { TimerContext } from "./Hooks&Context/TimerContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Hooks&Context/UserContext";

function App(props) {
  const services = new Services();
  const [isShown, setIsShown] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  let [token, setToken] = useState(null);

  //Used to fetch email of loggedIn user to start/stopReminder function
  const [userId, setUserId] = useState(0);

  //Functions & var related to timer, passed on to children via UseContext/TimerContext
  //toggleStart > FunBreak, RelaxBreak, MoveBreak to use StartButton comp
  //TargetMin, start, countDownTime, timer > CountdownTimer comp for useCountDown hook

  const [targetMin, setTargetMin] = useState(0.17);
  
  //calc targetMin to milliseconds
  const countDownTime = targetMin * 60 * 1000;

  //timer stateVar
  const [timer, setTimer] = useState(countDownTime);

  const [start, setStart] = useState(false);

  const toggleStart = () => {
    setStart(!start);
    console.log("toggle clicked", start);
  };

  let timerObj = {
    targetMin,
    setTargetMin,
    start,
    setStart,
    toggleStart,
    timer,
    setTimer,
    countDownTime,
  };
  let userObj = { userId, setUserId, logOut };

  //resets timer when user navs to different page (not for relaxbreak as timer is custom set to match video length)
  useEffect(() => {
    if (location.pathname == "/move" || location.pathname == "/fun") {
      setStart(false);
      setTargetMin(2);
      setTimer(targetMin * 60 * 1000);
      console.log("timer reset", countDownTime);
    }
  }, [location, targetMin]);

  console.log(location.pathname); 

  function logOut() {
    localStorage.removeItem("token");
    setToken(null);
    stopReminders();
    setUserId(0)
    console.log("logged out");
    navigate("/");
  }

  const startReminders = async () => {
    try {
      let id = userId;
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let results = await fetch(`/reminders-start/${id}`, options);
      let notification = await results.json();
      console.log(notification);
    } catch (error) {
      console.log(error);
    }
  };

  const stopReminders = async () => {
    try {
      let id = userId;
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let results = await fetch(`/reminders-stop//${id}`, options);
      let notification = await results.json();
      console.log(notification);
    } catch (error) {
      console.log(error);
    }
  };

  {
    return (

      <div>
        {location.pathname != "/" ? (
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
          <div className="container-fluid">
            <a className="navbar-brand" href="/dashboard">
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home">
                    <a className="nav-link active">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/move" >
                    <a className="nav-link active">Move</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/relax">
                    <a className="nav-link active">Relax</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/fun">
                    <a className="nav-link active">Fun</a>
                  </Link>
                </li>
               
                
                {userId !== 0 ? (
                <div>
                <li className="nav-item"> 
                  <a  onClick={()=> logOut()} class="bi bi-box-arrow-right logout-dash">Log Out</a>
                </li>

                <div className="reminders">
                  <p>REMINDERS:</p>

                 
                  <a className="nav-link active reminder" onClick={startReminders}> START </a> /
               
               
                 <a className="nav-link active reminder" onClick={stopReminders}>STOP </a> 
                </div></div>) : 
               <div>
                 <li className="nav-item"> 
                 <Link to="/">
                  <a  class="bi bi-box-arrow-right login-dash">Log In</a>
                </Link>
                </li>
               </div>}
      
              </ul>
              </div>
            </div> 
          </nav>
        ) : null}

        <div className="App">
          <TimerContext.Provider value={timerObj}>
            <UserContext.Provider value={userObj}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />

                <Route path="/timer" element={<CountdownTimer />} />
                <Route path="/welldone" element={<BreakEnd />} />
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />

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
