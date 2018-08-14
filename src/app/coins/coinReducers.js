import * as ACTIONS from './coinTypes';
import getCoinsEpic from './getCoinsEpic';

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
    case ACTIONS.GET_COINS_SUCCESS:
      return {
        ...defaultState
      };
    case ACTIONS.GET_COINS:
    default:
      return defaultState;
  }
}

export default coinReducers;
