import './credit-card.js'

function compare(){
  
  // Grab the expenditure values
  let expenditures = {};
  
  expenditures["three_months"] = parseInt(document.getElementById("three_expenditure").value);
  expenditures["six_months"] = parseInt(document.getElementById("six_expenditure").value);
  
  // Grab the Entry Values
  let entry = {};

  entry['target'] = parseInt(document.getElementById("target_entry").value);
  entry['walmart'] = parseInt(document.getElementById("walmart_entry").value);
  entry['amazon'] = parseInt(document.getElementById("amazon_entry").value);
  entry['costco'] = parseInt(document.getElementById("costco_entry").value);
  entry['online_grocery'] = parseInt(document.getElementById("online_grocery_entry").value);
  entry['in_person_grocery'] = parseInt(document.getElementById("in_person_grocery_entry").value);
  entry['travel'] = parseInt(document.getElementById("travel_entry").value);
  entry['dining'] = parseInt(document.getElementById("dining_entry").value);
  entry['hotel'] = parseInt(document.getElementById("hotel_entry").value);
  entry['transit'] = parseInt(document.getElementById("transit_entry").value);
  entry['drugstores'] = parseInt(document.getElementById("drugstores_entry").value);
  entry['gas'] = parseInt(document.getElementById("gas_entry").value);
  entry['home_improvement'] = parseInt(document.getElementById("home_improvement_entry").value);
  entry['fitness_clubs'] = parseInt(document.getElementById("fitness_clubs_entry").value);
  entry['live_entertainment'] = parseInt(document.getElementById("live_entertainment_entry").value);
  entry['vivid_seats'] = parseInt(document.getElementById("vivid_seats_entry").value);
  entry['department_stores'] = parseInt(document.getElementById("department_stores_entry").value);
  entry['online_shopping'] = parseInt(document.getElementById("online_shopping_entry").value);
  entry['streaming'] = parseInt(document.getElementById("streaming_entry").value);
  entry['other'] = parseInt(document.getElementById("other_entry").value);
  
  
  // Go through each card on the list and make a max heap
  let card_functions = [chase_freedom_unlimited, chase_freedom_flex, citi_custom_cash];
  let results = [];
  console.log(entry);
  console.log(expenditures);
  for (let key in card_functions){
    // result_obj has values cash back, name 
    let result_obj = card_functions[key](expenditures, entry);
    results.push(result_obj);
  }
  console.log(results);
}


document.getElementById('compute_button').addEventListener("click", compare)

// chase_freedom_flex, citi_custom_cash, wells_fargo_active_cash, american_express_blue_cash_preferred, discover_it_cash_back, citi_double_cash, savor_one, quicksilver_rewards, blue_cash_everyday,
//, quicksilver_one, chase_sapphire_preferred]