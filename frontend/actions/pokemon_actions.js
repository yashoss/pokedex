export const PokemonConstants = {
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON",
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  RECEIVE_SINGLE_POKEMON: "RECEIVE_SINGLE_POKEMON",
  REQUEST_SINGLE_POKEMON: "REQUEST_SINGLE_POKEMON"
};

export const receiveAllPokemon = (pokemon) => ({
  type: PokemonConstants.RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: PokemonConstants.REQUEST_ALL_POKEMON
});


export const receiveSinglePokemon = (pokemon) => ({
  type: PokemonConstants.RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const requestSinglePokemon = (id) => ({
  type: PokemonConstants.REQUEST_SINGLE_POKEMON,
  id
});
