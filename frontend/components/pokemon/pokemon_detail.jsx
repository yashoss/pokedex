import React from 'react';
import {selectToys} from '../../util/toy_selector';

export default class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let pokemon = this.props.activePokemon;
    debugger;
    const toys = selectToys(pokemon).map(toy => (
      <li><img src={toy.image_url} /></li>
    ));
    return(
      <section className="pokemon-detail">
        <ul>
          <img src={pokemon.image_url} alt=""/>
            <li><h2>{pokemon.name}</h2></li>
            <li>Type: {pokemon.poke_type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Moves: &#34;{pokemon.moves}&#34;</li>
          <section className="toys">
              <h3>Toys</h3>
            <ul className="toy-list">
              {toys}
            </ul>
          </section>
        </ul>
      </section>
    );
  }
}
