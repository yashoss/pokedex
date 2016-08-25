import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/api_util';
import * as ACTIONS from './actions/pokemon_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  window.fetchAllPokemon = API.fetchAllPokemon;
  window.receiveAllPokemon = API.receiveAllPokemon;
  window.store = store;
  API.fetchAllPokemon((pokemon) => store.dispatch(ACTIONS.receiveAllPokemon(pokemon)));
  ReactDOM.render(
    <div>
      <h1>Pokedex Rendering</h1>
      <Root store={store} />
    </div>,
    root);
});
