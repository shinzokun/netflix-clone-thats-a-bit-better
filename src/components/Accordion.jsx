import React, { useState } from "react";
import styled from "styled-components";
import "../../css/accordian.css";

function Accordion(props) {
  const { heading, description } = props;

  const Header = styled.div`
    width: 55rem;
    background-color: #303030;
  `;
  const Body = styled.div`
    width: 55rem;
    background-color: #303030;
  `;

  const [isOpen, setIsOpen] = useState(false);
  const ChangeTheBoolean = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`Accordion-App`}>
      <div className="Accordian flex flex-col items-center px-56 pb-2">
        <Header
          className="Header bg-gray-600 text-2xl flex justify-between px-8 py-5 items-center"
          onClick={ChangeTheBoolean}
        >
          <h1 className="Accordion-header">{heading}</h1>
          <i
            class={
              isOpen == true ? "fas fa-chevron-up " : "fas fa-chevron-down"
            }
          ></i>
        </Header>
        {isOpen == true ? (
          <Body className="Body px-8 border-black border-t-2">
            <p className="Accordion-body text-2xl py-6">{description}</p>
          </Body>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default Accordion;
