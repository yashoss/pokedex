import React from 'react';
import { withRouter } from 'react-router';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.pokemon = this.props.pokemon;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.router.push(`pokemon/${this.pokemon.id}`);
  }

  render() {
    let pokemon = this.pokemon;
    if (pokemon === undefined) {
      debugger;
    }
    return (
      <li className="pokemon-index-item"
        key={`${pokemon.name}-${pokemon.id}`}
        onClick={this.handleClick}>
        <span>{pokemon.id}</span>
        <img src={pokemon.image_url}
          alt={"pokemon image"} />
        <span>{pokemon.name}</span>
      </li>
    );
  }
}

export default withRouter(PokemonIndexItem);
