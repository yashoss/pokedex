import { createStore } from 'redux';
import pokemonReducer from '../reducers/pokemon_reducer';
import masterMiddleware from '../middleware/master_middleware';

const configureStore = () => (
  createStore(
    pokemonReducer,
    masterMiddleware
  )
);

export default configureStore;
