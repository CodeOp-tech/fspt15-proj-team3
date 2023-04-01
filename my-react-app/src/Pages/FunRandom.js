import React from "react";
import Services from "../services";
import "./FunRandom.css";
import funRandomImg from "../Illustrations/loving.png";

export default function FunRandom() {
  return (
    <div className="App">
      <p className="randomTitle">
        Show your
        <span className="randomColor"> soul </span> some love!
      </p>
      <img src={funRandomImg} className="funRandomImg" />

      <container>
        <div className="randomContainer">Hello</div>
      </container>

      <button className="moreRandom">SHOW MORE</button>
    </div>
  );
}
