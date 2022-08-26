const { Engine } = require("json-rules-engine");
let hair_engine = new Engine();
let hair_engine_long = new Engine();
let skin_engine = new Engine();
let skin_engine_long = new Engine();
let weightloss_engine = new Engine();
let weightloss_engine_long = new Engine();

let mars_hair_engine = new Engine();
let mars_hair_engine_long = new Engine();
let mars_skin_engine = new Engine();
let mars_skin_engine_long = new Engine();
let mars_weightloss_engine = new Engine();
let mars_weightloss_engine_long = new Engine();
let mars_performance_engine = new Engine();
let mars_performance_engine_long = new Engine();
let mars_beard_engine_long = new Engine();
let mars_beard_engine = new Engine();

//Hair short

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding hairline",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730670010590",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding hairline",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730670010590",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding hairline",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730684985566",
    },
  },
});

//option 2

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Thinning at the crown",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730767626462",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Thinning at the crown",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730767626462",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Thinning at the crown",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730743640286",
    },
  },
});

//option 3

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730767626462",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730767626462",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730743640286",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730767626462",
    },
  },
});

//option 4

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730670010590",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730767626462",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730670010590",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730670010590",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730743640286",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7730670010590",
    },
  },
});

// Hair long

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding hairline",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730670010590", "7730670010590"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding hairline",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730670010590", "7730711527646"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding hairline",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730684985566", "7730703761630"],
    },
  },
});

//option 2

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Thinning at the crown",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730767626462", "7730767626462"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Thinning at the crown",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730767626462", "7730767626462"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Thinning at the crown",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730743640286", "7730703761630"],
    },
  },
});

//option 3

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730767626462", "7730767626462"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        any: [
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "No",
          },
          {
            fact: "Do you have any upcoming functions in the family in the next 30 days?",
            operator: "equal",
            value: "Yes",
          },
        ],
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730767626462", "7730670010590"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730743640286", "7730743640286"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Overall hair loss/thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730670010590", "7730684985566"],
    },
  },
});

//option 4

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730743640286", "7730743640286"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730670010590", "7730684985566"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "No",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730743640286", "7730670010590"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Regrowing your hair",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730670010590", "7730684985566"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Preventing future hair loss",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730670010590", "7730767626462"],
    },
  },
});

hair_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes the current condition of your hair?",
        operator: "equal",
        value: "Receding + Overall thinning",
      },
      {
        fact: "What results are you looking for?",
        operator: "equal",
        value: "Both regrowth & loss prevention",
      },
      {
        fact: "Do you have any upcoming functions in the family in the next 30 days?",
        operator: "equal",
        value: "Yes",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7730670010590", "7730767626462"],
    },
  },
});

// Skin- Vit C

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7602721095902",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7602716573918",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7658081157342",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7602723160286",
    },
  },
});

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
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
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7602721095902",
    },
  },
});

// Retinol

skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Kojic Acid",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Niacinamide",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Niacinamide",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Niacinamide",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Niacinamide",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Niacinamide",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Niacinamide",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
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
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Niacinamide",
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
        fact: 'body_conditions_array',
        operator: 'contains', 
        value: 'OverWeight/Obese',
      },{
        any : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Glucosamine"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Chondroitin"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Methylsulfonylmethane(MSM)"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"None"
          }
        ]
      }
    ]
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
        fact: 'body_conditions_array',
        operator: 'contains', 
        value: 'Stretch Marks on the skin',
      },
      {
        any : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Glucosamine"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Chondroitin"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Methylsulfonylmethane(MSM)"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"None"
          }
        ]
      }
    ]
  },
  event: {
    type: "product id",
    params: {
      id: "7688497692894",
    },
  },
});

weightloss_engine.addRule({
  conditions: {
    all: [ 
      {        
        any:[
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Weak bones/muscles',
          },
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Body Fatigue',
          }
        ]
      },
      {
        any : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Glucosamine"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Chondroitin"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Methylsulfonylmethane(MSM)"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"None"
          }
        ]
      }
    ]
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
        any:[
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Weak Joints',
          },
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Knee/Shoulder/Joint Pain',
          }
        ]
      },
      {
        any : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Glucosamine"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Chondroitin"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Methylsulfonylmethane(MSM)"
          },
        ]
      }
    ]
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
        any:[
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Weak Joints',
          },
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Knee/Shoulder/Joint Pain',
          }
        ]
      },
      {
        all : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"None"
          }
        ]
      }
    ]
  },
  event: {
    type: "product id",
    params: {
      id: "7630401143006",
    },
  },
});

weightloss_engine.addRule({
  conditions: {
    all: [ 
      {
        fact: 'body_conditions_array',
        operator: 'contains', 
        value: 'OverWeight/Obese',
      },
      {
        any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
        ]
      },
      {
        all : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"None"
          }
        ]
      }
    ]
  },
  event: {
    type: "product id",
    params: {
      id: "7630401143006",
    },
  },
});

weightloss_engine.addRule({
  conditions: {
    all: [ 
      {
        fact: 'body_conditions_array',
        operator: 'contains', 
        value: 'OverWeight/Obese',
      },
      {
        any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
        ]
      },
      {
        any : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Glucosamine"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Chondroitin"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Methylsulfonylmethane(MSM)"
          },
        ]
      }
    ]
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
        fact: 'body_conditions_array',
        operator: 'contains', 
        value: 'OverWeight/Obese',
      },
      {
        any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
        ]
      },
      {
        any:[
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Weak bones/muscles',
          },
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Body Fatigue',
          }
        ]
      },
      {
        all : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"None"
          }
        ]
      }
    ]
  },
  event: {
    type: "product id",
    params: {
      id: "7630401143006",
    },
  },
  priority: 100
});

weightloss_engine.addRule({
  conditions: {
    all: [ 
      {
        fact: 'body_conditions_array',
        operator: 'contains', 
        value: 'OverWeight/Obese',
      },
      {
        any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
        ]
      },
      {
        any:[
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Weak bones/muscles',
          },
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Body Fatigue',
          }
        ]
      },
      {
        any : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Glucosamine"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Chondroitin"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Methylsulfonylmethane(MSM)"
          },
        ]
      }
    ]
  },
  event: {
    type: "product id",
    params: {
      id: "7619064365278",
    },
  },
  priority: 100
});

weightloss_engine.addRule({
  conditions: {
    all: [ 
      {
        any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
        ]
      },
      {
        any:[
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Weak bones/muscles',
          },
          {
            fact: 'body_conditions_array',
            operator: 'contains', 
            value: 'Body Fatigue',
          }
        ]
      },
      {
        any : [
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Glucosamine"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Chondroitin"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"Methylsulfonylmethane(MSM)"
          },
          {
            fact:'past_allergies_array',
            operator:'contains',
            value:"None"
          },
        ]
      }
    ]
  },
  event: {
    type: "product id",
    params: {
      id: "7679735759070",
    },
  },
  priority: 100
});

// weightloss long

  //2A
  weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },{
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7634556059870","7634556059870"],
      },
    },
  });
  
  
  //2B/2E
  weightloss_engine_long.addRule({
      conditions: {
        all: [ 
          {        
            any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak bones/muscles',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Body Fatigue',
              }
            ]
          },
          {
            any : [
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Glucosamine"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Chondroitin"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Methylsulfonylmethane(MSM)"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"None"
              }
            ]
          }
        ]
      },
      event: {
        type: "product id",
        params: {
          id: ["7619064365278","7619064365278"],
        },
      },
    });

   //2C/2D Any
   weightloss_engine_long.addRule({   
    conditions: {
      all: [ 
        {        
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7619064365278","7619064365278"],
      },
    },
  });
  
  //2C/2D None
  weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {        
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
          ]
        },
        {
          all : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7630401143006","7630401143006"],
      },
    },
  });

  //2F
  weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {        
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'Stretch Marks on the skin',
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7688497692894","7688497692894"],
      },
    },
  });
  
  //2C/2D + 2B/2E + Any

  weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak bones/muscles',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Body Fatigue',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7679735759070","7679735759070"],
      },
    },
  });
  
  //2A + 2C/D None
  weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          all : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7679735759070" ,"7630401143006"],
      },
    },
  });
  
  //2A + 2C/D Any
  weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7679735759070","7619064365278"],
      },
    },
  });

 //2A+ 2C/2D +2B/2E+None
 weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak bones/muscles',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Body Fatigue',
            }
          ]
        },
        {
          all : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7679735759070","7630401143006"],
      },
    },
  });
  
  //2A+ 2C/2D +2B/2E+Any
  weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak bones/muscles',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Body Fatigue',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7679735759070","7619064365278"],
      },
    },
  });


// Mars recommendation

//Skin - short

// Vitamin c
mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637440266488",
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637452128504"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7696963600632"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6906399129764"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6906399129764"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7696963600632"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7694368080120",
    },
  },
});

//Skin- None

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637452128504"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7696963600632"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877087105188"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7694374043896"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877027401892",
    },
  },
});

// Salicylic acid

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637440266488",
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637452128504"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637440266488",
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877087105188"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877087105188"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
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

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877027401892"
    },
  },
});

// Retinol

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637440266488",
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637452128504"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7696963600632"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877027401892"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6973677732004"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7602716573918"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877027401892",
    },
  },
});

// Kojic Acid

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637440266488",
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7637473067256",
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7696963600632",
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "6877087105188"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: "7694374043896"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: "7696963600632"
    },
  },
});

mars_skin_engine.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Kojic Acid",
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
      id: "6877027401892",
    },
  },
});

  // Long

//skin long

// Vitamin c
mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694376960248","7637440266488"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694371520760","7637452128504"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694363918584","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","6906399129764"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","6906399129764"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Vitamin C",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7694371520760","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7637440266488","7694368080120"]
    },
  },
});

//Skin- None

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694376960248","7637440266488"],
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694371520760","7637452128504"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694363918584","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","6877087105188"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","7694374043896"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "None",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7694371520760","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694376960248","6973442228388"],
    },
  },
});

// Salicylic acid

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694376960248","7637440266488"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694371520760","7637452128504"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7637440266488","7637440266488"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","6877087105188"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","6877087105188"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Salicylic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7637452128504","7637452128504"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694371520760","6973442228388"]
    },
  },
});

// Retinol

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694376960248","7637440266488"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694371520760","7637452128504"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694363918584","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","6877027401892"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694371520760","6973677732004"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Retinol",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7694371520760","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694376960248","6973442228388"]
    },
  },
});

// Kojic Acid

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694376960248","7637440266488"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694383415544","7637473067256"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7696963600632","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","6877087105188"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
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
      id: ["7694379090168","7694374043896"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Kojic Acid",
      },
      {
        fact: "What are you concerned about?",
        operator: "equal",
        value: "Spots & Marks",
      },
    ],
  },
  event: {
    type: "product id",
    params: {
      id: ["7694379090168","7696963600632"]
    },
  },
});

mars_skin_engine_long.addRule({
  conditions: {
    all: [
      {
        fact: "Are you allergic to any of these ingredients?",
        operator: "equal",
        value: "Kojic Acid",
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
      id: ["7694376960248","6973442228388"]
    },
  },
});

//weightloss


  //2A
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },{
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "6679222288548"
      },
    },
  });

  //2G+ 4 Any
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'Stretch Marks on the skin',
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "6774754902180"
      },
    },
  });

  //2A+2G+4 any
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'Stretch Marks on the skin',
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "6774754902180"
      },
    },
  });

  
  //2B/2E
  mars_weightloss_engine.addRule({
      conditions: {
        all: [ 
          {        
            any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak bones/muscles',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Body Fatigue',
              }
            ]
          },
          {
            any : [
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Glucosamine"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Chondroitin"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Methylsulfonylmethane(MSM)"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"None"
              }
            ]
          }
        ]
      },
      event: {
        type: "product id",
        params: {
          id: "7716620992760"
        },
      },
    });

   //2C/2D Any
   mars_weightloss_engine.addRule({   
    conditions: {
      all: [ 
        {        
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "7661642285304"
      },
    },
  });
  
  //2C/2D None
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {        
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
          ]
        },
        {
          all : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "7716620992760"
      },
    },
  });

  //2F
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {        
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'Stress/Hormonal Imbalance',
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "7684225794296"
      },
    },
  });
  
  //2C/2D + 2B/2E + Any

  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak bones/muscles',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Body Fatigue',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "7716616175864",
      },
    },
  });
  
  //2A + 2C/D None
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          all : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "7716620992760",
      },
    },
  });
  
  //2A + 2C/D Any
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "7684225794296"
      },
    },
  });

  //2A+ 2C/2D +2B/2E+Any
  mars_weightloss_engine.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
            ]
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak bones/muscles',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Body Fatigue',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: "6679222288548"
      },
    },
  });


// weightloss long

  //2A
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },{
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["6679222288548","6674119065764"],
      },
    },
  });

  //2G+ 4 Any
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'Stretch Marks on the skin',
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["6774754902180","6766304428196"],
      },
    },
  });

  //2A+2G+4 any
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'Stretch Marks on the skin',
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["6774754902180","6774754902180"],
      },
    },
  });

  
  //2B/2E
  mars_weightloss_engine_long.addRule({
      conditions: {
        all: [ 
          {        
            any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak bones/muscles',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Body Fatigue',
              }
            ]
          },
          {
            any : [
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Glucosamine"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Chondroitin"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"Methylsulfonylmethane(MSM)"
              },
              {
                fact:'past_allergies_array',
                operator:'contains',
                value:"None"
              }
            ]
          }
        ]
      },
      event: {
        type: "product id",
        params: {
          id: ["7716620992760","7661642285304"],
        },
      },
    });

   //2C/2D Any
   mars_weightloss_engine_long.addRule({   
    conditions: {
      all: [ 
        {        
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7661642285304","7661642285304"],
      },
    },
  });
  
  //2C/2D None
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {        
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Knee/Shoulder/Joint Pain',
            }
          ]
        },
        {
          all : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7716620992760","7663879389432"],
      },
    },
  });

  //2F
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {        
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'Stress/Hormonal Imbalance',
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7684225794296","7684225794296"],
      },
    },
  });
  
  //2C/2D + 2B/2E + Any

  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak bones/muscles',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Body Fatigue',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7716616175864","7716616175864"],
      },
    },
  });
  
  //2A + 2C/D None
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          all : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7716620992760" ,"7716620992760"],
      },
    },
  });
  
  //2A + 2C/D Any
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Weak Joints',
              },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["7684225794296","7684225794296"],
      },
    },
  });

  //2A+ 2C/2D +2B/2E+Any
  mars_weightloss_engine_long.addRule({
    conditions: {
      all: [ 
        {
          fact: 'body_conditions_array',
          operator: 'contains', 
          value: 'OverWeight/Obese',
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak Joints',
            },
              {
                fact: 'body_conditions_array',
                operator: 'contains', 
                value: 'Knee/Shoulder/Joint Pain',
              }
            ]
        },
        {
          any:[
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Weak bones/muscles',
            },
            {
              fact: 'body_conditions_array',
              operator: 'contains', 
              value: 'Body Fatigue',
            }
          ]
        },
        {
          any : [
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Glucosamine"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Chondroitin"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"Methylsulfonylmethane(MSM)"
            },
            {
              fact:'past_allergies_array',
              operator:'contains',
              value:"None"
            }
          ]
        }
      ]
    },
    event: {
      type: "product id",
      params: {
        id: ["6679222288548","6679222288548"],
      },
    },
  });


  // Hair

   //1A+ 2 ANY+ 5 ANY
   mars_hair_engine.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Receding hairline",
        },
        {
          any: [
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Both regrowth & loss prevention",
            },
          ] 
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: "6673372414116",
      },
    },
  });
  
  
  //option 2
  
  // 1B+2A/B+5ANY
  mars_hair_engine.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Thinning at the crown",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            }
          ]
          
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: "6980107206820",
      },
    },
  });
  
  // 1B+2C+5ANY
  mars_hair_engine.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Thinning at the crown",
        },
        {
          fact: "What results are you looking for?",
          operator: "equal",
          value: "Both regrowth & loss prevention",
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: "6732124520612",
      },
    },
  });
  
  
  //option 3
  
  // 1C+2A/B+5A
  mars_hair_engine.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Overall hair loss/thinning",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            }
          ]
          
        },
        {
          fact: "Do you have any upcoming functions in the family in the next 60 days?",
          operator: "equal",
          value: "Yes",
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
  
  // 1C+2A/B+5B
  mars_hair_engine.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Overall hair loss/thinning",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            }
          ]
          
        },
        {
          fact: "Do you have any upcoming functions in the family in the next 60 days?",
          operator: "equal",
          value: "No",
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: "7728237347064"
      },
    },
  });
  
  //1C+2C+5ANY
  mars_hair_engine.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Overall hair loss/thinning",
        },
        {
          fact: "What results are you looking for?",
          operator: "equal",
          value: "Both regrowth & loss prevention",
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: "6920192950436"
      },
    },
  });
  

  //option 4
  
  //1D+2ANY+5ANY
  mars_hair_engine.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Receding + Overall thinning",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Both regrowth & loss prevention",
            },
          ]
          
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: "6920580530340"
      },
    },
  });
 
 
  // long

  //1A+ 2 ANY+ 5 ANY
  mars_hair_engine_long.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Receding hairline",
        },
        {
          any: [
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Both regrowth & loss prevention",
            },
          ] 
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: ["6673372414116", "6673372414116"],
      },
    },
  });
  
  
  //option 2
  
  // 1B+2A/B+5ANY
  mars_hair_engine_long.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Thinning at the crown",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            }
          ]
          
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: ["6980107206820", "6673372414116"],
      },
    },
  });
  
  // 1B+2C+5ANY
  mars_hair_engine_long.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Thinning at the crown",
        },
        {
          fact: "What results are you looking for?",
          operator: "equal",
          value: "Both regrowth & loss prevention",
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: ["6732124520612", "6673372414116"],
      },
    },
  });
  
  
  //option 3
  
  // 1C+2A/B+5A
  mars_hair_engine_long.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Overall hair loss/thinning",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            }
          ]
          
        },
        {
          fact: "Do you have any upcoming functions in the family in the next 60 days?",
          operator: "equal",
          value: "Yes",
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: ["6920580530340", "6782041817252"],
      },
    },
  });
  
  // 1C+2A/B+5B
  mars_hair_engine_long.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Overall hair loss/thinning",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            }
          ]
          
        },
        {
          fact: "Do you have any upcoming functions in the family in the next 60 days?",
          operator: "equal",
          value: "No",
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: ["7728237347064", "5805058850980"],
      },
    },
  });
  
  //1C+2C+5ANY
  mars_hair_engine_long.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Overall hair loss/thinning",
        },
        {
          fact: "What results are you looking for?",
          operator: "equal",
          value: "Both regrowth & loss prevention",
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: ["6920192950436", "6933632811172"],
      },
    },
  });
  

  //option 4
  
  //1D+2ANY+5ANY
  mars_hair_engine_long.addRule({
    conditions: {
      all: [
        {
          fact: "What best describes the current condition of your hair?",
          operator: "equal",
          value: "Receding + Overall thinning",
        },
        {
          any:[
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Regrowing your hair",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Preventing future hair loss",
            },
            {
              fact: "What results are you looking for?",
              operator: "equal",
              value: "Both regrowth & loss prevention",
            },
          ]
          
        },
        {
          any: [
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "No",
            },
            {
              fact: "Do you have any upcoming functions in the family in the next 60 days?",
              operator: "equal",
              value: "Yes",
            },
          ],
        },
      ],
    },
    event: {
      type: "product id",
      params: {
        id: ["6920580530340", "6782041817252"],
      },
    },
  });

  // Beard

  // 1A/C
  mars_beard_engine.addRule({
    conditions: {
      any:[
        {
          fact: "How is your beard condition currently?",
          operator: "equal",
          value: "Patchy beard",
        },
        {
          fact: "How is your beard condition currently?",
          operator: "equal",
          value: "Very less beard",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6791716405412",
      },
    },
  });

  //1B
  mars_beard_engine.addRule({
    conditions: {
      all:[
        {
          fact: "How is your beard condition currently?",
          operator: "equal",
          value: "No Beard",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6611416645796"
      },
    },
  });

  //1D
  mars_beard_engine.addRule({
    conditions: {
      all:[
        {
          fact: "How is your beard condition currently?",
          operator: "equal",
          value: "Excellent",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6741236973732"
      },
    },
  });

  // long

  // 1A
  mars_beard_engine_long.addRule({
    conditions: {
      all:[
        {
          fact: "What exactly are you looking for?",
          operator: "equal",
          value: "Beard Growth",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6980058677412","6791716405412"]
      },
    },
  });

  //1B
  mars_beard_engine_long.addRule({
    conditions: {
      all:[
        {
          fact: "What exactly are you looking for?",
          operator: "equal",
          value: "Beard Care",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6743341072548","6741236973732"]
      },
    },
  });


  // Performance

  // 3 OR 2 is 1 AND 4 is 1 or 3
  mars_performance_engine.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Every time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Every time",
            }
          ]
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6734347174052"
      },
    },
  })
  // 3 OR 2 is 1 AND 4 is 2
  mars_performance_engine.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Every time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Every time",
            }
          ]
        },
        {
          fact: "Do you have any existing or any history of Heart issues?",
          operator: "equal",
          value: "No",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6607101493412"
      },
    },
  })

  // 3 OR 2 is 2 AND 4 is 1 or 3
  mars_performance_engine.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Half of the time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Half of the time",
            }
          ]
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6734347174052"
      },
    },
  })
  // 3 OR 2 is 2 AND 4 is 2
  mars_performance_engine.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Half of the time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Half of the time",
            }
          ]
        },
        {
          fact: "Do you have any existing or any history of Heart issues?",
          operator: "equal",
          value: "No",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6718215651492"
      },
    },
  })

  // 3 and 2 is 3 AND 4 is any
  mars_performance_engine.addRule({
    conditions: {
      all:[
        {
          fact: "How often do you have trouble getting or keeping an erection during sex?",
          operator: "equal",
          value: "Occasionally",
        },
        {
          fact: "How often are you climaxing sooner than you would like during sex?",
          operator: "equal",
          value: "Occasionally",
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "No",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6718215651492"
      },
    },
  })

  // 3 is 4 and  2 is 3 or 4 AND 4 is any
  mars_performance_engine.addRule({
    conditions: {
      all:[
        {
          fact: "How often are you climaxing sooner than you would like during sex?",
          operator: "equal",
          value: "No issues with ejaculation",
        },
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Occasionally"
            },
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Rarely"
            }
          ]
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "No",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: "6718215651492"
      },
    },
  })

  //Long
  // 3 OR 2 is 1 AND 4 is 1 or 3
  mars_performance_engine_long.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Every time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Every time",
            }
          ]
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6734347174052","6718215651492"]
      },
    },
  })
  // 3 OR 2 is 1 AND 4 is 2
  mars_performance_engine_long.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Every time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Every time",
            }
          ]
        },
        {
          fact: "Do you have any existing or any history of Heart issues?",
          operator: "equal",
          value: "No",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6607101493412","6607101493412"]
      },
    },
  })

  // 3 OR 2 is 2 AND 4 is 1 or 3
  mars_performance_engine_long.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Half of the time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Half of the time",
            }
          ]
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6734347174052","6718215651492"]
      },
    },
  })
  // 3 OR 2 is 2 AND 4 is 2
  mars_performance_engine_long.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Half of the time",
            },
            {
              fact: "How often are you climaxing sooner than you would like during sex?",
              operator: "equal",
              value: "Half of the time",
            }
          ]
        },
        {
          fact: "Do you have any existing or any history of Heart issues?",
          operator: "equal",
          value: "No",
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6718215651492","6607101493412"]
      },
    },
  })

  // 3 and 2 is 3 AND 4 is any
  mars_performance_engine_long.addRule({
    conditions: {
      all:[
        {
          fact: "How often do you have trouble getting or keeping an erection during sex?",
          operator: "equal",
          value: "Occasionally",
        },
        {
          fact: "How often are you climaxing sooner than you would like during sex?",
          operator: "equal",
          value: "Occasionally",
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "No",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6718215651492","6734347174052"]
      },
    },
  })

  // 3 is 4 and  2 is 3 or 4 AND 4 is any
  mars_performance_engine_long.addRule({
    conditions: {
      all:[
        {
          any:[
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Occasionally"
            },
            {
              fact: "How often do you have trouble getting or keeping an erection during sex?",
              operator: "equal",
              value: "Rarely"
            }
          ]
        },
        {
          fact: "How often are you climaxing sooner than you would like during sex?",
          operator: "equal",
          value: "No issues with ejaculation",
        },
        {
          any:[
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Yes",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "Have high blood pressure, but don’t have any heart issues",
            },
            {
              fact: "Do you have any existing or any history of Heart issues?",
              operator: "equal",
              value: "No",
            }
          ]
        },
      ]  
    },
    event: {
      type: "product id",
      params: {
        id: ["6718215651492","6718215651492"]
      },
    },
  })


export const getProductIdFromEngine = async (stateObj) => {
  var productId = "";
  const assessment_type = stateObj["assessment_type"];
  const category = stateObj["Select category for consultation"];
  if (process.env.REACT_APP_BRAND == "Saturn") {
    if (assessment_type == "30 sec") {
      if (category == "skin") {
        let facts = {
          "Are you allergic to any of these ingredients?":
            stateObj["Are you allergic to any of these ingredients?"],
          "What are you concerned about?":
            stateObj["What are you concerned about?"],
        };
        await skin_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "hair") {
        let facts = {
          "What best describes the current condition of your hair?":
            stateObj["What best describes the current condition of your hair?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 30 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 30 days?"
            ],
        };
        await hair_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "weightloss") {
        const body_conditions_object = stateObj["What best describes your current body condition?"];
        const past_allergies_object = stateObj["Have you ever had allergic reactions to any of the components below?"];
        const body_conditions = Object.keys(body_conditions_object).filter((x) => body_conditions_object[x] == true)
        const past_allergies = Object.keys(past_allergies_object).filter((x) => past_allergies_object[x] == true)
        let facts = {
          body_conditions_array : body_conditions,
          past_allergies_array : past_allergies
        };
        await weightloss_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      return productId;
    } else {
      if (category == "skin") {
        let facts = {
          "Are you allergic to any of these ingredients?":
            stateObj["Are you allergic to any of these ingredients?"],
          "What are you concerned about?":
            stateObj["What are you concerned about?"],
        };
        await skin_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "weightloss") {
        const body_conditions_object = stateObj["What best describes your current body condition?"];
        const past_allergies_object = stateObj["Have you ever had allergic reactions to any of the components below?"];
        const body_conditions = Object.keys(body_conditions_object).filter((x) => body_conditions_object[x] == true)
        const past_allergies = Object.keys(past_allergies_object).filter((x) => past_allergies_object[x] == true)
        let facts = {
          body_conditions_array : body_conditions,
          past_allergies_array : past_allergies
        };
        await weightloss_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "hair") {
        let facts = {
          "What best describes the current condition of your hair?":
            stateObj["What best describes the current condition of your hair?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 60 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 60 days?"
            ],
        };
        await hair_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      return productId;
    }
  } else {
    if (assessment_type == "30 sec") {
      if (category == "skin") {
        let facts = {
          "Are you allergic to any of these ingredients?":
            stateObj["Are you allergic to any of these ingredients?"],
          "What are you concerned about?":
            stateObj["What are you concerned about?"],
        };
        await mars_skin_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "hair") {
        let facts = {
          "What best describes the current condition of your hair?":
            stateObj["What best describes the current condition of your hair?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 60 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 60 days?"
            ],
        };
        await mars_hair_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "weightloss") {
        const body_conditions_object = stateObj["What best describes your current body condition?"];
        const past_allergies_object = stateObj["Have you ever had allergic reactions to any of the components below?"];
        const body_conditions = Object.keys(body_conditions_object).filter((x) => body_conditions_object[x] == true)
        const past_allergies = Object.keys(past_allergies_object).filter((x) => past_allergies_object[x] == true)
        let facts = {
          body_conditions_array : body_conditions,
          past_allergies_array : past_allergies
        };
        await mars_weightloss_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "beard") {
        let facts = {
          "How is your beard condition currently?":
            stateObj["How is your beard condition currently?"]
        };
        await mars_beard_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "performance") {
        let facts = {
          "How often do you have trouble getting or keeping an erection during sex?":
            stateObj["How often do you have trouble getting or keeping an erection during sex?"],
          "How often are you climaxing sooner than you would like during sex?":
            stateObj["How often are you climaxing sooner than you would like during sex?"],
          "Do you have any existing or any history of Heart issues?":
            stateObj["Do you have any existing or any history of Heart issues?"],
        };
        await mars_performance_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      return productId;
    } else {
      if (category == "skin") {
        let facts = {
          "Are you allergic to any of these ingredients?":
            stateObj["Are you allergic to any of these ingredients?"],
          "What are you concerned about?":
            stateObj["What are you concerned about?"],
        };
        await mars_skin_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "weightloss") {
        const body_conditions_object = stateObj["What best describes your current body condition?"];
        const past_allergies_object = stateObj["Have you ever had allergic reactions to any of the components below?"];
        const body_conditions = Object.keys(body_conditions_object).filter((x) => body_conditions_object[x] == true)
        const past_allergies = Object.keys(past_allergies_object).filter((x) => past_allergies_object[x] == true)
        let facts = {
          body_conditions_array : body_conditions,
          past_allergies_array : past_allergies
        };
        await mars_weightloss_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "hair") {
        let facts = {
          "What best describes the current condition of your hair?":
            stateObj["What best describes the current condition of your hair?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 60 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 60 days?"
            ],
        };
        await mars_hair_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "beard") {
        let facts = {
          "What exactly are you looking for?":
            stateObj["What exactly are you looking for?"]
        };
        await mars_beard_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "performance") {
        let facts = {
          "How often do you have trouble getting or keeping an erection during sex?":
            stateObj["How often do you have trouble getting or keeping an erection during sex?"],
          "How often are you climaxing sooner than you would like during sex?":
            stateObj["How often are you climaxing sooner than you would like during sex?"],
          "Do you have any existing or any history of Heart issues?":
            stateObj["Do you have any existing or any history of Heart issues?"],
        };
        await mars_performance_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      return productId;
    }
  }
};
