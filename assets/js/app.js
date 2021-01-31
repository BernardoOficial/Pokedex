import { fetchPokemon } from "./fetchPokemon.js";
import { criarCardPokemon } from "./CriarCardPokemon.js";

// window.onload(() => {

//     const loader = document.querySelector('[data-loader]');
// })

const inputSearch = document.querySelector('[data-search]');

const searchPokemon = (evento, listaPokemonsChildren) => {

    const pokemonSearch = evento.target.value.toLowerCase();
    const resultadoSearch = listaPokemonsChildren.filter(pokemon => 
            pokemon.dataset.pokemonName.includes(pokemonSearch));

    listaPokemonsChildren.forEach(pokemon => pokemon.classList.add("pokemon__content__list__item--hide"))

    if (resultadoSearch.length > 0) {
        resultadoSearch.forEach(pokemon => pokemon.classList.remove("pokemon__content__list__item--hide"));
    }
    
}

const typePokemon = (arrayType) => {

    let type = [];

    arrayType.forEach((array) => type.push(array.type.name));

    type = type.join(", ");

    return type;
}

const exibirPokemons = async () => {

    const arrayPokemons = await fetchPokemon();

    const arrayPokemonsInfo = arrayPokemons.map((pokemon) => {

        return {
            id: pokemon.id,
            nome: pokemon.name,
            tipo: typePokemon(pokemon.types),
            imagem: pokemon.sprites.other['official-artwork'].front_default
        }
    })

    criarCardPokemon(arrayPokemonsInfo);

    const listaPokemonsChildren = Array.from(document.querySelector('[data-list-pokemons]').children);

    inputSearch.addEventListener('input', (evento) => searchPokemon(evento, listaPokemonsChildren));
}

exibirPokemons();
