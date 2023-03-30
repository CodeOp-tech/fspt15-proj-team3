import React from "react";
import FunDisplayBox from "./FunDisplayBox";

export default function FunContainer(props) {
  if (props.jokes && props.quotes && props.facts && props.cats && props.dogs) {
    console.log(props);
    return (
      <div className="funContainer">
        <FunDisplayBox text={props.jokes[0]} />
        <FunDisplayBox text={props.quotes[0]} />
        <FunDisplayBox text={props.facts[0]} />
        <FunDisplayBox text={props.jokes[1]} />
        <FunDisplayBox text={props.quotes[1]} />
        <FunDisplayBox image={props.cats[0]} />
        <FunDisplayBox image={props.dogs[0]} />
        <FunDisplayBox image={props.cats[1]} />
        <FunDisplayBox image={props.dogs[1]} />
        <FunDisplayBox image={props.cats[2]} />
      </div>
    );
  }
}
