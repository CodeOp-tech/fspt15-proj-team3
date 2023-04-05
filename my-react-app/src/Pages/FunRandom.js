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

      <container className="selectContainer">
        <div className="option">
          <a href="#" className="optionLink">
            Jokes
          </a>
        </div>
        <div className="option">
          <a href="#" className="optionLink">
            Facts
          </a>
        </div>
        <div className="option">
          <a href="#" className="optionLink">
            Quotes
          </a>
        </div>
        <div className="option">
          <a href="#" className="optionLink">
            Cats
          </a>
        </div>
        <div className="option">
          <a href="#" className="optionLink">
            Dogs
          </a>
        </div>
      </container>

      <container>
        <div className="randomContainer">Hello</div>
      </container>

      <button className="moreRandom">↻</button>
    </div>
  );
}
