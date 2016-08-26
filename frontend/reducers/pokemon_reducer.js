import { PokemonConstants } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultPokemon = {id: "", attack: "", defense: "",
  image_url: "", moves: [], name: "", poke_type: ""};

const PokemonReducer = (state = {activePokemon: defaultPokemon,
  pokemon: []}, action) => {
  switch(action.type) {
    case PokemonConstants.RECEIVE_ALL_POKEMON:
      let newState = merge({}, state, {pokemon: action.pokemon});
      return newState;
      
    case PokemonConstants.RECEIVE_SINGLE_POKEMON:
      let newState1 = merge({}, state, {activePokemon: action.pokemon});
      return newState1;

    default:
      return state;
  }
};

export default PokemonReducer;
