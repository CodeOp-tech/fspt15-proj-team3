import React from "react";

function FunDisplayBox(props) {
  return (
    <div className="displayBox">
      {" "}
      {props.text ? <div className="displayText"> {props.text}</div> : null}
      {props.image ? (
        <img src={props.image} className="animalImage" />
      ) : null}{" "}
    </div>
  );
}

export default FunDisplayBox;
