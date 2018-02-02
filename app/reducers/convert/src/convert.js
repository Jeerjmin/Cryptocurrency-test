const defaultState = {
  value1: '',
  value2: ''
}


export const ConvertReducer = (state = defaultState, action) => {
  if (action.type ==='CONVERTER') {
    return {...state, value1: Number(action.payload)/Number(action.price) }
  }

  return state;
}

export const ConvertReducer2 = (state = defaultState, action) => {
  if (action.type ==='CONVERTER2') {
    return {...state, value2: Number(action.payload)/Number(action.price) }
  }

  return state;
}
