function chase_freedom_unlimited(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "Chase Freedom Unlimited", 'rotating': false};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['three_months'] >= 500){
      result_obj['cash back'] = result_obj['cash back'] + 200;
  }
  
  //5% back on up to 12000 grocery purchases for the first year
  let grocery = Math.min(entry['in_person_grocery']+entry['online_grocery'], 12000);
  result_obj['cash back'] = result_obj['cash back'] +  0.05*grocery;
  
  //5% back on travel as defined by chase
  result_obj['cash back'] = result_obj['cash back'] + 0.05*(entry['travel'] + entry['hotel'] + entry['transit']);
  
  //3% back on dining
  result_obj['cash back'] = result_obj['cash back'] + 0.03*entry['dining'];
  
  //1.5% back on everything else
  let add_value = 0;
  let array = ['in_person_grocery' , 'online_grocery' , 'travel' , 'dining' ,'hotel', 'transit'];
  for (let key in entry){
    if (!array.includes(key)){
      add_value += entry[key] * 0.015;
    }
  }
  result_obj['cash back'] = result_obj['cash back'] + add_value;
  console.log(result_obj)
  return result_obj;
}

function chase_freedom_flex(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "Chase Freedom Flex", 'rotating': true};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['three_months'] >= 500){
      result_obj['cash back'] = result_obj['cash back'] + 200;
  }
  
  //5% back on up to 12000 grocery purchases for the first year
  let grocery = Math.min(entry['in_person_grocery']+entry['online_grocery'], 12000);
  result_obj['cash back'] = result_obj['cash back'] +  0.05*grocery;
  
  //5% back on travel as defined by Chase
  result_obj['cash back'] = result_obj['cash back'] + 0.05*(entry['travel'] + entry['hotel'] + entry['transit']);
  
  //3% back on dining
  result_obj['cash back'] = result_obj['cash back'] + 0.03*entry['dining'];
  
  //1% back on everything else
  let add_value = 0;
  let array = ['in_person_grocery' , 'online_grocery' , 'travel' , 'dining' ,'hotel', 'transit'];
  for (let key in entry){
    if (!array.includes(key)){
      add_value += entry[key] * 0.01;
    }
  }
  result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  return result_obj;
}

function citi_custom_cash(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "Citi Custom Cash", 'rotating': false};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['three_months'] >= 750){
      result_obj['cash back'] = result_obj['cash back'] + 200;
  }
  
  // Find the highest charge out of the following categories 
  // and a combo of in_person_grocery/online_grocery
  // and a combo of travel, hotels
  let array = ["dining", "gas", "transit", "streaming", "drugstores", "home_improvement", "fitness_clubs", "live_entertainment"];
  let max = entry['in_person_grocery'] + entry['online_grocery'];
  max = Math.max(max, entry['travel']+entry['hotel']);
  
  for (let key in array){
    if (entry[key] > max){
      max = entry[key];
    }
  }
  result_obj['cash back'] = result_obj['cash back'] + 0.05*max;
  
  return result_obj;
}

function wells_fargo_active_cash(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "Wells Fargo Active Cash", 'rotating': false};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['three_months'] >= 1000){
      result_obj['cash back'] = result_obj['cash back'] + 200;
  }
  
  let add_value = 0;
  for (let key in entry){
      add_value += entry[key] * 0.02;
  
  }

  result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  return result_obj;
}

function american_express_blue_cash_preferred(expenditures, entry){
  // $95 Annual Fee 
  let result_obj = {'cash back': -95, 'name': "American Express Blue Cash Preferred", 'rotating': false};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['six_months'] >= 3000){
      result_obj['cash back'] = result_obj['cash back'] + 300;
  }
  
  //6% back on up to 6000 grocery purchases for the first year
  let grocery = Math.min(entry['in_person_grocery']+entry['online_grocery'], 6000);
  result_obj['cash back'] = result_obj['cash back'] +  0.06*grocery;
  
  //6% back on streaming
  result_obj['cash back'] = result_obj['cash back'] + 0.06*entry['streaming'];
  
  //3% back on transit
  result_obj['cash back'] = result_obj['cash back'] + 0.03*entry['transit'];
  
  //3% back on gas
  result_obj['cash back'] = result_obj['cash back'] + 0.03*entry['gas'];

  return result_obj;
  
}


function discover_it_cash_back(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "Discover It Cash Back", 'rotating': true};
  
  // 2% everything on the first year
  let add_value = 0;
  for (let key in entry){
      add_value += entry[key] * 0.02;
  }

  result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  return result_obj;
}

function citi_double_cash(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "Citi Double Cash", 'rotating': false};
  
  // 2% everything on the first year
  let add_value = 0;
  for (let key in entry){
      add_value += entry[key] * 0.02;
  }

  result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  return result_obj;
}

function savor_one(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "American Express Blue Cash Preferred", 'rotating': false};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['three_months'] >= 500){
      result_obj['cash back'] = result_obj['cash back'] + 200;
  }
  
  let arr = ["dining", "live_entertainment", "streaming", "in_person_grocery"];
  let add_value = 0;
  
  // Go through every entry
  for (let key in entry){
    if (key in arr){
      // 3% back on the select categories in arr
      add_value += 0.03*entry[key];
    }
    else if (key == "vivid_seats"){
      // 8% back on this one specific entertainment website
      add_value += 0.08*entry[key];
    }
    else{
      // 1% back everything else
      add_value += 0.01*entry[key];
    }
  }
  
  result_obj["cash back"] = result_obj["cash back"] + add_value;
  
  return result_obj;
}

function quicksilver_rewards(expenditures, entry){
   let result_obj = {'cash back': 0, 'name': "Quicksilver Rewards", 'rotating': false};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['three_months'] >= 500){
      result_obj['cash back'] = result_obj['cash back'] + 200;
  }
  
  // 1.5% on everything
  let add_value = 0;
  for (let key in entry){
      add_value += entry[key] * 0.015;
  }

  result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  return result_obj;
}



function blue_cash_everyday(expenditures, entry){
  let result_obj = {'cash back': 0, 'name': "American Express Blue Cash Everyday", 'rotating': false};
  
  // Cash back bonus of $200 for $2000 spent in the first six months
  if (expenditures['six_months'] >= 2000){
      result_obj['cash back'] = result_obj['cash back'] + 200;
  }
  
  //3% back on up to 6000 grocery purchases for the first year
  let grocery = Math.min(entry['in_person_grocery']+entry['online_grocery'], 6000);
  result_obj['cash back'] = result_obj['cash back'] +  0.03*grocery;
  
  //2% back on gas
  result_obj['cash back'] = result_obj['cash back'] + 0.02*entry['gas'];
  
  //2% back on department stores
  result_obj['cash back'] = result_obj['cash back'] + 0.02*entry['department_stores'];
  
  //1% back on everything else
  let add_value = 0;
  let array = ['in_person_grocery' , 'online_grocery' , 'gas' , 'department_stores'];
  for (let key in entry){
    if (!array.includes(key)){
      add_value += entry[key] * 0.01;
    }
  }
  result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  return result_obj;
}

function quicksilver_one(expenditures, entry){
  // 39$ Annual Fee
  let result_obj = {'cash back': -39, 'name': "Quicksilver One by Capital One", 'rotating': false};
  
  //1.5% back on everything 
  let add_value = 0;
  for (let key in entry){
    add_value += entry[key] * 0.015;
  }
  
  result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  return result_obj;
}

function bank_of_america_customized_cash(expenditure, entry){
  /*
  let result_obj = {'cash back': 0, 'name': "Bank Of America Customized Cash", 'rotating': false};
  
  // 3% back on highest category + 2% on grocery/wholesale club up to $10000 each year
  // travel + hotel + transit combine to one section
  let array = ["gas", "online_shopping", "dining", "drugstores", "home_improvement"];
  let max = entry['travel'] + entry['hotel']+ entry['transit'];
  let highest_category = ['travel', 'hotel', 'transit'];
  let add_value = 0;
  
  console.log(max, highest_category, add_value);
  
  for (let key in array){
    if (entry[key] > max){
      max = entry[key];
      highest_category = [key];
    }
  }
  
  console.log(max, highest_category, add_value);
  
  
  max = Math.min(max, 10000);
  
  console.log(max);
  
  let two_percent_value = 0;
  let leftover_two_percent_value = 0;
  
  array = ["in_person_grocery", "online_grocery", "costco"];
  for (let key in array){
    two_percent_value += entry[key];
  }
  
  
  if (max + two_percent_value > 10000){
    leftover_two_percent_value = two_percent_value - (10000 - max);
    two_percent_value = 1000 - max;
  }
  
  
  // 1% back on everything else
  array = ["in_person_grocery" , "online_grocery" , "costco" ];
  for (let key in entry){
    if (!highest_category.includes(key) && !array.includes(key)){
        add_value += entry[key] * 0.1 ;
    }
  }

  result_obj['cash back'] = result_obj['cash back'] + 0.03*max;
  result_obj['cash back'] = result_obj['cash back'] + 0.02*two_percent_value;
  result_obj['cash back'] = result_obj['cash back'] + 0.01*leftover_two_percent_value;
  result_obj['cash back'] = result_obj['cash back'] + 0.01*add_value;
  
  return result_obj;*/
}

function chase_sapphire_preferred(expenditures, entry){
  // $95 Annual Fee
  let result_obj = {'cash back': -95, 'name': "Chase Sapphire Preferred", 'rotating': false};
  
  // Cash back bonus of $200 for $500 spent in the first three months
  if (expenditures['three_months'] >= 4000){
      result_obj['cash back'] = result_obj['cash back'] + 1000;
  }
  
  // $50 off hotels
  if (entry['hotel'] >= 50){
    result_obj['cash back'] = result_obj['cash back'] + Math.min(entry['hotel'], 50);
  }
  
  //5% back on travel + transit
  result_obj['cash back'] = (result_obj['cash back'] + 0.05*(entry['travel']+entry['transit']));
  
  //3% back on dining
  result_obj['cash back'] = result_obj['cash back'] + 0.03*(entry['dining']);
  
  //3% online grocery
  result_obj['cash back'] = result_obj['cash back'] + 0.03*(entry['online_grocery']);
  
  //3% streaming
  result_obj['cash back'] = result_obj['cash back'] + 0.03*(entry['streaming']);
  
  //1% everything else
  let add_value = 0;
  let array = ['hotel', 'travel', 'transit', 'dining', 'online_grocery', 'streaming'];
  for (let key in entry){
    if (!array.includes(key)){
        add_value += entry[key]*0.01;
    }
  }
  
    result_obj['cash back'] = result_obj['cash back'] + add_value;
  
  
  return result_obj;

}
