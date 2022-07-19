import { useEffect, useState } from "react";
import Card from "./card/card";
import "./cardGrid.css";

const CardGrid = (props) => {
  const [cards, setCards] = useState();
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const incrementCount = props.incrementCount
  
  const resetChoice = () => {
    setCard1();
    setCard2();
    incrementCount()
  };
  useEffect(() => {
    if (card2) {
      if (card1.src !== card2.src) {
        setCards(
          cards.map((card) => {
            if (card.id === card1.id || card.id === card2.id) {
              return { ...card, isFlipped: false };
            } else {
              return card;
            }
          })
        );
      }
      resetChoice();
    }
  }, [card2]);
  useEffect(() => {
    setCards(
      props.cards.map((card) => {
        return { ...card, isFlipped: false };
      })
    );
  }, [props.cards]);
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
      {cards?.map((card) => {
        return <Card onClick={handleChoice} card={card} key={card.id} />;
      })}
    </div>
  );
};
export default CardGrid;
