import { PokemonConstants } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {pokemon: []}, action) => {
  switch(action.type) {
    case PokemonConstants.RECEIVE_ALL_POKEMON:
      let newState = merge({}, state, {pokemon: action.pokemon});
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
