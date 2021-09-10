import React from "react";

function InputField(props) {
  const { paddingY } = props;
  return (
    <div className={`InputField-Comp ${paddingY}`}>
      <div className="Input-container flex flex-col justify-center items-center">
        <h5 className="Heading-five text-lg font-semibold mb-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <div className="Input-container flex">
          <input
            type="text"
            className="Input-tag w-96 h-14 text-black"
            placeholder="Email address"
          />
          <button className="Button-tag-input px-5 text-2xl py-3 flex justify-centers items-center hover:text-black transition">
            Get Started
            <i class="fas fa-chevron-right px-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
