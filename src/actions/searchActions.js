import { updateTypes } from './index';

export const search = (term) => (
  function(dispatch, getState) {
    var pokemonArr = getState().pokemonList.pokemon;
    var pokemon = pokemonArr.find(p => p.name === term.toLowerCase());
    if(pokemon) {
      dispatch(updateTypes([ pokemon.type1.toUpperCase(), pokemon.type2 ? pokemon.type2.toUpperCase() : 'NONE' ]));
    }
  }
);
