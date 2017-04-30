import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from './actionTypes';
import { RESOURCE_URL } from '../values.js';
import fetch from 'isomorphic-fetch';

const getPokemonRequest = () => (
  {
    type: GET_POKEMON_REQUEST,
    payload: {}
  }
);

const getPokemonSuccess = (json) => (
  {
    type: GET_POKEMON_SUCCESS,
    payload: json
  }
);

export const getPokemon = () => (
  function(dispatch) {
    dispatch(getPokemonRequest());
    return fetch(RESOURCE_URL)
      .then(response => response.json())
      .then(json =>
        dispatch(getPokemonSuccess(json))
      )
  }
);
