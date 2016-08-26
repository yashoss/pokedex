import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let pokeList = this.props.pokemon.map((pokemon) => {
      return(
        <PokemonIndexItem key={`${pokemon.name}-${pokemon.id}`}
          pokemon={pokemon} />
      );
    });

    return(
      <section className="pokedex">
        <ul>
          {pokeList}
        </ul>
        {this.props.children}
      </section>
    );
  }
}
