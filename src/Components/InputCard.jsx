import "../css/InputCard.css";
import { useEffect, useState } from "react";
const InputCard = ({
  heading,
  placeholder,
  requiredErrorText,
  input_value,
  vibrate,
  required,
  onchange,
  inputMode,
  validity,
  inputCheck,
}) => {
  return (
    <>
      <h3 className="input-card-label">
        {heading}
        <div
          style={{
            display: "inline-block",
            fontSize: "20px",
            color: "#EA2C2C",
            marginLeft: "3px",
          }}
          className=""
        >
          {required}
        </div>
      </h3>
      <input
        className="input"
        onChange={(e) => {
          console.log(e.target.value);
          onchange(heading, e.target.value);
        }}
        value={input_value}
        inputMode={inputMode}
        type="text"
        placeholder={placeholder}
      />
      <span
        style={
          !input_value ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className="error-text"
        id="two"
      >
        {requiredErrorText}
      </span>
    </>
  );
};

export default InputCard;
