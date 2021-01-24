import { fetchPokemon } from "./fetchPokemon.js";
import { criarCardPokemon } from "./CriarCardPokemon.js";

// window.onload(() => {

//     const loader = document.querySelector('[data-loader]');
// })

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
}

exibirPokemons();
