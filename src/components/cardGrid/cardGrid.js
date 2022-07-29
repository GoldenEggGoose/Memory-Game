import { useEffect, useState } from "react";
import Card from "./card/card";
import "./cardGrid.css";

const CardGrid = (props) => {
  const [cards, setCards] = useState();
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [disabled, setDisabled] = useState(false);
  const {incrementCount,setGameOver} = props;

  const resetChoice = () => {
    setCard1();
    setCard2();
    incrementCount();
  };
  useEffect(() => {}, [cards]);
  useEffect(() => {
    if (card2) {
      if (card1.src !== card2.src) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.id === card1.id || card.id === card2.id) {
                return { ...card, isFlipped: false };
              } else {
                return card;
              }
            })
          );
          setDisabled(false);
        }, 1000);
      } else {
        if (
          cards.every((card) => {
            if (card.isFlipped === true) {
              return true;
            } else {
              return false;
            }
          })
        ){
          setGameOver(true)
        }
          setDisabled(false);
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
      setDisabled(true);
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
  return (
    <div className="cardGrid">
      {cards?.map((card) => {
        return (
          <Card
            onClick={handleChoice}
            card={card}
            key={card.id}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};
export default CardGrid;
