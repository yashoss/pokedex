export const selectToys = (activePokemon) => {
	return activePokemon && activePokemon.toys ? Object.keys(activePokemon.toys).map((toyId) => {
		return activePokemon.toys[toyId];
	}) : [];
};
