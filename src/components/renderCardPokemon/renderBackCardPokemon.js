export default function renderBackCardPokemon( container, pokemonData ) {
  const pokemonImg = document.querySelector('.card-img-top');
  const pokemonTitle = document.querySelector('.card-title');
  const pokemonText = document.querySelector('.card-text');
  const pokemonTypes = document.querySelector('.typesImgDiv');

  // console.log(pokemonImg);

  // console.log(pokemonData.images.url_back);
  pokemonImg.src = pokemonData.images.url_back;
  pokemonText.textContent = 'Habilidades'
}