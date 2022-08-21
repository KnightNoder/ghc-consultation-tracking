import { useState } from "react";
import "../css/ChoiceCard.css";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const CheckBoxCard = ({ text, onchange, value, question,key }) => {
  return (
    <>
      <div
        className={`choice-card ${value ? "selectStyle" : "deselectStyle"}`}
        onClick={() => {
          onchange(text, !value, question);
        }}
      >
        <div className="one">
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            disableRipple
            checkedIcon={
              <CheckBoxIcon backgroundcolor="white" fontSize="small" />
            }
            sx={{
              color: `var(--border)`,
              "&.Mui-checked": {
                color: `var(--border)`,
              },
            }}
            checked={value || false}
            fontSize="small"
            key={key}
          />
        </div>
        <div
          className={`three ${value ? "selectTextStyle" : "deselectTextStyle"}`}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default CheckBoxCard;
