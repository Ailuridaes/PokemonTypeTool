import { SET_TYPES } from '../actions/actionTypes';

const types = (state = ['NONE', 'NONE'], action) => {
  switch (action.type) {
    case SET_TYPES:
      return action.payload;
    default:
      return state;
  }
};

export default types;