import React, { useEffect, useState } from "react";
import FunContainer from "../Components/FunContainer";
import funBreakImg from "../Illustrations/funBreak.png";
import Services from "../services";
import CountdownTimer from "../Components/CountdownTimer";
import { useContext } from 'react'; 
import { TimerContext } from "../Hooks/TimerContext";
import StartButton from "../Components/StartButton";
import "./FunBreak.css";
import { Link } from "react-router-dom";

function FunBreak() {
  const [jokes, setJokes] = useState(null);
  const [quotes, setQuotes] = useState(null);
  const [facts, setFacts] = useState(null);
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);

  const services = new Services();

  //Added useEffect to test API calls on page load, this can be removed when we have components that can call it instead!
  const getData = async () => {
    const jokesArray = await services.getJoke(2);
    setJokes(jokesArray);

    const quotesArray = await services.getQuote(1);
    setQuotes(quotesArray);

    const factsArray = await services.getFacts(2);
    setFacts(factsArray);

    const catsArray = await services.getCats(3);
    setCats(catsArray);

    const dogsArray = await services.getDogs(2);
    setDogs(dogsArray);
  };

  useEffect(() => {
    getData();
  }, []);


//To use CountDownTimer start/pause button in StartButton comp
//Passed from App.js as via useContext
let {toggleStart} = useContext(TimerContext);

  return (
    <div className="App">

      <CountdownTimer/>
      <StartButton
				toggleStart={toggleStart}/>

      <p className="funTitle">
        Almost everything will work again
        <br />
        if you unplug it for a few minutes.
        <br />
        <div className="funTitle2">
          Including
          <span className="fontColor"> you</span>.
        </div>
      </p>
      <img className="funBreakImg" src={funBreakImg} />
      <FunContainer
        jokes={jokes}
        quotes={quotes}
        facts={facts}
        cats={cats}
        dogs={dogs}
      />

      <button className="funRandom" onClick={() => getData()}>
        SHOW RANDOM
      </button>
    </div>
  );
}
export default FunBreak;
