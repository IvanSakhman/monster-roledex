import React from "react";
import Card from "../Card";

import "./cardList.css";

const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;
