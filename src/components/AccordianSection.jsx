import React from "react";
import InputField from "./InputField";
import Accordian from "./Accordion";
import Accordion from "./Accordion";
import styled from "styled-components";

function AccordianSection() {
  const AccordionPage = styled.div`
    height: 120vh;
    background-color: black;
  `;

  const accOne = [
    "What is Netflix?",
    "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!",
  ];
  const accTwo = [
    "How Much Does Netflix Cost?",
    "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
  ];
  const accThree = [
    "Where can I watch?",
    "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere",
  ];
  const accFour = [
    "How do I cancel?",
    "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  ];
  const accFive = [
    "What can i watch in Netflix?",
    "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  ];
  return (
    <AccordionPage className="Accordion-App">
      <div className="Main-container bg-black text-white border-t-4 border-gray-700 flex flex-col items-center">
        <div className="Heading-container my-16">
          <h1 className="Heading-tag text-6xl font-semibold">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="Accordion-container">
          <Accordion heading={accOne[0]} description={accOne[1]} />
          <Accordion heading={accTwo[0]} description={accTwo[1]} />
          <Accordion heading={accThree[0]} description={accThree[1]} />
          <Accordion heading={accFour[0]} description={accFour[1]} />
          <Accordion heading={accFive[0]} description={accFive[1]} />
        </div>
        <div className="Input-field-container">
          <InputField paddingY={"py-10"} />
        </div>
      </div>
    </AccordionPage>
  );
}

export default AccordianSection;
