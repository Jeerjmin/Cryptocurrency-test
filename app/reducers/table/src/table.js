const defaultState = {
  table: []
}


export const TableReducer = (state = defaultState, action) => {
  if (action.type === 'BUYTABLE') {

    let arrayvar = state.table.slice()
    arrayvar.push({type:"BUY", pair:action.symbol+"/USD", spent:action.cost_sum+" USD", received:action.buy_sum+' '+ action.symbol})


    return{...state,
          table: arrayvar
        }
      }


else if (action.type=='SELLTABLE') {

    let arrayvar = state.table.slice()
    arrayvar.push({type:"SELL", pair:"USD/"+action.symbol, spent:action.buy_sum+' '+ action.symbol, received:action.cost_sum+" USD"})

    return{...state,
          table: arrayvar
        }
      }

    return state;
};
