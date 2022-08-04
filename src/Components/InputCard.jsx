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
  // key,
}) => {
  return (
    <>
      <h3 className="input-card-label">
        {heading}
        <div className="required-symbol">{required}</div>
      </h3>
      <input
        className="input"
        onChange={(e) => {
          onchange(heading, e.target.value);
        }}
        key={heading.replaceAll(" ", "_").toLowerCase()}
        value={input_value}
        inputMode={inputMode}
        type="text"
        placeholder={placeholder}
        onKeyDown={inputCheck}
      />
      <span
        style={!validity ? { visibility: "visible" } : { visibility: "hidden" }}
        className="error-text"
        id="two"
      >
        {requiredErrorText}
      </span>
    </>
  );
};

export default InputCard;
