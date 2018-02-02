const defaultState = {

  USD: 1000
}


export const BuyReducer = (state = defaultState, action) => {
  if (action.type === 'BUY') {
    if (action.cost_sum <= state.USD) {

              if (state[action.buy_type]) {
                return{...state,
                      USD: (Number(state.USD) - Number(action.cost_sum)),
                      [action.buy_type]: Number(state[action.buy_type])+ Number(action.buy_sum)

                    }
              }
              else {
                return{...state,
                      USD: (Number(state.USD) - Number(action.cost_sum)),
                      [action.buy_type]: Number(action.buy_sum)

                    }
              }


  }
  else if (action.cost_sum > state.USD) {alert("Недостаточно денег1")}
}



else if (action.type=='SELL') {

  if (action.buy_sum <= state[action.buy_type]) {

if (state[action.buy_type]) {
          return{...state,
                USD: (Number(state.USD) + Number(action.cost_sum)),
                [action.buy_type]: Number(state[action.buy_type])- Number(action.buy_sum)
              }
            }

            else {

              return{...state,
                    USD: (Number(state.USD) + Number(action.cost_sum)),
                    [action.buy_type]: Number(action.buy_sum)
                  }


            }

}

else if (action.cost_sum > state.USD) {alert("Недостаточно денег2")}

  }









    return state;
};
