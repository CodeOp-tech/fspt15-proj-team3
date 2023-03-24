import React from "react"
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import List from "./Pages/List";
import BreakPage from "./Pages/BreakPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
  
        <p>
          Hello ! Here are the Routes. 
        </p>

        <BrowserRouter>

        <Routes>
        
        <Route path="/"element={<Home/>} />
        <Route path="/dashboard"element={<DashBoard/>} />
        <Route path="/list"element={<List/>} />
        <Route path="/break"element={<BreakPage/>} />
        </Routes>

        </BrowserRouter>

    </div>
  );
}
export default App;
