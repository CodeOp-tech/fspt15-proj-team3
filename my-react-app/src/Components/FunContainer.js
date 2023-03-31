import React from "react";
import FunDisplayBox from "./FunDisplayBox";

export default function FunContainer(props) {
  if (props.jokes && props.quotes && props.facts && props.cats && props.dogs) {
    console.log(props);
    return (
      <div className="funContainer">
        <FunDisplayBox text={props.facts[0]} className="fact" />
        <FunDisplayBox text={props.jokes[0]} className="joke" />
        <FunDisplayBox text={props.quotes[0]} className="quote" />
        <FunDisplayBox text={props.jokes[1]} className="joke" />
        <FunDisplayBox text={props.facts[1]} className="fact" />
        <FunDisplayBox image={props.cats[0]} className="cat" />
        <FunDisplayBox image={props.dogs[0]} className="dog" />
        <FunDisplayBox image={props.cats[1]} className="cat" />
        <FunDisplayBox image={props.dogs[1]} className="dog" />
        <FunDisplayBox image={props.cats[2]} className="cat" />
      </div>
    );
  }
}
