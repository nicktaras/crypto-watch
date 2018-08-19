import * as ACTIONS from './coinTypes';

let state = {
  coins: []
};

const coinReducers = (defaultState = state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_COINS_SUCCESS:
      return {
        ...defaultState,
        coins: action.payload
      };
    case ACTIONS.EDIT_COIN:
    case ACTIONS.DELETE_COIN:
    case ACTIONS.ADD_COIN:
    case ACTIONS.GET_COINS:
    default:
      return defaultState;
  }
}

export default coinReducers;
