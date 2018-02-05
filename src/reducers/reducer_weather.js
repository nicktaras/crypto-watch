import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // never mutate state.
      // these two mehtods will take the place of the existing state
      // but not mutate the current.
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // es6 way
  }
  return state;
}