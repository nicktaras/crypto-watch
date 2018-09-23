import * as ACTIONS from './exchangeTypes';

const state = {
  data: {}
};

const exchangeReducers = (defaultState = state, action) => {
  switch (action.type) {
    case ACTIONS.GET_EXCHANGE_DATA_SUCCESS:
      return {
        ...defaultState,
        data: action.payload
      };
    case ACTIONS.GET_EXCHANGE_DATA:
    default:
      return defaultState;
  }
}

export default exchangeReducers;
