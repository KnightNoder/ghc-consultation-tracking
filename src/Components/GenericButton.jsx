import "../css/GenericButton.css";
import { useNavigate } from "react-router-dom";

const GenericButton = ({
  text,
  choice,
  conditionMet,
  vibrateText,
  newButton,
  directNavigate,
  navigateTo,
  radiusBottom,
  productNavigate,
  productLink,
  set_url_function,
  id,
}) => {
  const navigate = useNavigate();
  const navigateCheck = () => {
    if (directNavigate) {
      navigate(parseInt(navigateTo), { replace: true });
      set_url_function("/" + parseInt(navigateTo));
    } else if (productNavigate) {
      const redirectToCheckout = async () => {
        if(process.env.REACT_APP_BRAND == 'Saturn'){
          window.open(`https://saturn-saturn.myshopify.com/cart/${productLink}`);
        } else {
          window.open(`https://mars-mars.myshopify.com/cart/${productLink}`);
        }
      };
      redirectToCheckout();
    } else {
      if (conditionMet) {
        navigate("/" + choice);
        set_url_function("/" + choice);
      } else {
        vibrateText();
      }
    }
  };

  return (
    <button
      target="_blank"
      id={id}
      className={`generic-button ${newButton ? "backButtonStyle" : ""} ${
        radiusBottom ? "borderRadiusBottom" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        navigateCheck();
      }}
    >
      {text}
    </button>
  );
};

export default GenericButton;
