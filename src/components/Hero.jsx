import React from "react";
import Logo from "../../assets/logo.png";
import InputField from "../components/InputField";
import "../../css/hero.css";

function Hero() {
  const Language = "Hindi";
  return (
    <div className="Hero-App">
      <div className="Back-image-container">
        <div className="BG-gradient-container">
          {/* NAVBAR  */}
          <div className="Nav-container flex justify-between items-center px-10">
            <div className="Left-side-container">
              <img src={Logo} alt="Netflix Logo" className="Logo-tag" />
            </div>
            <div className="Right-side-container flex items-center text-white">
              <button className="Lang-button-tag px-3 border border-white py-2 mr-3 transition hover:bg-white hover:text-black">
                <i class="Globe-icon fas fa-globe pr-2"></i>
                {Language}
              </button>
              <button className="Sign-in-tag rounded font-semibold py-2 px-5 text-md mx-4 transition hover:text-black">
                Sign In
              </button>
            </div>
          </div>
          {/* MAIN CONTAINER */}
          <div className="Main-container text-white flex flex-col justify-center items-center">
            <div className="Text-container flex flex-col items-center mb-10">
              <h1 className="Heading-tag text-5xl font-bold flex flex-col items-center">
                <span className="pb-2">Unlimited movies, TV</span>
                <span>shows and more.</span>
              </h1>
              <h3 className="Heading-three-tag font-normal text-2xl pt-4">
                Watch anywhere. Cancel anytime.
              </h3>
            </div>
            <InputField />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
