import { SET_TYPES } from '../actions/actionTypes';

const typeChart = (state = '', action) => {
  switch (action.type) {
    case SET_TYPES:
      return '';
    default:
      return state;
  }
}

export default typeChart;