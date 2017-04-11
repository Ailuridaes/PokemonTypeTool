import { SET_TYPES } from './actionTypes';

export const setTypes = (types) => (
  {
    type: SET_TYPES,
    payload: { types: types }
  }
);
