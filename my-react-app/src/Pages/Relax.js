import React from "react";
import { Link } from "react-router-dom";

function Relax() {
  return (
    <div className="App">
      <Link to="/break">
        <button className="button-outline">start</button>
      </Link>
      <p> I'm relax </p>
    </div>
  );
}
export default Relax;
