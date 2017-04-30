import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from '../actions/actionTypes';

const pokemon = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      // TODO: Add logic to handle special pokemon names (eg. megas and special characters)
      return action.payload.pokemon;
    default:
      return state;
  }
};

const pokemonList = (state = {
  pokemon: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case GET_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        pokemon: pokemon(state.pokemon, action)
      });
    default:
      return state;
  }
}

export default pokemonList;