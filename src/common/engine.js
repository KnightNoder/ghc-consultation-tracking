const { Engine } = require("json-rules-engine");
let hair_engine = new Engine();
let skin_engine = new Engine();
let weightloss_engine = new Engine();
let weightloss_engine_long = new Engine();
let skin_engine_long = new Engine();
//Hair

hair_engine.addRule({
  conditions: {
    any: [
      {
        fact: "What best describes your current hair condition?",
        operator: "equal",
        value: "Receding hairline",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "6933666726052",
    },
  },
});

hair_engine.addRule({
  conditions: {
    any: [
      {
        fact: "What best describes your current hair condition?",
        operator: "equal",
        value: "Thinning at the crown",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "6920580530340",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes your current hair condition?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "Do you have any past allergy reactions to medicines?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "6920192950436",
    },
  },
});

// Skin- Vit C

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7658081157342",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7489917878494",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7658081157342",
    },
  },
});

//Skin- None

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7489917878494",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

// Salicylic acid

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7658081157342",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7658065002718",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

// Retinol

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7489917878494",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7658065002718",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

// Kojic Acid

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7489916272862",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7489917878494",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

// Niacinamide

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7637440266488",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7524810391800",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "6826093478052",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "6825877635236",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7637452128504",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "6826093478052",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7516963406072",
    },
  },
});

//weightloss

weightloss_engine.addRule({
  conditions: {
    all: [
      {
        fact: "BMI",
        operator: "lessThanInclusive",
        value: "22",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7634556059870",
    },
  },
});

weightloss_engine.addRule({
  conditions: {
    all: [
      {
        fact: "BMI",
        operator: "greaterThan",
        value: "22",
      },
      {
        fact: "BMI",
        operator: "lessThanInclusive",
        value: "25",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7619064365278",
    },
  },
});

weightloss_engine.addRule({
  conditions: {
    all: [
      {
        fact: "BMI",
        operator: "greaterThan",
        value: "25",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7630401143006",
    },
  },
});

// weightloss long

weightloss_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "BMI",
        operator: "greaterThan",
        value: "25",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7679735759070", "7634556059870"],
    },
  },
});

weightloss_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "BMI",
        operator: "lessThanInclusive",
        value: "25",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7679735759070", "7634556059870"],
    },
  },
});

//skin long

// None

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7658081157342"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7658065002718"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7489917878494", "7489917878494"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7679711412446"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7602712576222"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7489917550814"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7530240245982"],
    },
  },
});

// Skin- Vit C

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7658081157342", "7658081157342"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7658065002718"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7489917878494", "7489917878494"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7489916829918"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7602712576222"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7489917550814"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7658081157342", "7530237690078"],
    },
  },
});

// Salicylic acid

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7658081157342"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7658065002718"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7658081157342", "7658081157342"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7679711412446"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7602712576222"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7658065002718", "7658065002718"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7489917550814"],
    },
  },
});

// Retinol

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602721095902",
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7658065002718"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7489917878494", "7489917878494"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7658065002718", "7530240245982"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7530241163486"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602716573918", "7489917550814"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7530240245982"],
    },
  },
});

// Kojic Acid

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Open pores",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7658081157342"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Pigmentation",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7489916272862", "7658089087198"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Active Acne",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7489917878494", "7489917550814"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Aging",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7679711412446"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dark circles",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602723160286", "7602712576222"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Acne marks & spots",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7489917550814"],
    },
  },
});

skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of the ingredients below?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Dull Skin",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7602721095902", "7530240245982"],
    },
  },
});

export const getProductIdFromEngine = async (stateObj) => {
  var productId = "";
  if (stateObj["assessment_type"] == "30 sec") {
    if (stateObj["Select category for consultation"] == "skin") {
      let facts = {
        "Are you allergic to any of the ingredients below?":
          stateObj["Are you allergic to any of the ingredients below?"],
        "What are you concerned about?":
          stateObj["What are you concerned about?"],
      };
      await skin_engine.run(facts).then(({ events }) => {
        events.map((event) => {
          productId = event.params.id;
        });
      });
    }
    if (stateObj["Select category for consultation"] == "hair") {
      await hair_engine.run(facts).then(({ events }) => {
        events.map((event) => {
          productId = event.params.id;
        });
      });
    }
    if (stateObj["Select category for consultation"] == "weightloss") {
      console.log("in weightloss");
      const weight = parseInt(stateObj["Weight"]);
      const height = parseInt(stateObj["Height"]);
      const bmi_value = (weight * 10000) / (height * height);
      let facts = {
        BMI: parseInt(bmi_value),
      };
      await weightloss_engine.run(facts).then(({ events }) => {
        events.map((event) => {
          console.log(event.params.id);
          productId = event.params.id;
        });
      });
    }
    return productId;
  } else {
    if (stateObj["Select category for consultation"] == "skin") {
      console.log(
        stateObj["Are you allergic to any of the ingredients below?"]
      );
      console.log(stateObj["What are you concerned about?"]);

      let facts = {
        "Are you allergic to any of the ingredients below?":
          // stateObj["Are you allergic to any of the ingredients below?"],
          "Vitamin C",
        "What are you concerned about?":
          // stateObj["What are you concerned about?"],
          "Open pores",
      };
      await skin_engine_long.run(facts).then(({ events }) => {
        events.map((event) => {
          console.log(event.params.id);
          productId = event.params.id;
        });
      });
    }
    if (stateObj["Select category for consultation"] == "weightloss") {
      console.log("in long weight loss");
      const weight = parseInt(stateObj["Weight"]);
      const height = parseInt(stateObj["Height"]);
      const bmi_value = (weight * 10000) / (height * height);
      console.log(parseInt(bmi_value), "bmi value");
      let facts = {
        BMI: parseInt(bmi_value),
      };
      await weightloss_engine_long.run(facts).then(({ events }) => {
        events.map((event) => {
          productId = event.params.id;
        });
      });
    }
    return productId;
  }
};
