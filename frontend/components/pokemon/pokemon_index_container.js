import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  activePokemon: state.activePokemon
});

const mapDispatchToProps = dispatch => ({
  receiveAllPokemon: (pokemon) => dispatch(ACTIONS.receiveAllPokemon()),
  receiveSinglePokemon: (pokemon) => dispatch(ACTIONS.receiveSinglePokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
