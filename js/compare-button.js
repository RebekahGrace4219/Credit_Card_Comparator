import { values } from "./card-data.js";
import * as credit_card from "./credit-card.js";

//Set the recommemnd button to recommend cards
document.getElementById("compute_button").addEventListener("click", recommend);

/*
  recommend: suggest 4 cards (3 top cash back + 1 rotating category card) to the user based on their purchase tendencies
  
  return: None, the output is changed directly on the website
*/
function recommend() {
  // Grab the values from the input
  let input_values = grab_values();

  //Calculate the cash back for each card
  let results = [];
  let function_array = [
      credit_card.chase_freedom_unlimited,
      credit_card.chase_freedom_flex,
      credit_card.chase_sapphire_preferred,
      credit_card.citi_custom_cash,
      credit_card.citi_double_cash,
      credit_card.wells_fargo_active_cash,
      credit_card.american_express_blue_cash_preferred,
      credit_card.american_express_blue_cash_everyday,
      credit_card.bank_of_america_customized_cash,
      credit_card.discover_it_cash_back,
      credit_card.capital_one_savor_one_rewards,
      credit_card.capital_one_quicksilver_rewards,
      credit_card.capital_one_quicksilver_one_rewards
    ];
  
  
  for(let function_key in function_array){
    results.push((function_array[function_key](input_values.expenditures, input_values.entry)));
  }
  console.log(results);
  
  //sort the cash back highest to lowest
  //insertion sort is used, because it is known that the array is small
  insertion_high_to_low_sort(results);
  console.log(results);
  
  //determine the top 3 cards
  let top_3 = determine_top_3(results);
  console.log(top_3);
  //determine the top rotating card
  let top_rotating = determine_rotating(results);
  console.log(top_rotating);
  console.log(results);
  //add the cards to the HTML
  add_cards_no_rotate(top_3);
  add_rotate(top_rotating);
  
  //Turn on the display for the next section if it not already on
  let recommendDivShow = document.getElementById("recommendDiv");
  console.log(recommendDivShow.style.display);
  if (recommendDivShow.style.display != 'block'){
    console.log("here");
    document.getElementById("recommendDiv").style.display = 'block';
  }
}



/*
  grab_values: take the values from the user and organize/clean them
  
    return: {expenditures: {three_months: int, six_months: int}, entry: {category: int, category: int...}}
*/
function grab_values() {
  // Grab the expenditure values
  let expenditures = {};

  expenditures["three_months"] = parseInt(
    document.getElementById("three_expenditure").value
  );
  expenditures["six_months"] = parseInt(
    document.getElementById("six_expenditure").value
  );

  // Grab the Entry Values
  let entry = {};

  entry["target"] = parseInt(document.getElementById("target_entry").value);
  entry["walmart"] = parseInt(document.getElementById("walmart_entry").value);
  entry["amazon"] = parseInt(document.getElementById("amazon_entry").value);
  entry["costco"] = parseInt(document.getElementById("costco_entry").value);
  entry["online_grocery"] = parseInt(document.getElementById("online_grocery_entry").value);
  entry["in_person_grocery"] = parseInt(document.getElementById("in_person_grocery_entry").value);
  entry["travel"] = parseInt(document.getElementById("travel_entry").value);
  entry["dining"] = parseInt(document.getElementById("dining_entry").value);
  entry["hotel"] = parseInt(document.getElementById("hotel_entry").value);
  entry["transit"] = parseInt(document.getElementById("transit_entry").value);
  entry["drugstores"] = parseInt(document.getElementById("drugstores_entry").value);
  entry["gas"] = parseInt(document.getElementById("gas_entry").value);
  entry["home_improvement"] = parseInt(document.getElementById("home_improvement_entry").value);
  entry["fitness_clubs"] = parseInt(document.getElementById("fitness_clubs_entry").value);
  entry["live_entertainment"] = parseInt(document.getElementById("live_entertainment_entry").value);
  entry["vivid_seats"] = parseInt(document.getElementById("vivid_seats_entry").value);
  entry["department_stores"] = parseInt(document.getElementById("department_stores_entry").value);
  entry["online_shopping"] = parseInt(document.getElementById("online_shopping_entry").value);
  entry["streaming"] = parseInt(document.getElementById("streaming_entry").value);
  entry["other"] = parseInt(document.getElementById("other_entry").value);

  // Clean the values
  for(let key in expenditures){
    if (typeof expenditures[key] != 'number'){
      expenditures[key] = 0;
    }
  }
  for(let key in entry){
    
if (typeof entry[key] != 'number'){
      entry[key] = 0;
    }  }

    return { expenditures: expenditures, entry: entry };
}

/*
  insertion_sort: a variation of insertion sort for a list of hashes, with one comparison value, it sorts highest to lowers
    arr: a list of {name: str, cash_back: int} values
  
    return: None, the list is modified in place
*/
function insertion_high_to_low_sort(arr){
  for(let index1 = 1; index1 < arr.length; index1++){
    
    //Value to move backwards until it is less than the 
    let key = arr[index1];    //Key is now a hash of {name, cash_back}
    
    //flip the value back, swapping with each index, until its the smaller value
    let j = index1 - 1;
    while( j >= 0 && key.cash_back > arr[j].cash_back){
      arr[(j+1)] = arr[j];
      j--;
    }
    arr[(j+1)] = key;
  }  
}


/*
  determine_top_3: take the top 3 cards off the stack
    arr: a list of hashes representing cards
    
    return: a list of hashes representing the three best cards
*/
function determine_top_3(arr){
  let list_ans = [];
  
  for(let i = 0; i< 3; i++){
    list_ans.push(arr[i]);
  }
  
  return list_ans;
}

/*
  determine_rotating: take the best cash-back card with rotating categories
    arr: a list of hashtables representing card names and their cash back estimates
      
    return: a single card representing the best rotating card
*/
function determine_rotating(arr){
  let index = 0;
  let ans = 0;
  
  while(ans == 0){
    if (values[arr[index].name].rotating == true){
      ans = arr[index];
    }
    index += 1;
    
    if(index > arr.length){
      console.log("Error, no cash back cards found.")
      break;
    }
  }
  return ans;
}

/* 
  add_cards_no_rotate(list): place the top three cards into the html for the user to see
    list: three {name: str, cash_back: int} values, in order greatest to smallest
   
    return: None, modifies the HTML directly- would make a good REACT app in the future
*/
function add_cards_no_rotate(list) {
  // Add the non rotating trees
  for (let i = 1; i < 4; i++) {
    let card_name = list[i - 1].name;
  
    document.getElementById("card" + i.toString() + "_img").src =
      values[card_name].image;
    document.getElementById("card" + i.toString() + "_link_value").href=
      values[card_name].link;
    document.getElementById(
      "card" + i.toString() + "_cash_back_value"
    ).textContent = list[i - 1].cash_back;
    document.getElementById(
      "card" + i.toString() + "_annual_fee_value"
    ).textContent = values[card_name].fee;
    
    if (values[card_name].rotating){
       document.getElementById(
      "card" + i.toString() + "_rotate_value"
    ).textContent = "Yes";
    }
    else{
       document.getElementById(
      "card" + i.toString() + "_rotate_value"
    ).textContent = "No";
    }
   
  }
}

//Make a list of items in a list with commas and "and"
function write_format(arr){
  let formatted_list = "";
  
  if (arr.length <=1){
    formatted_list = arr[0];
  }
  else if(arr.length == 2){
    formatted_list = arr[0]+ " and "+arr[1];
  }
  else{
    for(let i = 0; i<arr.length -1; i++){
      formatted_list += arr[i] + ", ";
    }
    formatted_list += "and "+ arr[arr.length-1];
  }
  return formatted_list;
}

/* 
  add_rotate(card): place the top rotating card for the user to see
    card: {name: str, cash_back: int} values, with a card that has rotating categories
   
    return: None, modifies the HTML directly- would make a good REACT app in the future
*/
function add_rotate(card) {
  let card_name = card.name;

  let categories = write_format(values[card_name].rotating_categories);

  document.getElementById("card4_img").src = values[card_name].image;
  document.getElementById("card4_link_value").href =
    values[card_name].link;
  document.getElementById("card4_cash_back_value").textContent =
    card.cash_back;
  document.getElementById("card4_annual_fee_value").textContent =
    values[card_name].fee;
  document.getElementById("card4_rotate_value").textContent = "Yes";
  document.getElementById(
    "card4_rotate_categories_value"
  ).textContent = categories;
}
0