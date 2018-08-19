import * as ACTIONS from './coinTypes';

export function getCoins() {
  return {
    type: ACTIONS.GET_COINS
  }
}

export function editCoin(coin) {
  return {
    type: ACTIONS.EDIT_COIN,
    payload: coin
  }
}

export function addCoin(coin) {
  return {
    type: ACTIONS.ADD_COIN,
    payload: { coin: coin }
  }
}

export const updateCoinsSuccess = (coins) => ({
  type: ACTIONS.UPDATE_COINS_SUCCESS,
  payload: coins
});

