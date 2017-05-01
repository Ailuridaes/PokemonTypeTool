import { connect } from 'react-redux';
import { search } from '../actions/searchActions';
import Search from '../components/Search';

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemonList.pokemon.map(p => p.name)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (term) => {
      dispatch(search(term));
    }
  }
};

const SearchPokemon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchPokemon;
