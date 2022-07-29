import React from "react";
import "./styles.css";
import DynamicFieldBuilder from "rolling-fields";
import LandingPage from "./Components/LandingPage";
import CustomRadio from "./Components/CustomRadio";
import CheckBoxCard from "./Components/CheckBoxCard";
import ChoicePage from "./Components/ChoicePage";
import Recommendation from "./Components/Recommendation";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import InputCard from "./Components/InputCard";
import { useEffect, useState } from "react";

export default function App() {
  const { path } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  var fields = [];
  const [builder_fields, Set_builder_fields] = useState([]);
  const [query_params, Set_query_params] = useState({});
  const [path_params, Set_path_params] = useState();
  const [stateObj, Set_stateObj] = useState(
    JSON.parse(window.localStorage.getItem("stateObj")) || {}
  );

  useEffect(() => {
    Set_query_params(window.location.search);
    document.documentElement.style.setProperty(
      "--buttonColor",
      process.env.REACT_APP_BUTTON_COLOR
    );
    document.documentElement.style.setProperty(
      "--color-lighest",
      process.env.REACT_APP_COLOR_LIGHEST
    );
    document.documentElement.style.setProperty(
      "--color-light",
      process.env.REACT_APP_COLOR_LIGHT
    );
    document.documentElement.style.setProperty(
      "--color-normal",
      process.env.REACT_APP_COLOR_LIGHT
    );
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(query_params);
    window.localStorage.setItem("stateObj", JSON.stringify(stateObj));
    let allPages = [];
    allPages = eval(
      `allPages_${process.env.REACT_APP_BRAND}_${
        stateObj["assessment_type"] == "30 sec" ? "Short" : "Long"
      }`
    );
    // assessment_type == "30 sec" ? allPages_Saturn_Short : allPages_Saturn_Long;
    if (queryParams.get("type")) {
      fields = allPages[`${queryParams.get("type")}${queryParams.get("page")}`];
      Set_builder_fields(fields);
    } else if (queryParams.get("category")) {
      fields = allPages.category;
      Set_builder_fields(fields);
    } else if (queryParams.get("userinfo")) {
      fields = allPages.userinfo;
      Set_builder_fields(fields);
    } else if (queryParams.get("appointment")) {
      fields = allPages.appointment;
      Set_builder_fields(fields);
    } else if (queryParams.get("recommendation")) {
      fields = allPages.recommendation;
      Set_builder_fields(fields);
    } else {
      fields = allPages.assessment;
      Set_builder_fields(fields);
    }
  }, [query_params, stateObj, search]);

  const redirect_to_set_query_params = (query) => {
    Set_query_params(window.location.search);
  };

  const choice_clickHandler = (question, value) => {
    if (question == "Age") value = parseInt(value);
    Set_stateObj((prevState) => {
      return { ...prevState, [question]: value };
    });
  };

  const category_click_Handler = (question, value) => {
    Set_stateObj((prevState) => {
      return {
        assessment_type: prevState["assessment_type"],
        [question]: value,
      };
    });
  };

  const clickHandler_clear = (question, value) => {
    Set_stateObj(() => {
      return { [question]: value };
    });
  };

  const checkBoxHandler = (text, value, question) => {
    console.log(question, "question");
    if (text == "No such problems") {
      Set_stateObj((prevState) => {
        return {
          ...prevState,
          [question]: {
            [text]: value,
          },
        };
      });
    } else {
      Set_stateObj((prevState) => {
        return {
          ...prevState,
          [question]: {
            ...prevState[question],
            [text]: value,
            ["No such problems"]: false,
          },
        };
      });
    }
  };

  // const link = `?page=1&type=${stateObj["Select category for consultation"]}`;
  const allPages_Saturn_Short = {
    assessment: [
      {
        name: "assessment_page",
        type: "assessment",
        data: {
          bannerHeader: `Know what's right for you`,
          bannerSubText:
            "Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan",
          bannerImageSrc:
            "https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836",
        },
      },
    ],
    category: [
      {
        name: "category",
        type: "category",
        question: "Select category for consultation",
        clickHandler: category_click_Handler,
        inputHandler: choice_clickHandler,
        CustomRadioComponent: { CustomRadio },
        state_Obj: stateObj,
        set_url_function: redirect_to_set_query_params,
        proceed_link: `?userinfo=yes`,
        back_link: "?assessment=yes",
        heading: "Age",
        required: "*",
        placeholder: "Eg: 24",
        requiredErrorText: "Please enter valid age to proceed",
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "hair",
            displayText: "Hair",
          },
          {
            displayText: "Skin",
            value: "skin",
          },
          {
            value: "weightloss",
            displayText: "Weight Management",
          },
        ],
      },
    ],
    userinfo: [
      {
        name: "userinfo",
        type: "category",
        question: "Fill up the details below :",
        clickHandler: clickHandler_clear,
        state_Obj: stateObj,
        set_url_function: { redirect_to_set_query_params },
        proceed_link: `?page=1&type=${stateObj["Select category for consultation"]}`,
        back_link: "?category=yes",
        overlay_screen_text: "Tell me about yourself",
        delay_time: "3000",
        conditionMet:
          stateObj["Age"] &&
          stateObj["First Name"] &&
          stateObj["Last Name"] &&
          stateObj["Phone Number"] &&
          stateObj["Email"],
        inputOptions: [
          {
            placeholder: "Eg: John",
            requiredErrorText: "Please enter valid first name",
            heading: "First Name",
            clickHandler: choice_clickHandler,
            required: "*",
            value: stateObj["First Name"],
            validity: {},
          },
          {
            placeholder: "Eg: Doe",
            heading: "Last Name",
            clickHandler: choice_clickHandler,
            value: stateObj["Last Name"],
          },
          {
            placeholder: "Eg: johndoe@ghc.health",
            requiredErrorText: "Please enter valid first name",
            heading: "Email",
            clickHandler: choice_clickHandler,
            required: "*",
            value: stateObj["Email"],
          },
          {
            placeholder: "Eg: 9876543210",
            requiredErrorText: "Please enter valid phone number",
            heading: "Phone Number",
            clickHandler: choice_clickHandler,
            required: "*",
            value: stateObj["Phone Number"],
            inputMode: "numeric",
          },
          {
            placeholder: "Eg: Age",
            requiredErrorText: "Please enter valid age",
            heading: "Age",
            clickHandler: choice_clickHandler,
            value: stateObj["Age"],
            required: "*",
            inputMode: "numeric",
          },
        ],
      },
    ],
    hair1: [
      {
        name: "hair page 1",
        type: "category",
        question: "What best describes your current hair condition?",
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=2&type=hair",
        back_link: "?userinfo=yes",
        delay_time: 0,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Receding hairline",
            displayText: "Receding hairline",
          },
          {
            value: "Thinning at the crown",
            displayText: "Thinning at the crown",
          },
          {
            value: "Overall hair loss/thinning",
            displayText: "Overall hair loss/thinning",
          },
          {
            value: "Receding + Overall thinning",
            displayText: "Receding + Overall thinning",
          },
        ],
      },
    ],
    hair2: [
      {
        name: "hair page 2",
        type: "category",
        question: "What results are you looking for?",
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=3&type=hair",
        back_link: "?page=1&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` Hair loss affects 60.5 % of the total Men population in India`,
        conditionMet: true,
        options: [
          {
            value: "Regrowing your hair",
            displayText: "Regrowing your hair",
          },
          {
            value: "Preventing future hair loss",
            displayText: "Preventing future hair loss",
          },
          {
            value: "Both regrowth & loss prevention",
            displayText: "Both regrowth & loss prevention",
          },
        ],
      },
    ],
    hair3: [
      {
        name: "hair page 3",
        type: "category",
        question: "Does anyone in your family have hair loss?",
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=4&type=hair",
        back_link: "?page=2&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` 50% of the male pattern baldness can be attributed due to  hereditary roots.
        However, hereditary male pattern baldness is treatable by taking early 
        preventive actions`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    hair4: [
      {
        name: "hair page 4",
        type: "category",
        question: "Do you have any past allergy reactions to medicines?",
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=5&type=hair",
        back_link: "?page=3&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` Knowing your medical allergies helps us to suggest the best treatment 
        plan for you`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    hair5: [
      {
        name: "hair page 5",
        type: "category",
        question:
          "Do you have any upcoming functions in the family in the next 120 days?",
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=4&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` FACT: Every time we try a new medication it takes time for our body to 
        react. Similarly, we can observe minimal hair loss when we start to use
        minoxidil for a few days`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    skin1: [
      {
        name: "skin page 1",
        type: "category",
        question: "What are you concerned about?",
        clickHandler: choice_clickHandler,
        category_key: "category",
        state_Obj: stateObj,
        proceed_link: "?page=2&type=skin",
        back_link: "?userinfo=yes",
        delay_time: 3000,
        overlay_screen_text: `Answer a few questions so we can help`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Open pores",
            displayText: "Open pores",
          },
          {
            value: "Pigmentation",
            displayText: "Pigmentation",
          },
          {
            value: "Acne",
            displayText: "Acne",
          },
          {
            value: "Aging",
            displayText: "Aging",
          },
          {
            value: "Dark circles",
            displayText: "Dark circles",
          },
          {
            value: "Spots & Marks",
            displayText: "Spots & Marks",
          },
          {
            value: "Dull skin (general skincare)",
            displayText: "Dull skin (general skincare)",
          },
        ],
      },
    ],
    skin2: [
      {
        name: "skin page 2",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Describe your skin type",
        state_Obj: stateObj,
        proceed_link: "?page=3&type=skin",
        back_link: "?page=1&type=skin",
        delay_time: 5000,
        overlay_screen_text: `Skin concerns are unique to each individual and one needs the right care
        to keep up with good skin health`,
        // overlay_screen_text: `It's important to listen to our bodies and understand allergies before beginning any treatment.`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Oily",
            displayText: "Oily",
          },
          {
            value: "Dry",
            displayText: "Dry",
          },
          {
            value: "Normal ",
            displayText: "Normal ",
          },
        ],
      },
    ],
    skin3: [
      {
        name: "skin page 3",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Are you allergic to any of the ingredients below?",
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=2&type=skin",
        delay_time: 5000,
        overlay_screen_text: `It's important to listen to our bodies and understand allergies before beginning any treatment.`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Vitamin C",
            displayText: "Vitamin C",
          },
          {
            value: "Salicylic Acid",
            displayText: "Salicylic Acid",
          },
          {
            value: "Retinol",
            displayText: "Retinol",
          },
          {
            value: "Kojic Acid",
            displayText: "Kojic Acid",
          },
          {
            value: "None",
            displayText: "None",
          },
        ],
      },
    ],
    weightloss1: [
      {
        name: "Weight loss page 1",
        type: "category",
        question: `Please enter your height and weight below`,
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=2&type=weightloss",
        back_link: "?userinfo=yes",
        input_none: true,
        conditionMet: true,
        delay_time: 5000,
        overlay_screen_text: `Answer few questions so we can help`,
        inputOptions: [
          {
            heading: "Height",
            placeholder: "Height(in cms)",
            requiredErrorText: "Please enter valid height to proceed",
            value: stateObj["Height"],
            inputMode: "numeric",
            clickHandler: choice_clickHandler,
            required: "*",
          },
          {
            heading: "Weight",
            placeholder: "Weight(in Kgs)",
            requiredErrorText: "Please enter valid weight to proceed",
            value: stateObj["Weight"],
            inputMode: "numeric",
            clickHandler: choice_clickHandler,
            required: "*",
          },
        ],
      },
    ],
    weightloss2: [
      {
        name: "Weight loss page 2",
        type: "category",
        question: `How often do you eat meals in a day (including tea, coffee, fruits, salads, 
          and snacks)`,
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=3&type=weightloss",
        back_link: "?page=1&type=weightloss",
        overlay_screen_text:
          "Measuring your weight everyday helps you lose weight faster",
        delay_time: "5000",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Greater than 6 times`,
            displayText: `Greater than 6 times`,
          },
          {
            value: "4-6 times",
            displayText: "4-6 times",
          },
          {
            value: "3 times",
            displayText: "3 times",
          },
          {
            value: "Less than 3 times",
            displayText: "Less than 3 times",
          },
        ],
      },
    ],
    weightloss3: [
      {
        name: "Weight loss page 3",
        type: "category",
        question: `How often do you smoke or drink?`,
        clickHandler: choice_clickHandler,
        CustomComponent: { CustomRadio },
        state_Obj: stateObj,
        proceed_link: "?page=4&type=weightloss",
        back_link: "?page=2&type=weightloss",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Daily`,
            displayText: `Daily`,
          },
          {
            value: "Occasionally",
            displayText: "Occasionally",
          },
          {
            value: "Never",
            displayText: "Never",
          },
        ],
      },
    ],
    weightloss4: [
      {
        name: "Weight loss page 2",
        type: "category",
        question: `How many days do you exercise in a week?`,
        clickHandler: choice_clickHandler,
        CustomComponent: { CustomRadio },
        state_Obj: stateObj,
        proceed_link: "?page=5&type=weightloss",
        back_link: "?page=3&type=weightloss",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Don't work out at all`,
            displayText: `Don't work out at all`,
          },
          {
            value: "Daily",
            displayText: "Daily",
          },
          {
            value: "5-6 times a week",
            displayText: "5-6 times a week",
          },
          {
            value: "1-2 times a week",
            displayText: "1-2 times a week",
          },
        ],
      },
    ],
    weightloss5: [
      {
        name: "Weight loss page 5",
        type: "category",
        question: `Do you have any pre-existing problems?`,
        clickHandler: choice_clickHandler,
        CustomComponent: { CustomRadio },
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=4&type=weightloss",
        input_none: true,
        conditionMet: true,
        checkboxOptions: [
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.[
                "Cholestrol"
              ],
            displayText: "Cholestrol",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Thyroid"],
            displayText: "Thyroid",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Heart"],
            displayText: "Heart",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Diabetes"],
            displayText: "Diabetes",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Kidney"],
            displayText: "Kidney",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.[
                "No such problems"
              ],
            displayText: "No such problems",
            onChange: checkBoxHandler,
          },
        ],
      },
    ],
    appointment: [
      {
        name: "Appointment page",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Wasn’t that easy? Would you like a free consultation?",
        state_Obj: stateObj,
        proceed_link: "?recommendation=yes",
        navigateTo: "-1",
        directNavigate: true,
        delay_time: 0,
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: "Yes, please ",
            displayText: "Yes, please ",
          },
          {
            value: "No, just tell me what to use",
            displayText: "No, just tell me what to use",
          },
        ],
      },
    ],
    recommendation: [
      {
        name: "Appointment page",
        type: "recommendation",
        clickHandler: choice_clickHandler,
        stateObj: stateObj,
        conditionMet: true,
        data: {
          bannerHeader: `Know what's right for you`,
          bannerSubText:
            "Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan",
          bannerImageSrc:
            "https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836",
        },
        options: [
          {
            value: "Yes, please ",
            displayText: "Yes, please ",
          },
          {
            value: "No, just tell me what to use",
            displayText: "No, just tell me what to use",
          },
        ],
      },
    ],
  };

  const allPages_Saturn_Long = {
    assessment: [
      {
        name: "assessment_page",
        type: "assessment",
        data: {
          bannerHeader: `Know what's right for you`,
          bannerSubText:
            "Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan",
          bannerImageSrc:
            "https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836",
        },
      },
    ],
    category: [
      {
        name: "category",
        type: "category",
        question: "Select category for consultation",
        clickHandler: clickHandler_clear,
        inputHandler: choice_clickHandler,
        CustomRadioComponent: { CustomRadio },
        state_Obj: stateObj,
        set_url_function: { redirect_to_set_query_params },
        proceed_link: `?userinfo=yes`,
        back_link: "?assessment=yes",
        heading: "Age",
        required: "*",
        placeholder: "Eg: 24",
        requiredErrorText: "Please enter valid age to proceed",
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "hair",
            displayText: "Hair",
          },
          {
            displayText: "Skin",
            value: "skin",
          },
          {
            value: "weightloss",
            displayText: "Weight Management",
          },
        ],
      },
    ],
    userinfo: [
      {
        name: "userinfo",
        type: "category",
        question: "Fill up the details below :",
        clickHandler: clickHandler_clear,
        state_Obj: stateObj,
        set_url_function: { redirect_to_set_query_params },
        proceed_link: `?page=1&type=${stateObj["Select category for consultation"]}`,
        back_link: "?category=yes",
        overlay_screen_text: "Tell me about yourself",
        delay_time: "3000",
        conditionMet:
          stateObj["Age"] &&
          stateObj["First Name"] &&
          stateObj["Last Name"] &&
          stateObj["Phone Number"] &&
          stateObj["Email"],
        inputOptions: [
          {
            placeholder: "Eg: John",
            requiredErrorText: "Please enter valid first name",
            heading: "First Name",
            clickHandler: choice_clickHandler,
            required: "*",
            value: stateObj["First Name"],
            validity: {},
          },
          {
            placeholder: "Eg: Doe",
            heading: "Last Name",
            clickHandler: choice_clickHandler,
            value: stateObj["Last Name"],
          },
          {
            placeholder: "Eg: johndoe@ghc.health",
            requiredErrorText: "Please enter valid first name",
            heading: "Email",
            clickHandler: choice_clickHandler,
            required: "*",
            value: stateObj["Email"],
          },
          {
            placeholder: "Eg: 9876543210",
            requiredErrorText: "Please enter valid phone number",
            heading: "Phone Number",
            clickHandler: choice_clickHandler,
            required: "*",
            value: stateObj["Phone Number"],
            inputMode: "numeric",
          },
          {
            placeholder: "Eg: Age",
            requiredErrorText: "Please enter valid age",
            heading: "Age",
            clickHandler: choice_clickHandler,
            value: stateObj["Age"],
            required: "*",
            inputMode: "numeric",
          },
        ],
      },
    ],
    skin1: [
      {
        name: "skin page 1",
        type: "category",
        question: "What are you concerned about?",
        clickHandler: choice_clickHandler,
        category_key: "category",
        state_Obj: stateObj,
        proceed_link: "?page=2&type=skin",
        back_link: "?userinfo=yes",
        delay_time: 3000,
        overlay_screen_text: `Answer a few questions so we can help`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Open pores",
            displayText: "Open pores",
          },
          {
            value: "Pigmentation",
            displayText: "Pigmentation",
          },
          {
            value: "Acne",
            displayText: "Acne",
          },
          {
            value: "Aging",
            displayText: "Aging",
          },
          {
            value: "Dark circles",
            displayText: "Dark circles",
          },
          {
            value: "Spots & Marks",
            displayText: "Spots & Marks",
          },
          {
            value: "Dull skin (general skincare)",
            displayText: "Dull skin (general skincare)",
          },
        ],
      },
    ],
    skin2: [
      {
        name: "skin page 2",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Describe your skin type",
        state_Obj: stateObj,
        proceed_link: "?page=3&type=skin",
        back_link: "?page=1&type=skin",
        delay_time: 5000,
        overlay_screen_text: `Skin concerns are unique to each individual and one needs the right care
        to keep up with good skin health`,
        // overlay_screen_text: `It's important to listen to our bodies and understand allergies before beginning any treatment.`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Oily",
            displayText: "Oily",
          },
          {
            value: "Dry",
            displayText: "Dry",
          },
          {
            value: "Normal ",
            displayText: "Normal ",
          },
        ],
      },
    ],
    skin3: [
      {
        name: "skin page 3",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "How frequently do you get acne?",
        state_Obj: stateObj,
        proceed_link: "?page=4&type=skin",
        back_link: "?page=2&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Once a week",
            displayText: "Once a week",
          },
          {
            value: "Once a month or 2 months",
            displayText: "Once a month or 2 months",
          },
          {
            value: "Always have acne",
            displayText: "Always have acne",
          },
          {
            value: "Very rarely",
            displayText: "Very rarely",
          },
          {
            value: "No acne",
            displayText: "No acne",
          },
        ],
      },
    ],
    skin4: [
      {
        name: "skin page 4",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Do you have blackheads/ whiteheads on your skin?",
        state_Obj: stateObj,
        proceed_link: "?page=5&type=skin",
        back_link: "?page=3&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Chin",
            displayText: "Chin",
          },
          {
            value: "Cheeks",
            displayText: "Cheeks",
          },
          {
            value: "Forehead",
            displayText: "Forehead",
          },
        ],
      },
    ],
    skin5: [
      {
        name: "skin page 5",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Do you have any acne scars or spots?",
        state_Obj: stateObj,
        proceed_link: "?page=6&type=skin",
        back_link: "?page=4&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    skin6: [
      {
        name: "skin page 6",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Do you have active pimples/Pitted Acne?",
        state_Obj: stateObj,
        proceed_link: "?page=7&type=skin",
        back_link: "?page=5&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    skin7: [
      {
        name: "skin page 7",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Do you have wrinkles or early signs of ageing pattern?",
        state_Obj: stateObj,
        proceed_link: "?page=8&type=skin",
        back_link: "?page=6&type=skin",
        conditionMet: true,
        options: [
          {
            value: "No wrinkles",
            displayText: "No wrinkles",
          },
          {
            value: "Early signs of ageing",
            displayText: "Early signs of ageing",
          },
          {
            value: "I have wrinkles around my eyes and cheeks",
            displayText: "I have wrinkles around my eyes and cheeks",
          },
          {
            value: "I have ageing lines on my forehead",
            displayText: "I have ageing lines on my forehead",
          },
        ],
      },
    ],
    skin8: [
      {
        name: "skin page 8",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Where are the wrinkles on your face?",
        state_Obj: stateObj,
        proceed_link: "?page=9&type=skin",
        back_link: "?page=7&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Around the eyes",
            displayText: "Around the eyes",
          },
          {
            value: "Around the nose",
            displayText: "Around the nose",
          },
          {
            value: "Around the mouth",
            displayText: "Around the mouth",
          },
          {
            value: "Around the lips",
            displayText: "Around the lips",
          },
          {
            value: "None of the above",
            displayText: "None of the above",
          },
        ],
      },
    ],
    skin9: [
      {
        name: "skin page 9",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "How many litres of water do you drink per day?",
        state_Obj: stateObj,
        proceed_link: "?page=10&type=skin",
        back_link: "?page=8&type=skin",
        overlay_screen_text:
          "We would love to get to know you better! Can you tell us more about your lifestyle?",
        delay_time: 5000,
        conditionMet: true,
        options: [
          {
            value: "1-2 litres",
            displayText: "1-2 litres",
          },
          {
            value: "2-3 litres",
            displayText: "2-3 litres",
          },
          {
            value: "3-4 litres",
            displayText: "3-4 litres",
          },
          {
            value: "4-5 litres",
            displayText: "4-5 litres",
          },
        ],
      },
    ],
    skin10: [
      {
        name: "skin page 10",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "How often do you eat out?",
        state_Obj: stateObj,
        proceed_link: "?page=11&type=skin",
        back_link: "?page=9&type=skin",
        conditionMet: true,
        overlay_screen_text: "There is nothing like mom's meals!",
        delay_time: 3000,
        options: [
          {
            value: "Once a week",
            displayText: "Once a week",
          },
          {
            value: "Multiple times a week",
            displayText: "Multiple times a week",
          },
          {
            value: "Never",
            displayText: "Never",
          },
        ],
      },
    ],
    skin11: [
      {
        name: "skin page 10",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "How often do you have junk food?",
        state_Obj: stateObj,
        proceed_link: "?page=12&type=skin",
        back_link: "?page=10&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Frequently",
            displayText: "Frequently",
          },
          {
            value: "Rarely",
            displayText: "Rarely",
          },
          {
            value: "Never",
            displayText: "Never",
          },
        ],
      },
    ],
    skin12: [
      {
        name: "skin page 12",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "What type of diet do you follow?",
        state_Obj: stateObj,
        proceed_link: "?page=13&type=skin",
        back_link: "?page=11&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Vegetarian including milk products",
            displayText: "Vegetarian including milk products",
          },
          {
            value: "Vegetarian without milk products",
            displayText: "Vegetarian without milk products",
          },
          {
            value: "Non-vegetarian",
            displayText: "Non-vegetarian",
          },
        ],
      },
    ],
    skin13: [
      {
        name: "skin page 12",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "How many hours do you sleep?",
        state_Obj: stateObj,
        proceed_link: "?page=14&type=skin",
        back_link: "?page=12&type=skin",
        overlay_screen_text:
          "A good diet and sufficient rest are crucial to maintaining healthy skin.",
        delay_time: 5000,
        conditionMet: true,
        options: [
          {
            value: "3-5 hours",
            displayText: "3-5 hours",
          },
          {
            value: "5-6 hours",
            displayText: "5-6 hours",
          },
          {
            value: "6-8 hours",
            displayText: "6-8 hours",
          },
          {
            value: "8-10 hours",
            displayText: "8-10 hours",
          },
        ],
      },
    ],
    skin14: [
      {
        name: "skin page 14",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "How many hours do you work in a day? ",
        state_Obj: stateObj,
        proceed_link: "?page=15&type=skin",
        back_link: "?page=13&type=skin",
        overlay_screen_text:
          "Let's not tell your boss how many hours you worked yesterday.",
        delay_time: 5000,
        conditionMet: true,
        options: [
          {
            value: "<9 hours",
            displayText: "<9 hours",
          },
          {
            value: "9-10 hours",
            displayText: "9-10 hours",
          },
          {
            value: "10-12 hours",
            displayText: "10-12 hours",
          },
          {
            value: "12 and above",
            displayText: "12 and above",
          },
        ],
      },
    ],
    skin15: [
      {
        name: "skin page 15",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "How often do you smoke or drink?",
        state_Obj: stateObj,
        proceed_link: "?page=16&type=skin",
        back_link: "?page=14&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Daily",
            displayText: "Daily",
          },
          {
            value: "Occasionally",
            displayText: "Occasionally",
          },
          {
            value: "Never",
            displayText: "Never",
          },
        ],
      },
    ],
    skin16: [
      {
        name: "skin page 3",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Are you allergic to any of the ingredients below?",
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=2&type=skin",
        delay_time: 5000,
        overlay_screen_text: `It's important to listen to our bodies and understand allergies before beginning any treatment.`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Vitamin C ",
            displayText: "Vitamin C ",
          },
          {
            value: "Salicylic Acid",
            displayText: "Salicylic Acid",
          },
          {
            value: "Retinol",
            displayText: "Retinol",
          },
          {
            value: "Kojic Acid",
            displayText: "Kojic Acid",
          },
          {
            value: "None",
            displayText: "None",
          },
        ],
      },
    ],
    skin17: [
      {
        name: "Skin page 17",
        type: "category",
        question: `Do you have any pre-existing problems?`,
        clickHandler: choice_clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=18&type=weightloss",
        back_link: "?page=16&type=weightloss",
        input_none: true,
        conditionMet: true,
        checkboxOptions: [
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.[
                "Hypertension"
              ],
            displayText: "Hypertension",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Thyroid"],
            displayText: "Thyroid",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Heart"],
            displayText: "Heart",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Diabetes"],
            displayText: "Diabetes",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Kidney"],
            displayText: "Kidney",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.[
                "Indigestion"
              ],
            displayText: "Indigestion",
            onChange: checkBoxHandler,
          },
        ],
      },
    ],
    skin18: [
      {
        name: "skin page 18",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Have you ever had side effects from skin products?",
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=17&type=skin",
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    appointment: [
      {
        name: "Appointment page",
        type: "category",
        clickHandler: choice_clickHandler,
        question: "Wasn’t that easy? Would you like a free consultation?",
        state_Obj: stateObj,
        proceed_link: "?recommendation=yes",
        navigateTo: "-1",
        directNavigate: true,
        delay_time: 0,
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: "Yes, please ",
            displayText: "Yes, please ",
          },
          {
            value: "No, just tell me what to use",
            displayText: "No, just tell me what to use",
          },
        ],
      },
    ],
  };

  const mappings = {
    assessment: ({ data }) => (
      <LandingPage
        bannerHeader={data.bannerHeader}
        bannerSubText={data.bannerSubText}
        bannerImageSrc={data.bannerImageSrc}
        set_url_function={redirect_to_set_query_params}
        clickHandler={clickHandler_clear}
      />
    ),
    category: ({
      name,
      options,
      question,
      state_Obj,
      clickHandler,
      inputHandler,
      back_link,
      proceed_link,
      delay_time,
      overlay_screen_text,
      directNavigate,
      navigateTo,
      inputOptions,
      checkboxOptions,
      conditionMet,
    }) => (
      <ChoicePage
        question={question}
        clickHandler={clickHandler}
        state_Obj={state_Obj}
        CustomComponent={CustomRadio}
        CustomInputComponent={InputCard}
        back_link={back_link}
        proceed_link={proceed_link}
        set_url_function={redirect_to_set_query_params}
        delay_time={delay_time}
        overlay_screen_text={overlay_screen_text}
        directNavigate={directNavigate}
        navigateTo={navigateTo}
        inputHandler={inputHandler}
        options={options}
        inputOptions={inputOptions}
        checkboxOptions={checkboxOptions}
        conditionMet={conditionMet}
      />
    ),
    recommendation: ({ stateObj, assessment_type, data }) => (
      <Recommendation
        stateObj={stateObj}
        assessment_type={assessment_type}
        bannerHeader={data.bannerHeader}
        bannerSubText={data.bannerSubText}
        bannerImageSrc={data.bannerImageSrc}
      />
    ),
  };

  const getBuilderFieldObjects = () => {};

  return (
    <div className="main-container">
      <form>
        <DynamicFieldBuilder
          fields={builder_fields}
          mappings={mappings}
          fieldContext={{ isVisible: true }}
        />
      </form>
    </div>
  );
}
