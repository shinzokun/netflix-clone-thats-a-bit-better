import React from "react";
import "../../css/card.css";
// import TempImage from "../../assets/tv.png";

function Card(props) {
  const { heading, subheading, image } = props;
  return (
    <div className="Card-App border-t-4 border-gray-700 bg-black flex justify-between items-center px-32">
      <div className="Image-container">
        <img src={image} alt="Card-image" className="Card-image-tag" />
      </div>
      <div className="Text-container text-white flex flex-col items-start my-32">
        <h1 className="Heading-tag text-5xl font-bold">{heading}</h1>
        <h2 className="Heading-two-tag text-2xl flex flex-col mt-5">
          {subheading}
          {/* <span>Watch on smart TVs, PlayStation, Xbox, </span>
          <span>Chromecast, Apple TV,Blu-ray players and </span>
          <span>more.</span> */}
        </h2>
      </div>
    </div>
  );
}

export default Card;
