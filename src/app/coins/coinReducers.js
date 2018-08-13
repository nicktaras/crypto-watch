import * as ACTIONS from './coinTypes';

let state = {
  coins: []
};

const coinReducers = (defaultState = state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_COIN:
      return {
      ...defaultState
      };
    case ACTIONS.EDIT_COIN:
      return {
      ...defaultState
      };
    case ACTIONS.DELETE_COIN:
      return {
        ...defaultState
      };
    case ACTIONS.GET_COINS:
      return {
        ...defaultState
      };
    default:
      return defaultState;
  }
}

export default coinReducers;
