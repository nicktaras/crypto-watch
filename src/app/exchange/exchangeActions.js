import * as ACTIONS from './exchangeTypes';

export function getExchangeData() {
  return {
    type: ACTIONS.GET_EXCHANGE_DATA
  }
}

export const getExchangeDataSuccess = (data) => ({
  type: ACTIONS.GET_EXCHANGE_DATA_SUCCESS,
  payload: data
});

