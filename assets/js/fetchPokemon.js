const fetchPokemon = async () => {

    const getPokemonsUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonsPromises = [];

    for (let id = 1; id <= 150; id++) {
        const response = await fetch(getPokemonsUrl(id));
        pokemonsPromises.push(await response.json());
    }

    const pokemonsPromisesResolvidas = await Promise.all(pokemonsPromises);

    return pokemonsPromisesResolvidas;
}

export {
    fetchPokemon
}