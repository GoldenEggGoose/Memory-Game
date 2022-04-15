import { useEffect, useState } from "react";
import Card from "./card/card";
import "./cardGrid.css";

const CardGrid = (props) => {
  const [cards, setCards] = useState(
    props.cards.map((card) => {
      return { ...card, isFlipped: false };
    })
  );
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const resetChoice = () => {
    setCard1();
    setCard2();
  };
  const handleChoice = (card) => {
    if (card1) {
      setCard2(card);
    } else {
      setCard1(card);
    }
    setCards(
      cards.map((theCard) => {
        if (card.id === theCard.id) {
          return { ...theCard, isFlipped: true };
        } else {
          return theCard;
        }
      })
    );
  };
  useEffect(() => {
    if (card1 && card2) {
      if (card1.src === card2.src) {
        console.log("hi");
      }
    }
  }, [card1, card2]);
  return (
    <div className="cardGrid">
      {cards.map((card) => {
        return <Card onClick={handleChoice} card={card} key={card.id} />;
      })}
    </div>
  );
};
export default CardGrid;
