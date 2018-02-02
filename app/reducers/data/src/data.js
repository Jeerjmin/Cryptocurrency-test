const defaultState = {
  data: []

}


export const DataReducer = (state = defaultState, action) => {
  if (action.type === 'RECEIVE_POSTS') {
    return {...state, data: action.posts }
  }
    return state;
};
