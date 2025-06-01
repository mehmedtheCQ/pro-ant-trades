import React from "react";

function UniqueFeatures(props) {
  const fontSize = {
    fontSize: "50px",
  };
  return (
    <div className="propscards">
      <div className="propcardsimage">
        <i style={fontSize} class={props.icon}></i>
      </div>
      <div className="propcardstitle">{props.title}</div>
      <div className="propcardsdesc">{props.description}</div>
    </div>
  );
}

export default UniqueFeatures;
