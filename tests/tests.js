import * as credit_card from '../../js/credit-card.js'

import {tests} from './test-data.js'

function run_tests(){
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
  
  
  
  //For each credit card, and each test, verify that the values match
  for(let function_index in function_array){
    for(let test_name in tests){
      let result = function_array[function_index](tests[test_name].expenditures,tests[test_name].entry);
      if (result.cash_back != tests[test_name].ans[result.name]){
        console.log("Mismatch", result.name, test_name, result.cash_back, tests[test_name].ans[result.name]);
      }
    }
  }
    
}


run_tests();