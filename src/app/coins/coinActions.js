import * as ACTIONS from './coinTypes';

export const getCoinsSuccess = (coins) => ({
  type: ACTIONS.GET_COINS_SUCCESS,
  payload: coins
});

export function getCoins(data) {
  return {
    type: ACTIONS.GET_COINS
  }
}

