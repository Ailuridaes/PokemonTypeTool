import { SET_TYPES, SET_MATCHUPS } from './actionTypes';
import { MATCHUPS } from '../values';

const setTypes = (types) => (
  {
    type: SET_TYPES,
    payload: types
  }
);

const setMatchups = (matchups) => (
  {
    type: SET_MATCHUPS,
    payload: matchups
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
      // Copy arrays to type2 to allow removing duplicate types
      let type2 = {
        weaknesses: MATCHUPS[types[1]].weaknesses.slice(),
        resistances: MATCHUPS[types[1]].resistances.slice(),
        immunities: MATCHUPS[types[1]].immunities.slice()
      };
      for(let w of type1.weaknesses) {
        if(type2.weaknesses.includes(w)) {
          matchups.quadruple.push(w);
          type2.weaknesses.splice(type2.weaknesses.indexOf(w), 1);
        } else if(type2.resistances.includes(w)) {
          // x1 damage, don't include in matchups
          type2.resistances.splice(type2.resistances.indexOf(w), 1);
        } else if(type2.immunities.includes(w)) {
          matchups.zero.push(w);
          type2.immunities.splice(type2.immunities.indexOf(w), 1);
        } else {
          matchups.double.push(w);
        }
      }
      for(let r of type1.resistances) {
        if(type2.weaknesses.includes(r)) {
          // x1 damage, don't include in matchups
          type2.weaknesses.splice(type2.weaknesses.indexOf(r), 1);
        } else if(type2.resistances.includes(r)) {
          matchups.quarter.push(r);
          type2.resistances.splice(type2.resistances.indexOf(r), 1);
        } else if(type2.immunities.includes(r)) {
          matchups.zero.push(r);
          type2.immunities.splice(type2.immunities.indexOf(r), 1);
        } else {
          matchups.half.push(r);
        }
      }
      for(let i of type1.immunities) {
        matchups.zero.push(i);
        for(let prop in type2) {
          if(type2[prop].includes(i)) {
            type2[prop].splice(prop.indexOf(i), 1);
            break;
          }
        }
      }

      // Add remaining matchups from type2
      matchups.double = matchups.double.concat(type2.weaknesses);
      matchups.half = matchups.half.concat(type2.resistances);
      matchups.zero = matchups.zero.concat(type2.immunities);
    }
    dispatch(setMatchups(matchups));
  }
);
