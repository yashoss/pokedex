import { createStore } from 'redux';
import PokemonReducer from '../reducers/pokemon_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = () => (
  createStore(
    PokemonReducer,
    MasterMiddleware
  )
);

export default configureStore;
