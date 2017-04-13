import { SET_TYPES } from '../actions/actionTypes';
import { MATCHUPS } from '../values';

const typeChart = (state = {
  types: [],
  matchups: {
    quadruple: [],
    double: [],
    half: [],
    zero: [],
  }
}, action) => {
  switch (action.type) {
    case SET_TYPES:
      let m = {
        quadruple: [],
        double: [],
        half: [],
        quarter: [],
        zero: []
      };
      let type1 = MATCHUPS[types[0]];

      if(types.length === 1 || types[0] === types[1]) {
        m.double = type1.weaknesses;
        m.half = type1.resistances;
        m.zero = type1.immunities;
      } else {   
        let type2 = MATCHUPS[types[1]];
        for(w of type1.weaknesses) {
          if(type2.weaknesses.includes(w)) {
            m.quadruple.push(w);
          } else if(type2.resistances.includes(w)) {
            // x1 damage, don't include in matchups
          } else if(type2.immunities.includes(w)) {
            m.zero.push(w);
          } else {
            m.double.push(w);
          }
        }
        for(r of type1.resistances) {
          if(type2.weaknesses.includes(r)) {
            // x1 damage, don't include in matchups
          } else if(type2.resistances.includes(r)) {
            m.quarter.push(r);
          } else if(type2.immunities.includes(r)) {
            m.zero.push(r);
          } else {
            m.half.push(r);
          }
        }
        for(i of type1.immunities) {
          if(!type2.immunities.includes(i)) {
            m.immunities.push(r);
          }
        }
      }

      return Object.assign({}, state, m);
    default:
      return state;
  }
}

export default typeChart;