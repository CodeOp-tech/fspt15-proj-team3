import React from "react";
import { Link } from "react-router-dom";

function Move() {
  return (
    <div className="App">
      <p> I'm move </p>
      <Link to="/break">
        <button className="button-outline">start</button>
      </Link>
    </div>
  );
}
export default Move;
