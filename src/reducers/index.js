import { combineReducers } from 'redux';
import types from './types';
import matchups from './matchups';

const typeToolApp = combineReducers({
  types,
  matchups
});

export default typeToolApp;
