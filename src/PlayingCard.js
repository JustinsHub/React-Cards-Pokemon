import React from "react";
import backOfCard from "./back.png";
import useToggle from './hooks/useFlip'
import "./PlayingCard.css"

/* Renders a single playing card. */
const PlayingCard = ({ front, back = backOfCard }) => {
  const [isFacingUp, setIsFacingUp] = useToggle()

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={setIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
