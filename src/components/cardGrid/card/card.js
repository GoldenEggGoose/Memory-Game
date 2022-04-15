import coverImage from "../../../assets/img/cover.png";
import "./card.css";
export const Card = (props) => {
  const {card, onClick} = props;
  const {isFlipped, src, id} = card
  const handleClick = () => {
    onClick(card)
  };
  return (
    <div key={id} className={`card ${isFlipped ? "flipped" : ""}`} >
      <img src={src} alt="cardFaceImage" className="front"/>
      <img
        src={coverImage}
        alt="cardCoverImage"
        className="back"
        onClick={handleClick}
      />
    </div>
  );
};
export default Card;