import React from "react";
import s from "./MemoryGame.module.css";
import flag from "./imgs/Armenia.jpg";
import Aragacotn from "./imgs/Aragacotn.jpg";
import Ararat from "./imgs/Ararat.jpg";
import Armavir from "./imgs/Armavir.png";
import Gexarquniq from "./imgs/Gexarquniq.jpg";
import Kotayk from "./imgs/Kotayk.jpg";
import Lori from "./imgs/Lori.jpg";
import Shirak from "./imgs/Shirak.jpg";
import Syunik from "./imgs/Syunik.jpg";
import Tavush from "./imgs/Tavush.jpg";
import VayocDzor from "./imgs/VayocDzor.png";
import Yerevan from './imgs/Yerevan.jpg'

export default function MemoryGame() {
  const region = [
    { state: Aragacotn, val: 1 },
    { state: Ararat, val: 2 },
    { state: Armavir, val: 3 },
    { state: Gexarquniq, val: 4 },
    { state: Kotayk, val: 5 },
    { state: Lori, val: 6 },
    { state: Shirak, val: 7 },
    { state: Syunik, val: 8 },
    { state: Tavush, val: 9 },
    { state: VayocDzor, val: 10 },
  ];

  const choose = (num) => {
    console.log(num);
  };
  return (
    <div className={s.container}>
      {region.map((item, i) => (
        <div key={i} className={s.card} onClick={()=>choose(item.val)}>
          <div className={s.details}>
            <img alt="img" src={flag} />
          </div>
          <div className={s.imgBox} >
            <img alt="img" src={item.state} />
          </div>
        </div>
      ))}
    </div>
  );
}
