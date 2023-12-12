const imagenTiposMap = {
  normal: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20221208180705/Tipo_normal_EP.png/120px-Tipo_normal_EP.png',
  fire: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20221208180625/Tipo_fuego_EP.png/120px-Tipo_fuego_EP.png',
  water: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/59/latest/20221208180426/Tipo_agua_EP.png/120px-Tipo_agua_EP.png',
  electric: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/38/latest/20221208180452/Tipo_eléctrico_EP.png/120px-Tipo_eléctrico_EP.png',
  grass: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a7/latest/20221208180710/Tipo_planta_EP.png/120px-Tipo_planta_EP.png',
  ice: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/17/latest/20221208180641/Tipo_hielo_EP.png/120px-Tipo_hielo_EP.png',
  fighting: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5f/latest/20221208180651/Tipo_lucha_EP.png/120px-Tipo_lucha_EP.png',
  poison: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/11/latest/20221208180751/Tipo_veneno_EP.png/120px-Tipo_veneno_EP.png',
  ground: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c9/latest/20221208180742/Tipo_tierra_EP.png/120px-Tipo_tierra_EP.png',
  flying: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9a/latest/20221208180800/Tipo_volador_EP.png/120px-Tipo_volador_EP.png',
  psychic: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9b/latest/20221208180717/Tipo_psíquico_EP.png/120px-Tipo_psíquico_EP.png',
  bug: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5d/latest/20221208180434/Tipo_bicho_EP.png/120px-Tipo_bicho_EP.png',
  rock: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/88/latest/20221208180726/Tipo_roca_EP.png/120px-Tipo_roca_EP.png',
  ghost: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/03/latest/20221208180503/Tipo_fantasma_EP.png/120px-Tipo_fantasma_EP.png',
  dragon: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b8/latest/20221208180443/Tipo_dragón_EP.png/120px-Tipo_dragón_EP.png',
  dark: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/de/latest/20221208180734/Tipo_siniestro_EP.png/120px-Tipo_siniestro_EP.png',
  steel: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/52/latest/20221208180543/Tipo_acero_EP.png/120px-Tipo_acero_EP.png',
  fairy: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20221208180625/Tipo_fuego_EP.png/120px-Tipo_fuego_EP.png',
  // default: 'ruta/de/imagen/por_defecto.png' 
};
const colorTiposMap = {
  normal: '#a8a878',
  fire: '#f08030',
  water: '#6890f0',
  electric: '#f8d030',
  grass: '#78c850',
  ice: '#98d8d8',
  fighting: '#c03028',
  poison: '#a040a0',
  ground: '#e0c068',
  flying: '#a890f0',
  psychic: '#f85888',
  bug: '#a8b820',
  rock: '#b8a038',
  ghost: '#705898',
  dragon: '#7038f8',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#f0b6bc',
};

export default function renderCardPokemon(container, pokemonData, callback) {


  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '18rem';

  const card_body = document.createElement('div');
  card_body.classList.add('card-body');
  
  const cardImg = document.createElement('img');
  cardImg.src = pokemonData.images.url_front;
  cardImg.classList.add('card-img-top');
  cardImg.alt = pokemonData.name;

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = pokemonData.name.toUpperCase();

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = 'Lorem ipsun';

  card_body.appendChild(cardTitle);
  card_body.appendChild(cardText);

  for (const types of pokemonData.typesData) {
    const typesImgDiv = document.createElement('div');
    typesImgDiv.className = 'typesImgDiv';
    const tipoPokemon = document.createElement('img');
    const nombreTipo = types.type;
    const imagePath = imagenTiposMap[nombreTipo];

    if (!card.style.backgroundColor) {
      card.style.backgroundColor = colorTiposMap[nombreTipo];
    }

    tipoPokemon.src = imagePath;
    typesImgDiv.appendChild(tipoPokemon);
    card_body.appendChild(typesImgDiv);
  }

  card.appendChild(cardImg);
  card.appendChild(card_body);
  container.appendChild(card);
}
