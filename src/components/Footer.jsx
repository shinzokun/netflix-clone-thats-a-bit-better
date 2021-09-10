import React from "react";
import styled from "styled-components";

function Footer(props) {
  const { Language } = props;
  const FooterPage = styled.div`
    height: 80vh;
    background-color: black;
  `;
  return (
    <FooterPage className="Footer-App grid place-content-center text-gray-400 text-normal border-t-4 border-gray-700 px-52 py-16">
      <p className="Questions">
        Questions? <span>Call 000-800-040-1843</span>
      </p>
      <div className="Footrer-Stuff py-8 flex">
        <div className="First-row pr-28">
          <p className="pb-2">FAQ</p>
          <p className="pb-2">Investor Relations</p>
          <p className="pb-2">Privacy</p>
          <p className="pb-2">Speed Test</p>
        </div>
        <div className="Second-row pr-28">
          <p className="pb-2">Help Centre</p>
          <p className="pb-2">Jobs</p>
          <p className="pb-2">Cookie Preferences</p>
          <p className="pb-2">Legal Notices</p>
        </div>
        <div className="Third-row pr-28">
          <p className="pb-2">Account</p>
          <p className="pb-2">Ways to Watch</p>
          <p className="pb-2">Corporate Information</p>
          <p className="pb-2">Only on Netflix</p>
        </div>
        <div className="Fourth-row">
          <p className="pb-2">Media Centre</p>
          <p className="pb-2">Terms Of Use</p>
          <p className="pb-2">Contact Us</p>
        </div>
      </div>
      <div className="Button-container">
        <button className="Lang-button-tag px-3 border border-white py-2 mr-3 transition hover:bg-white hover:text-black">
          <i class="Globe-icon fas fa-globe pr-2"></i>
          {Language}
        </button>
      </div>
      <div className="Location py-8">
        <p>Netflix India</p>
      </div>
    </FooterPage>
  );
}

export default Footer;
