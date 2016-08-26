export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/pokemon",
    success,
    error
  });
};

export const fetchSinglePokemon = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/pokemon/${id}`,
    success,
    error
  });
};
