import { SET_TYPES, SET_MATCHUPS } from './actionTypes';
import { MATCHUPS } from '../values';

const setTypes = (types) => (
  {
    type: SET_TYPES,
    payload: { types: types }
  }
);

const setMatchups = (matchups) => (
  {
    type: SET_MATCHUPS,
    payload: { matchups: matchups }
  }
);

export const updateTypes = (types) => (
  function(dispatch) {
    dispatch(setTypes(types));
    let matchups = {
        quadruple: [],
        double: [],
        half: [],
        quarter: [],
        zero: []
      };
      let type1 = MATCHUPS[types[0]];
      if(types[1] === 'NONE' || types[0] === types[1]) {
        matchups.double = type1.weaknesses;
        matchups.half = type1.resistances;
        matchups.zero = type1.immunities;
      } else {
        let type2 = MATCHUPS[types[1]];
        for(let w of type1.weaknesses) {
          if(type2.weaknesses.includes(w)) {
            matchups.quadruple.push(w);
          } else if(type2.resistances.includes(w)) {
            // x1 damage, don't include in matchups
          } else if(type2.immunities.includes(w)) {
            matchups.zero.push(w);
          } else {
            matchups.double.push(w);
          }
        }
        for(let r of type1.resistances) {
          if(type2.weaknesses.includes(r)) {
            // x1 damage, don't include in matchups
          } else if(type2.resistances.includes(r)) {
            matchups.quarter.push(r);
          } else if(type2.immunities.includes(r)) {
            matchups.zero.push(r);
          } else {
            matchups.half.push(r);
          }
        }
        for(let i of type1.immunities) {
          if(!type2.immunities.includes(i)) {
            matchups.zero.push(i);
          }
        }
      }
      dispatch(setMatchups(matchups));
  }
);