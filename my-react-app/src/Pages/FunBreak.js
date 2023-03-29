import React from "react";
import funBreakImg from "../Illustrations/funBreak.png";
import FunDisplayBox from "./FunDisplayBox";

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
      <img className="funBreakImg" src={funBreakImg} />
      <div className="funContainer">
        <FunDisplayBox input="I will put a random joke here from jokesapi" />
        <FunDisplayBox input="Quote" />
        <FunDisplayBox input="Fact" />
        <FunDisplayBox input="Joke" />
        <FunDisplayBox input="Quote" />
        <FunDisplayBox input="A cute cat photo will be here" />
        <FunDisplayBox input="Dog" />
        <FunDisplayBox input="Cat" />
        <FunDisplayBox input="Dog" />
        <FunDisplayBox input="Cat" />
      </div>

      <button className="funRandom">SHOW RANDOM</button>
    </div>
  );
}
export default FunBreak;
