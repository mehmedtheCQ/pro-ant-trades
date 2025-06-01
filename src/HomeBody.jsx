import React from "react";
import "./HomeBody.css";
import UniqueFeatures from "./components/UniqueFeatures";
import dataCards from "./components/dataCards";

export default function HomeBody() {
  const uniqueFeaturesText = "Our Unique & Core Features";
  const cardElements = dataCards.map((deets) => {
    return (
      <span>
        <UniqueFeatures
          title={deets.title}
          description={deets.description}
          icon={deets.icon}
        />
      </span>
    );
  });

  return (
    <div className="homebodycontainer">
      <h1 className="homeheadertext">{uniqueFeaturesText}</h1>
      <div className="propsparent">{cardElements}</div>
    </div>
  );
}
