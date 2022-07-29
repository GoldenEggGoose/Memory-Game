import coverImage from "../../../assets/img/cover.png";
import "./card.css";
export const Card = (props) => {
  const { card, onClick, disabled } = props;
  const { isFlipped, src, id } = card;

  const handleClick = () => {
    if (!disabled) {
      onClick(card);
    }
  };
  return (
    //isFlipped is true when  isMatched  or the id matches with card1 or card2
    <div key={id} className={`card ${isFlipped ? "flipped" : ""}`}>
      <img src={src} alt="cardFaceImage" className="front" draggable={false} />
      <img
        src={coverImage}
        alt="cardCoverImage"
        className="back"
        onClick={handleClick}
        draggable={false}
      />
    </div>
  );
};
export default Card;
