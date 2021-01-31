const criarCardPokemon = (pokemons) => {

    const listaPokemons = document.querySelector('[data-list-pokemons]');

    pokemons.forEach((pokemon) => {

        const elementos = criarDOMElemento();

        elementos.img.setAttribute("src", pokemon.imagem);
        elementos.h2.textContent = pokemon.nome
        elementos.p.textContent = pokemon.tipo
        elementos.li.setAttribute('data-pokemon-name', pokemon.nome);

        listaPokemons.appendChild(elementos.li);
    })
}

const criarDOMElemento = () => {

    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    li.classList.add('pokemon__content__list__item');
    figure.classList.add('figure__pokemon');
    img.classList.add('image__pokemon');
    section.classList.add('info__pokemon');
    h2.classList.add('info__pokemon__nome');
    p.classList.add('info__pokemon__tipo');

    li.appendChild(figure);
    li.appendChild(section);
    figure.appendChild(img);
    section.appendChild(h2);
    section.appendChild(p);

    return { li, figure, img, section, h2, p };
}

export {
    criarCardPokemon
}