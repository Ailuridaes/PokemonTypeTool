import { SET_MATCHUPS } from '../actions/actionTypes';

const matchups = (state = {
  quadruple: [],
  double: [],
  half: [],
  quarter: [],
  zero: []
}, action) => {
  switch (action.type) {
    case SET_MATCHUPS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default matchups;