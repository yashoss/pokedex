import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(ACTIONS.requestAllPokemon()),
  receiveAllPokemon: (pokemon) => dispatch(ACTIONS.receiveAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
