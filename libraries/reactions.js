var reactions = [
    {//deiterium
      reagents: [
        { type:0, protons:1, neutrons:0, id:1},
        { type:0, protons:1, neutrons:0, id:1}
      ],
  
      product: [
        {protons:1, neutrons:1, id:0}
      ],
  
      subProduct: [
        { type:1 },
        { type:2 },
      ]
    },
    {},//H
    {//He
      reagents: [
        { type:0, protons:2, neutrons:1, id:2},
        { type:0, protons:2, neutrons:1, id:2}
      ],
  
      product: [
        { protons:2, neutrons:2, id:2, shift:null},
        { protons:1, neutrons:0, id:1, shift:0},
        { protons:1, neutrons:0, id:1, shift:1}
      ],
      subProduct: []
    },
    {//Li
      reagents: [
        { type:0, protons:4, neutrons:3, id:4},
        { type:0, protons:1, neutrons:0, id:28, special:'blue'},
      ],
      product: [
        { type:0, protons:4, neutrons:3, id:3},
      ],
      subProduct: [
          {type:2}
      ]
    },
    {//Be
      reagents: [
        { type:0, protons:2, neutrons:1, id:2},
        { type:0, protons:2, neutrons:2, id:2},
      ],
      product: [
        { type:0, protons:4, neutrons:3, id:4},
      ],
      subProduct: [
          {type:3}
      ]
    },
    {//B
        reagents: [
            { type:0, protons:4, neutrons:3, id:4},
            { type:0, protons:1, neutrons:0, id:1},
        ],
        product: [
            { type:0, protons:4, neutrons:4, id:5},
        ],
        subProduct: [
            {type:3}
        ]
    },
    {//C
      reagents: [
        { type:0, protons:2, neutrons:2, id:2, shift:null},
        { type:0, protons:2, neutrons:2, id:2},
        { type:0, protons:2, neutrons:2, id:2},
      ],
      product: [
        { type:0, protons:6, neutrons:6, id:6}, 
      ],
      subProduct: [
          {type:3}
      ]
    },
    {//N
      reagents: [
        { type:0, protons:7, neutrons:6, id:6},
        { type:0, protons:1, neutrons:0, id:1},
      ],
      product: [
        { type:0, protons:7, neutrons:7, id:7}
      ],
      subProduct: [
          {type:3}
      ]
    },
    {//O
      reagents: [
        { type:0, protons:7, neutrons:7, id:7},
        { type:0, protons:1, neutrons:0, id:1},
      ],
      product: [
        { type:0, protons:8, neutrons:7, id:8},
      ],
      subProduct: [
          {type:3}
      ]
    },
    {//F
      reagents: [
        { type:0, protons:10, neutrons:7, id:8},
        { type:0, protons:1, neutrons:0, id:27},
      ],
      product: [
        { type:0, protons:9, neutrons:9, id:9},
      ],
      subProduct: [
          {type:3}
      ]
    },
    {//Ne
      reagents: [
        { type:0, protons:2, neutrons:2, id:2},
        { type:0, protons:8, neutrons:8, id:8},
      ],
      product: [
        { type:0, protons:10, neutrons:10, id:10},
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Na
      reagents: [
        { type:0, protons:6, neutrons:6, id:6},
        { type:0, protons:6, neutrons:6, id:6},
      ],
      product: [
        { type:0, protons:12, neutrons:11, id:11},
        { type:0, protons:1, neutrons:0, id:1},
      ],
      subProduct: [

      ]
    },
    {//Mg
      reagents: [
        { type:0, protons:10, neutrons:10, id:10},
        { type:0, protons:2, neutrons:2, id:2},
      ],
      product: [
        { type:0, protons:12, neutrons:12, id:12}, 
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Al
      reagents: [

      ],
      product: [
          
      ],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [],
      product: [],
      subProduct: []
    },
    {
      reagents: [
        { type:0, protons:24, neutrons:24, id:24},
        { type:0, protons:2, neutrons:2, id:2}
      ],
  
      product: [
        { protons:26, neutrons:26, id:26, shift:null}
      ],
  
      subProduct: [
        {type:3}
      ]
    },
  ]