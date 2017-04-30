import { combineReducers } from 'redux';
import types from './types';
import matchups from './matchups';
import pokemonList from './pokemonList';

const typeToolApp = combineReducers({
  types,
  matchups,
  pokemonList
});

export default typeToolApp;
