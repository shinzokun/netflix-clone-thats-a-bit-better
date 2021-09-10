import React from "react";
import Hero from "./Hero";
import Card from "./Card";
import ReverseCard from "./ReverseCard";
import AccordianSection from "./AccordianSection";
import CardOneImage from "../../assets/tv.png";
import CardTwoImage from "../../assets/phone.jpg";
import CardThreeImage from "../../assets/tv2.png";
import CardFourImage from "../../assets/children.png";
import Footer from "./Footer";

function App() {
  const cardOne = [
    "Enjoy on your TV.",
    "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray players and more.",
    CardOneImage,
  ];
  const cardTwo = [
    "Download your shows to watch offline.",
    "Save your favourites easily and always have something to watch.",
    CardTwoImage,
  ];
  const cardThree = [
    "Watch everywhere.",
    "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    CardThreeImage,
  ];
  const cardFour = [
    "Create profiles for children.",
    "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    CardFourImage,
  ];

  return (
    <div className="App">
      <Hero />
      <div className="Width-card-container">
        <Card heading={cardOne[0]} subheading={cardOne[1]} image={cardOne[2]} />
        <ReverseCard
          heading={cardTwo[0]}
          subheading={cardTwo[1]}
          image={cardTwo[2]}
        />
        <Card
          heading={cardThree[0]}
          subheading={cardThree[1]}
          image={cardThree[2]}
        />
        <ReverseCard
          heading={cardFour[0]}
          subheading={cardFour[1]}
          image={cardFour[2]}
        />
      </div>
      <AccordianSection />
      <Footer Language={"Hindi"} />
    </div>
  );
}

export default App;
