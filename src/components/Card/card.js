//sets up the reusable Card component
import React from "react";
import "./card.css";

const Card = props => (
  <div className="cards" onClick={props.imageClick}>
    <div className="img-container">
      <img className ="image" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Card;