import React from "react";

function FunDisplayBox(props) {
  const classes = `displayBox ${props.className}`;
  return (
    <div className={classes}>
      {" "}
      {props.text ? <div className="displayText"> {props.text}</div> : null}
      {props.image ? (
        <img src={props.image} className="animalImage" />
      ) : null}{" "}
    </div>
  );
}

export default FunDisplayBox;
