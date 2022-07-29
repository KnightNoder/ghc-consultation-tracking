import "../css/InputCard.css";
import { useEffect, useState } from "react";
const InputCard = ({
  heading,
  placeholder,
  requiredErrorText,
  value,
  vibrate,
  required,
  onchange,
  inputMode,
  validity,
  inputCheck,
}) => {
  const [inputValue, Set_inputValue] = useState("");
  useEffect(() => {
    Set_inputValue(value);
  }, []);
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
          onchange(heading, e.target.value);
          Set_inputValue(e.target.value);
        }}
        value={inputValue}
        inputMode={inputMode}
        type="text"
        placeholder={placeholder}
      />
      <span
        style={!value ? { visibility: "visible" } : { visibility: "hidden" }}
        className="error-text"
        id="two"
      >
        {requiredErrorText}
      </span>
    </>
  );
};

export default InputCard;
