import React, { useEffect, useState } from "react";
import FunContainer from "../Components/FunContainer";
import funBreakImg from "../Illustrations/funBreak.png";
import Services from "../services";
import "./FunBreak.css";

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

    const quotesArray = await services.getQuote(2);
    setQuotes(quotesArray);

    const factsArray = await services.getFacts(1);
    setFacts(factsArray);

    const catsArray = await services.getCats(3);
    setCats(catsArray);

    const dogsArray = await services.getDogs(2);
    setDogs(dogsArray);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
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
      <button className="funRandom">SHOW RANDOM</button>
    </div>
  );
}
export default FunBreak;
