import React from 'react';

export default class PokemonIndex extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let pokeList = this.props.pokemon.map((pokemon) => {
      return(
        <li key={`${pokemon.name}-${pokemon.id}`}>{pokemon.name}</li>
      );
    });

    return(
      <ul>
        {pokeList}
      </ul>
    );
  }
}
