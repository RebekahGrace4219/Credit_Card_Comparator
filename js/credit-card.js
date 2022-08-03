// Calculate Cash Back for the Chase Freedom Unlimited
function chase_freedom_unlimited(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Chase Freedom Unlimited",
    bonus: 0
  };

  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures.three_months >= 500) {
    result_obj.bonus = 200;
  }

  //5% back on up to 12000 grocery purchases for the first year
  let grocery = Math.min(entry.in_person_grocery + entry.online_grocery, 12000);
  let grocery_leftover = 0;
  if (entry.in_person_grocery + entry.online_grocery > 12000) {
    grocery_leftover = entry.in_person_grocery + entry.online_grocery - 12000;
  }
  result_obj.cash_back =
    result_obj.cash_back + 0.05 * grocery + 0.015 * grocery_leftover;

  //5% back on travel as defined by chase
  result_obj.cash_back =
    result_obj.cash_back + 0.05 * (entry.travel + entry.hotel + entry.transit);

  //3% back on dining and drugstores
  result_obj.cash_back =
    result_obj.cash_back + 0.03 * entry.dining + 0.03 * entry.drugstores;

  //1.5% back on everything else
  let add_value = 0;
  let array = [
    "in_person_grocery",
    "online_grocery",
    "travel",
    "dining",
    "hotel",
    "transit",
    "drugstores"
  ];

  for (let key in entry) {
    if (!array.includes(key)) {
      add_value += entry[key] * 0.015;
    }
  }

  result_obj.cash_back = result_obj.cash_back + add_value;

  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

//Calculate cash back for the Chase Freedom Flex Card
function chase_freedom_flex(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Chase Freedom Flex",
    bonus: 0
  };

  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures.three_months >= 500) {
    result_obj.bonus = 200;
  }

  //5% back on up to 12000 grocery purchases for the first year
  let grocery = Math.min(entry.in_person_grocery + entry.online_grocery, 12000);
  let grocery_leftover = 0;
  if (entry.in_person_grocery + entry.online_grocery > 12000) {
    grocery_leftover = entry.in_person_grocery + entry.online_grocery - 12000;
  }
  result_obj.cash_back =
    result_obj.cash_back + 0.05 * grocery + 0.01 * grocery_leftover;

  //5% back on travel as defined by Chase
  result_obj.cash_back =
    result_obj.cash_back + 0.05 * (entry.travel + entry.hotel + entry.transit);

  //3% back on dining and drugstores
  result_obj.cash_back =
    result_obj.cash_back + 0.03 * (entry.dining + entry.drugstores);

  //1% back on everything else
  let add_value = 0;
  let array = [
    "in_person_grocery",
    "online_grocery",
    "travel",
    "dining",
    "hotel",
    "transit",
    "drugstores"
  ];
  for (let key in entry) {
    if (!array.includes(key)) {
      add_value += entry[key] * 0.01;
    }
  }
  result_obj.cash_back = result_obj.cash_back + add_value;

  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

// Calculate Cash back for Chase Sapphire Preferred
function chase_sapphire_preferred(expenditures, entry) {
  // $95 Annual Fee
  let result_obj = {
    cash_back: -95,
    name: "Chase Sapphire Preferred",
    bonus: 0
  };

  // Cash back bonus of $600 for $4000 spent in the first three months
  if (expenditures.three_months >= 4000) {
    result_obj.bonus = 600;
  }

  // $50 off hotels and %5 back outside the 50
  let leftover_hotel = 0;
  if (entry.hotel > 50){
    leftover_hotel = entry.hotel - 50;
  }
  result_obj.cash_back = result_obj.cash_back + Math.min(entry.hotel, 50) + 0.05*leftover_hotel;
  
  //5% back on travel + transit
  result_obj.cash_back = result_obj.cash_back + 0.05 * (entry.travel + entry.transit);

  //3% back on dining, online grocery, and streaming
  result_obj.cash_back = result_obj.cash_back + 0.03 * (entry.dining + entry.online_grocery+entry.streaming);

  //1% everything else
  let add_value = 0;
  let array = [
    "hotel",
    "travel",
    "transit",
    "dining",
    "online_grocery",
    "streaming"
  ];
  for (let key in entry) {
    if (!array.includes(key)) {
      add_value += entry[key] * 0.01;
    }
  }

  result_obj.cash_back = result_obj.cash_back + add_value;
  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

// Calculate cash back for the Citi Custom Cash Card
function citi_custom_cash(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Citi Custom Cash",
    bonus: 0
  };

  // Cash back bonus of $200 for $750 spent in the first three months
  if (expenditures.three_months >= 750) {
    result_obj.bonus = 200;
  }

  //Caculate the total spending on the card
  let total = 0;
  for (let key in entry) {
    total += entry[key];
  }

  //Calculate the max spending category within the acceptable types
  //Restaurants, gas stations, grocery stores, select travel, select transit, select streaming services, drugstores, home improvement stores, fitness clubs, live entertainment
  let types = [
    "dining",
    "drugstores",
    "transit",
    "streaming",
    "gas",
    "home_improvement",
    "fitness_clubs",
    "live_entertainment"
  ];
  let max = 0;
  for (let key in types) {
    if (max < entry[key]) {
      max = entry[key];
    }
  }

  //Some citi categories are actually multiple categories stuck together
  max = Math.max(entry["travel"] + entry["hotel"], max);
  max = Math.max(entry["in_person_grocery"] + entry["online_grocery"], max);

  //Card benefits max 5% out at $6000 a year
  if (max > 6000) {
    max = 6000;
  }

  result_obj.cash_back =
    result_obj.cash_back + 0.01 * (total - max) + max * 0.05;

  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

//Calculate Cash back for the citi double cash
function citi_double_cash(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Citi Double Cash",
    bonus: 0
  };

  // 2% everything on the first year
  let add_value = 0;
  for (let key in entry) {
    add_value += entry[key] * 0.02;
  }

  result_obj.cash_back = result_obj.cash_back + add_value;

  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

// Calculate Wells Fargo Active Cash Cash-Back
function wells_fargo_active_cash(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Wells Fargo Active Cash",
    bonus: 0
  };

  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures.three_months >= 1000) {
    result_obj.bonus =  200;
  }

  //2% every dollar spent card
  let add_value = 0;
  for (let key in entry) {
    add_value += entry[key] * 0.02;
  }

  result_obj.cash_back = result_obj.cash_back + add_value;
  
  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

// American Express Blue Cash Preferred Cash Back
function american_express_blue_cash_preferred(expenditures, entry) {
  // $95 Annual Fee
  let result_obj = {
    cash_back: -95,
    name: "American Express Blue Cash Preferred", 
    bonus: 0
  };

  // Cash back bonus of $350 for $3000 spent in the first three months
  if (expenditures.six_months >= 3000) {
    result_obj.bonus + 350;
  }

  //6% back on up to 6000 grocery purchases for the first year
  let grocery = entry.in_person_grocery + entry.online_grocery;
  let grocery_leftover = 0;
  if (grocery > 6000) {
    grocery_leftover = grocery - 6000;
    grocery = 6000;
  }

  result_obj.cash_back =
    result_obj.cash_back + 0.06 * grocery + 0.01 * grocery_leftover;

  //6% back on streaming
  result_obj.cash_back = result_obj.cash_back + 0.06 * entry.streaming;

  //3% back on transit
  result_obj.cash_back = result_obj.cash_back + 0.03 * entry.transit;

  //3% back on gas
  result_obj.cash_back = result_obj.cash_back + 0.03 * entry.gas;

  // 1% back on everything else
  let add_value = 0;
  let already_counted = [
    "in_person_grocery",
    "online_grocery",
    "streaming",
    "transit",
    "gas"
  ];

  for (let key in entry) {
    if (!already_counted.includes(key)) {
      add_value += 0.01 * entry[key];
    }
  }

  result_obj.cash_back = result_obj.cash_back + add_value;
  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

// Calculate Cash Back American Express Blue Cash Everyday
function american_express_blue_cash_everyday(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "American Express Blue Cash Everyday", 
    bonus: 0
  };

  // Cash back bonus of $200 for $2000 spent in the first six months
  if (expenditures.six_months >= 2000) {
    result_obj.bonus = 250;
  }

  //3% back on up to 6000 grocery purchases for the first year, 1% on the rest
  let grocery = entry.in_person_grocery + entry.online_grocery; 
  let grocery_leftover = 0;
  
  if (grocery > 6000){
    grocery_leftover = grocery - 6000;
    grocery = 6000;
  }
  
  result_obj.cash_back = result_obj.cash_back + 0.03 * grocery+0.01*grocery_leftover;
  
  //2% back on gas
  result_obj.cash_back = result_obj.cash_back + 0.02 * entry.gas;

  //2% back on department stores
  result_obj.cash_back = result_obj.cash_back + 0.02 * entry.department_stores;

  //1% back on everything else
  let add_value = 0;
  let array = [
    "in_person_grocery",
    "online_grocery",
    "gas",
    "department_stores"
  ];
  for (let key in entry) {
    if (!array.includes(key)) {
      add_value += entry[key] * 0.01;
    }
  }
  result_obj.cash_back = result_obj.cash_back + add_value;

  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

//Calculate Bank Of America Custom Cash Cash Back
function bank_of_america_customized_cash(expenditures, entry) {
  let result_obj = { 
    cash_back: 0, 
    name: "Bank Of America Customized Cash", 
    bonus: 0
  };
  
  // Cash back bonus of $200 for $1000 spent in the first 90 days
  if (expenditures.three_months >= 1000) {
    result_obj.bonus = 200;
  }
  
  // 3% back on highest category 
  // travel + hotel + transit combine to one section
  let array = [
    "gas",
    "online_shopping",
    "dining",
    "drugstores",
    "home_improvement"
  ];
  let max_category_three = entry.travel + entry.hotel + entry.transit;

  for (let key in entry) {
    if(array.includes(key) && entry[key] > max_category_three){
      max_category_three = entry[key];
    }
  }

  // 2% back on all of grocery and wholesale
  let two_percent_value = 0;
  array = ["in_person_grocery", "online_grocery", "costco"];
  for (let key in entry) {
    if (array.includes(key)){
      two_percent_value = two_percent_value + entry[key];
    }
  }

  // Calculate the total out of all spending
  let total = 0;
  for(let key in entry){
    total += entry[key]
  }

  
  //Max on $10,000 for the three percent back and the 2 percent back 
  
  // Fill as much with 3% as you can
  let leftover_value = 0;
  if (max_category_three >= 10000){
    // Add 10, 000 in the 3% category, and everything else is one percent
    result_obj.cash_back = result_obj.cash_back + 0.03*10000 + 0.01*(total-10000);
  }
  else if(max_category_three + two_percent_value > 10000){
    //To get here, max category three does not hit the cut off, but the two percent categories split between 0.02 and 0.01 (for that pass over 10,000)
    let actual_two_values = 10000-max_category_three;                          //The two percent values use up all the space after 3% meets the 10,000 limit
    result_obj.cash_back = result_obj.cash_back + 0.03*max_category_three + 0.02*actual_two_values + 0.01*(total - 10000);
}
  else{
    //Use full amount of 3% and 2%, because together they come under the limit. Use 1% on everything spent not including the covered categories
    result_obj.cash_back = result_obj.cash_back + 0.03*max_category_three + 0.02*two_percent_value + 0.01*(total - max_category_three - two_percent_value);
  }
  
  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

//Calculate Discover It Cash Back Card's Cash Back
function discover_it_cash_back(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Discover It Cash Back", 
    bonys: 0
  };

  // 2% everything on the first year
  let add_value = 0;
  for (let key in entry) {
    add_value += entry[key] * 0.02;
  }

  result_obj.cash_back = result_obj.cash_back + add_value;
  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  

  return result_obj;
}

//Calculate the cash back for a SavorOne Rewards Cards
function capital_one_savor_one_rewards(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Capital One SavorOne Rewards",
    bonus: 0
  };

  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures.three_months >= 500) {
     result_obj.bonus =  200;
  }

  let arr = ["dining", "live_entertainment", "streaming", "in_person_grocery", "online_grocery"];
  let add_value = 0;

  // Go through every entry
  for (let key in entry) {
    if (arr.includes(key)) {
      // 3% back on the select categories in arr
      add_value += 0.03 * entry[key];
    } else if (key == "vivid_seats") {
      // 8% back on this one specific entertainment website
      add_value += 0.08 * entry[key];
    } else {
      // 1% back everything else
      add_value += 0.01 * entry[key];
    }
  }

  result_obj.cash_back = result_obj.cash_back + add_value;
  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}

// Calculate Cash Back Quicksilver Rewards
function capital_one_quicksilver_rewards(expenditures, entry) {
  let result_obj = {
    cash_back: 0,
    name: "Capital One Quicksilver Rewards", 
    bonus: 0
  };

  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures.three_months >= 500) {
      result_obj.bonus = 200;
  }

  // 1.5% on everything
  let add_value = 0;
  for (let key in entry) {
    add_value += entry[key] * 0.015;
  }

  result_obj.cash_back = result_obj.cash_back + add_value;

  
  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  
  return result_obj;
}


//Calculate Cash Back for QuicksilverOne Rewards
function capital_one_quicksilver_one_rewards(expenditures, entry) {
  // 39$ Annual Fee
  let result_obj = {
    cash_back: -39,
    name: "Capital One QuicksilverOne Rewards", 
    bonus: 0
  };

  // 1.5% on everything
  let add_value = 0;
  for (let key in entry) {
    add_value += entry[key] * 0.015;
  }

  result_obj.cash_back = result_obj.cash_back + add_value;

  //truncate the value to keep two decimals at most
  result_obj.cash_back = truncate(result_obj.cash_back);
  return result_obj;
}

// truncate values to 2 decimal places
function truncate(num){
  let string = num.toString(); // Cast to string to use string func
  
  if (!string.includes('.')){
    // The number needs to rounding
    return num;
  }
  else{
    //Create a string that goes two beyond the decimal place
    string = string.slice(0, (string.indexOf("."))+3);
    return parseFloat(string); //Convert back to a number
  }
  
}


export {
  chase_freedom_unlimited,
  chase_freedom_flex,
  chase_sapphire_preferred,
  citi_custom_cash,
  citi_double_cash,
  wells_fargo_active_cash,
  american_express_blue_cash_preferred,
  american_express_blue_cash_everyday,
  bank_of_america_customized_cash,
  discover_it_cash_back,
  capital_one_savor_one_rewards,
  capital_one_quicksilver_rewards,
  capital_one_quicksilver_one_rewards
};
