import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import './index.css';
import CardData from "./Components/cardData";
// import Katie from "./Images/Katie_Zafares.jpeg"
// import Bride from "./Images/Bride.jfif";
// import GrandCanyon from "./Images/grand-canyon.png";
// import MountainBike from "./Images/mountain-bike.png";
// import ScubaDiving from "./Images/scuba-diving.png";

export default function App() {
  const cardElements = CardData.map(card => {
   return <Card img={card.img} rating={card.rating} review={card.review} place={card.place} desc={card.desc} cost={card.cost} />
  })
  return (
    <div>
      <Navbar />
      <Hero /> 
      {cardElements}
    </div>
  );
}