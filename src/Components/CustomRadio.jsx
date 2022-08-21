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
  const ImageStyle = {
    display: "block",
  };

  const NoImageStyle = {
    display: "none",
  };
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
              color: `var(--border)`,
              "&.Mui-checked": {
                color: `var(--border)`,
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
          className="two"
          style={option.image_exists ? ImageStyle : NoImageStyle}
        >
          <img src={option.image} className="image-section" alt="" />
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
