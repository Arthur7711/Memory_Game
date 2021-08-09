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

export default function MemoryGame() {
  const region = [
    Aragacotn,
    Ararat,
    Armavir,
    Gexarquniq,
    Kotayk,
    Lori,
    Shirak,
    Syunik,
    Tavush,
    VayocDzor,
  ];

  return (
    <div className={s.container}>
      {region.map((item) => (
        <div className={s.card}>
          <div className={s.details}>
            <img alt="img" src={flag} />
          </div>
          <div className={s.imgBox}>
            <img alt="img" src={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
