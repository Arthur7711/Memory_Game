import React, { useEffect, useState } from "react";
import "./Turtles.css";
import donatello from "./imgs/donatello.png";
import leonardo from "./imgs/leonardo.jpg";
import raphael from "./imgs/raphael.jpg";
import michelangelo from "./imgs/michelangelo.jpg";
import keysi from "./imgs/keysi.jpg";
import onil from "./imgs/Onil.jpg";
import splinter from "./imgs/splinter.jpg";
import shreder from "./imgs/shreder.jpg";

export default function Turtles() {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const turtles = [
    { id: 1, name: donatello },
    { id: 2, name: keysi },
    { id: 3, name: leonardo },
    { id: 4, name: raphael },
    { id: 5, name: onil },
    { id: 6, name: splinter },
    { id: 7, name: shreder },
    { id: 8, name: michelangelo },
  ];

  //currently there are 4 turtles but we need the pair

  const pairOfTurtles = [...turtles, ...turtles];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfTurtles[openedCard[0]];
    const secondMatched = pairOfTurtles[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div className="memory">
      <div className="memoryGame">
        <div className="cards">
          {pairOfTurtles.map((turtle, index) => {
            //lets flip the card

            let isFlipped = false;

            if (openedCard.includes(index)) isFlipped = true;
            if (matched.includes(turtle.id)) isFlipped = true;

            return (
              <div
                className={`turtle-card ${isFlipped ? "flipped" : ""} `}
                key={index}
                onClick={() => flipCard(index)}
              >
                <div className="inner">
                  <div className="front">
                    <img src={turtle.name} alt="turtle-name" width="100" />
                  </div>
                  <div className="back"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
