import React from "react";
import funBreakImg from "../Illustrations/funBreak.png";

function FunBreak() {
  return (
    <div className="App">
      <p className="funTitle">
        Almost everything will work again
        <br />
        if you unplug it for a few minutes.
        <br />
        Including
        <span className="fontColor"> you</span>.
      </p>
      {/* <img className="funBreakImg" src={funBreakImg} /> */}
      <div className="funContainer">
        <div>Joke</div>
        <div>Quote</div>
        <div>Fact</div>
        <div>Joke</div>
        <div>Quote</div>
        <div>Cat</div>
        <div>Dog</div>
        <div>Cat</div>
        <div>Dog</div>
        <div>Cat</div>
      </div>

      <button className="funRandom">SHOW RANDOM</button>
    </div>
  );
}
export default FunBreak;
