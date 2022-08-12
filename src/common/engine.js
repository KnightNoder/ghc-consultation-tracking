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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
      id: "7730670010590",
    },
  },
});

//option 4

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
      id: "7730670010590",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
      id: "7730670010590",
    },
  },
});

hair_engine.addRule({
  conditions: {
    all: [
      {
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "What best describes your current hair condition?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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
        fact: "Are you allergic to any of the ingredients below?",
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

// weightloss_engine.addRule({
//   conditions: {
//     all: [
//       {
//         fact: "What best describes your current body condition?",
//         operator: "equal",
//         value: "OverWeight/Obese",
//       },
//     ],
//   },
//   event: {
//     type: "product id",
//     params: {
//       id: "7634556059870",
//     },
//   },
// });

// weightloss_engine.addRule({
//   conditions: {
//     all: [
//       {
//         fact: "BMI",
//         operator: "lessThanInclusive",
//         value: "25",
//       },
//     ],
//   },
//   event: {
//     type: "product id",
//     params: {
//       id: "7634556059870",
//     },
//   },
// });

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
      id: ["7634556059870", "7679735759070"],
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
      id: ["7634556059870", "7679735759070"],
    },
  },
});


// Lon

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
        value: "Spots & Marks",
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
        value: "Spots & Marks",
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
        value: "Spots & Marks",
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
        value: "Spots & Marks",
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
        value: "Spots & Marks",
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
      id: ["7602721095902", "7530240245982"],
    },
  },
});

// Mars recommendations

// Vitamin C
mars_hair_engine.addRule({
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
      id: "7637440266488",
    },
  },
});

mars_hair_engine.addRule({
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
      id: "7524810391800",
    },
  },
});

mars_hair_engine.addRule({
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
      id: "6826093478052",
    },
  },
});

mars_hair_engine.addRule({
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
      id: "6825877635236",
    },
  },
});

mars_hair_engine.addRule({
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
      id: "7637452128504",
    },
  },
});

mars_hair_engine.addRule({
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
      id: "6826093478052",
    },
  },
});

mars_hair_engine.addRule({
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
      id: "7516963406072",
    },
  },
});

//Skin- None

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

// Salicylic acid

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

// Retinol

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

// Kojic Acid

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

// Niacinamide

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

mars_hair_engine.addRule({
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

export const getProductIdFromEngine = async (stateObj) => {
  console.log('in engine');
  var productId = "";
  const assessment_type = stateObj["assessment_type"];
  const category = stateObj["Select category for consultation"];
  if (process.env.REACT_APP_BRAND == "Saturn") {
    if (assessment_type == "30 sec") {
      if (category == "skin") {
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
      if (category == "hair") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
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
        // const answer_one =
        //   stateObj["What best describes your current body condition?"];
        // const answer_two =
        //   stateObj[
        //     "Do you have any past allergic reactions to any of the below components?"
        //   ];
        //   const body_conditions = Object.keys(answer_one).filter((x) => answer_one(x) == true);
        //   const past_allergies = Object.keys(answer_two).filter((x) => answer_two(x) == true);
        //   console.log(body_conditions,'body conditions');
        //   console.log(past_allergies,'past allergies');
        //   let facts = {
        //     "What best describes your current body condition?": body_conditions,
        //     "Do you have any past allergic reactions to any of the below components?": past_allergies 
        //   }
        // await weightloss_engine.run(facts).then(({ events }) => {
        //   events.map((event) => {
        //     productId = event.params.id;
        //   });
        // });
      }
      return productId;
    } else {
      if (category == "skin") {
        let facts = {
          "Are you allergic to any of the ingredients below?":
            stateObj["Are you allergic to any of the ingredients below?"],
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
        const question_one =
          stateObj["What best describes your current body condition?"];
        const question_two =
          stateObj[
            "Do you have any past allergic reactions to any of the below components?"
          ];
        
        await weightloss_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "hair") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 30 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 30 days?"
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
      if (category == "hair") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
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
        const weight = parseInt(stateObj["Weight"]);
        const height = parseInt(stateObj["Height"]);
        const bmi_value = (weight * 10000) / (height * height);
        let facts = {
          BMI: parseInt(bmi_value),
        };
        await weightloss_engine.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "beard") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
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
      if (category == "performance") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
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
      return productId;
    } else {
      if (category == "skin") {
        let facts = {
          "Are you allergic to any of the ingredients below?":
            stateObj["Are you allergic to any of the ingredients below?"],
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
        const weight = parseInt(stateObj["Weight"]);
        const height = parseInt(stateObj["Height"]);
        const bmi_value = (weight * 10000) / (height * height);
        let facts = {
          BMI: parseInt(bmi_value),
        };
        await weightloss_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "hair") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 30 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 30 days?"
            ],
        };
        await hair_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "beard") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 30 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 30 days?"
            ],
        };
        await hair_engine_long.run(facts).then(({ events }) => {
          events.map((event) => {
            productId = event.params.id;
          });
        });
      }
      if (category == "performance") {
        let facts = {
          "What best describes your current hair condition?":
            stateObj["What best describes your current hair condition?"],
          "What results are you looking for?":
            stateObj["What results are you looking for?"],
          "Do you have any upcoming functions in the family in the next 30 days?":
            stateObj[
              "Do you have any upcoming functions in the family in the next 30 days?"
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
  }
};
