import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import * as ACTIONS from '../actions/pokemon_actions';
import PokemonIndexItem from './pokemon/pokemon_index_item';
import PokemonDetail from './pokemon/pokemon_detail';

const getPokemon = () => {
  store.dispatch(ACTIONS.requestAllPokemon());
};

const getDetail = (nextState) => {
  store.dispatch(ACTIONS.requestSinglePokemon(nextState.params.id));
};

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer}
          onEnter={getPokemon}>
          <Route path="pokemon/:id"
            component={PokemonDetailContainer}
            onEnter={getDetail}
          />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
