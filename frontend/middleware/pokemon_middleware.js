import * as ACTIONS from "../actions/pokemon_actions";
import * as API from '../util/api_util';

export default ({ dispatch }) => next => action => {
  switch(action.type) {
    case ACTIONS.PokemonConstants.REQUEST_ALL_POKEMON:
      const success = (pokemon) => dispatch(ACTIONS.receiveAllPokemon(pokemon));
      API.fetchAllPokemon(success);
      return next(action);
    default:
      return next(action);
  }
};
