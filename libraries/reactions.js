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
        { type:0, protons:1, neutrons:0, id:1, shift:0},
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
        { type:0, protons:12, neutrons:12, id:12},
        { type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:13, neutrons:13, id:13},
        {protons:1, neutrons:1, id:0, shift:0}
      ],
      subProduct: []
    },
    {//Si
      reagents: [
        {type:0, protons:8, neutrons:8, id:8},
        {type:0, protons:8, neutrons:8, id:8}
      ],
      product: [
        {protons:14, neutrons:14, id:14},
        {protons:2, neutrons:2, id:2, shift:0}
      ],
      subProduct: []
    },
    {//P
      reagents: [
        {type:0, protons:8, neutrons:8, id:8},
        {type:0, protons:8, neutrons:8, id:8}
      ],
      product: [
        {protons:16, neutrons:15, id:15},
        {protons:1, neutrons:0, id:1, shift:0}
      ],
      subProduct: []
    },
    {//S
      reagents: [
        {type:0, protons:8, neutrons:8, id:8},
        {type:0, protons:8, neutrons:8, id:8}
      ],
      product: [
        {protons:16, neutrons:16, id:16}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Cl
      reagents: [
        {type:0, protons:16, neutrons:15, id:15},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:18, neutrons:17, id:17}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Ar
      reagents: [
        {type:0, protons:16, neutrons:16, id:16},
        {type:0, protons:2, neutrons:2, id:2, shift:0}
      ],
      product: [
        {protons:18, neutrons:18, id:18}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//K
      reagents: [
        {type:0, protons:18, neutrons:17, id:17},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:20, neutrons:19, id:19}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Ca
      reagents: [
        {type:0, protons:18, neutrons:18, id:18},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:20, neutrons:20, id:20}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Sc
      reagents: [
        {type:0, protons:20, neutrons:19, id:19},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:22, neutrons:21, id:21}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Ti
      reagents: [
        {type:0, protons:20, neutrons:20, id:20},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:22, neutrons:22, id:22}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//V
      reagents: [
        {type:0, protons:24, neutrons:24, id:24},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:28, neutrons:23, id:23}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Cr
      reagents: [
        {type:0, protons:22, neutrons:22, id:22},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:24, neutrons:24, id:24}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Mn
      reagents: [
        {type:0, protons:28, neutrons:23, id:23},
        {type:0, protons:2, neutrons:2, id:2}
      ],
      product: [
        {protons:28, neutrons:25, id:25}
      ],
      subProduct: [
        {type:3}
      ]
    },
    {//Fe
      reagents: [
        {type:0, protons:24, neutrons:24, id:24},
        {type:0, protons:2, neutrons:2, id:2}
      ],
  
      product: [
        { protons:26, neutrons:26, id:26, shift:null}
      ],
  
      subProduct: [
        {type:3}
      ]
    },
  ]