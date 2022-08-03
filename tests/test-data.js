let tests = {
  test1: {
    expenditures: {
      three_months: 550,
      six_months: 6000
    },

    entry: {
      target: 500,
      walmart: 500,
      amazon: 500,
      costco: 500,
      online_grocery: 6000,
      in_person_grocery: 7000,
      travel: 400,
      dining: 1200,
      hotel: 350,
      transit: 200,
      drugstores: 200,
      gas: 1200,
      home_improvement: 400,
      fitness_clubs: 1200,
      live_entertainment: 450,
      vivid_seats: 0,
      department_stores: 200,
      online_shopping: 240,
      streaming: 250,
      other: 400
    },

    ans: {
      "Chase Freedom Unlimited": 799.6,
      "Chase Freedom Flex": 762.9,
      "Chase Sapphire Preferred": 356.4, 
      "Citi Custom Cash": 456.9,
      "Citi Double Cash": 433.8,
      "Wells Fargo Active Cash": 433.8,
      "American Express Blue Cash Preferred": 462.4,
      "American Express Blue Cash Everyday": 350.9,
      "Bank Of America Customized Cash": 328.9,
      "Discover It Cash Back": 433.8,
      "Capital One SavorOne Rewards": 514.9,
      "Capital One Quicksilver Rewards": 325.35,
      "Capital One QuicksilverOne Rewards": 286.35
    }
  },

  test2: {
    expenditures: { 
      three_months: 250, 
      six_months: 7000 
    },
    
    entry: {
      target: 0,
      walmart: 5500,
      amazon: 1500,
      costco: 800,
      online_grocery: 8000,
      in_person_grocery: 3000,
      travel: 0,
      dining: 120,
      hotel: 0,
      transit: 500,
      drugstores: 240,
      gas: 120,
      home_improvement: 40,
      fitness_clubs: 0,
      live_entertainment: 0,
      vivid_seats: 0,
      department_stores: 1200,
      online_shopping: 2400,
      streaming: 100,
      other: 700
    },
    ans: {
      "Chase Freedom Unlimited": 771.2,
      "Chase Freedom Flex": 709.4,
      "Chase Sapphire Preferred": 331.6 , 
      "Citi Custom Cash": 482.2,
      "Citi Double Cash": 484.4,
      "Wells Fargo Active Cash": 484.4,
      "American Express Blue Cash Preferred": 464.6,
      "American Express Blue Cash Everyday": 375.4,
      "Bank Of America Customized Cash": 366.2,
      "Discover It Cash Back": 484.4,
      "Capital One SavorOne Rewards": 466.59,
      "Capital One Quicksilver Rewards": 363.3,
      "Capital One QuicksilverOne Rewards": 324.3
    }
  },

  test3: {
    expenditures: { 
      three_months: 500, 
      six_months: 1000 
    },
    entry: {
      target: 0,
      walmart: 0,
      amazon: 1500,
      costco: 7500,
      online_grocery: 6000,
      in_person_grocery: 14000,
      travel: 8400,
      dining: 200,
      hotel: 6000,
      transit: 700,
      drugstores: 240,
      gas: 80,
      home_improvement: 2400,
      fitness_clubs: 400,
      live_entertainment: 0,
      vivid_seats: 1000,
      department_stores: 0,
      online_shopping: 300,
      streaming: 250,
      other: 2400
    },
    ans: {
      "Chase Freedom Unlimited": 1725.65,
      "Chase Freedom Flex": 1606.5,
      "Chase Sapphire Preferred": 1199.2,
      "Citi Custom Cash": 753.7,
      "Citi Double Cash": 1027.4, 
      "Wells Fargo Active Cash": 1027.4,
      "American Express Blue Cash Preferred": 746.8,
      "American Express Blue Cash Everyday": 634.5,
      "Bank Of America Customized Cash": 713.7,
      "Discover It Cash Back": 1027.4,
      "Capital One SavorOne Rewards": 992.69,
      "Capital One Quicksilver Rewards": 770.55,
      "Capital One QuicksilverOne Rewards": 731.55
    }
  },
  test4: {
    expenditures: { three_months: 4000, six_months: 7500 },

    entry : {
      target: 5000,
      walmart: 0,
      amazon: 0,
      costco: 0,
      online_grocery: 13000,
      in_person_grocery: 7000,
      travel: 0,
      dining: 300,
      hotel: 0,
      transit: 0,
      drugstores: 1200,
      gas: 1500,
      home_improvement: 0,
      fitness_clubs: 700,
      live_entertainment: 0,
      vivid_seats: 30,
      department_stores: 500,
      online_shopping: 245,
      streaming: 0,
      other: 3400
    },

    ans: {
      "Chase Freedom Unlimited": 935.62,
      "Chase Freedom Flex": 838.75,
      "Chase Sapphire Preferred": 499.75,
      "Citi Custom Cash": 568.75,
      "Citi Double Cash": 657.5, 
      "Wells Fargo Active Cash": 657.5,
      "American Express Blue Cash Preferred": 563.75,
      "American Express Blue Cash Everyday": 468.75,
      "Bank Of America Customized Cash" : 443.75,
      "Discover It Cash Back": 657.5,
      "Capital One SavorOne Rewards": 736.85,
      "Capital One Quicksilver Rewards": 493.12,
      "Capital One QuicksilverOne Rewards": 454.12
    }
    
  }
};

export {tests};