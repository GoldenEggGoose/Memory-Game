import { useState } from "react";
import "./App.css";
import helmet from "./assets/img/helmet-1.png";
import potion from "./assets/img/potion-1.png";
import ring from "./assets/img/ring-1.png";
import scroll from "./assets/img/scroll-1.png";
import shield from "./assets/img/shield-1.png";
import sword from "./assets/img/sword-1.png";
import CardGrid from "./components/cardGrid/cardGrid";

let imagePaths = [helmet, potion, ring, scroll, shield, sword];
const shuffle = (array) => {
  let shuffledCards = [...array, ...array]
    .sort((a, b) => {
      return 0.5 - Math.random();
    })
    .map((path) => {
      return { src: path, id: Math.random() };
    });
  return shuffledCards;
};

const App = () => {
  const [shuffledCards, setShuffledCards] = useState(shuffle(imagePaths));
  const doNewGame = () =>{setShuffledCards(shuffle(imagePaths))}
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button id="newGame" onClick={doNewGame}>New Game</button>
      <CardGrid cards = {shuffledCards}/>
    </div>
  );
}

export default App;
