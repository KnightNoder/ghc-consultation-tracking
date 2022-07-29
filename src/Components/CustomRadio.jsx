import "../css/ChoiceCard.css";
import Radio from "@mui/material/Radio";
// import Radio from '@material-ui/core/Radio';

const CustomRadio = ({
  option,
  clickHandler,
  state_Obj,
  selected_Key,
  question,
  key,
}) => {
  return (
    <>
      <div
        className={`choice-card ${
          state_Obj[question] == option.value ? "selectStyle" : "deselectStyle"
        } `}
        onClick={() => clickHandler(question, option.value)}
        name={option.value}
      >
        <div className={`one show-radio`}>
          <Radio
            sx={{
              color: "#975169",
              "&.Mui-checked": {
                color: "#975169",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 15,
              },
              name: option.value,
            }}
            checked={state_Obj[question] == option.value}
            key={key}
          />
        </div>
        <div
          className={`three ${
            state_Obj[selected_Key] == option.value
              ? "selectTextStyle"
              : "deselectTextStyle"
          }`}
        >
          <div className="text">{option.displayText}</div>
        </div>
      </div>
    </>
  );
};

export default CustomRadio;
