import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  activePokemon: state.activePokemon
});

const mapDispatchToProps = dispatch => ({
  receiveSinglePokemon: (pokemon) => dispatch(ACTIONS.receiveSinglePokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
