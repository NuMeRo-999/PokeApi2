import renderBackCardPokemon from "./src/components/renderCardPokemon/renderBackCardPokemon";
import renderCardPokemon from "./src/components/renderCardPokemon/renderCardPokemon";

const URL = "http://localhost:4000/pokemonData"
const app = document.querySelector('#app');

fetch(URL)
  .then(response => {
    if( !response.ok ){
      throw new Error("Couldn't find Pokemon");
    }
    return response.json();
  })
  .then( data => {
    data.map( pokemon => {
      renderCardPokemon(app, pokemon, () => console.log("hola"))
    } )
  })
  .catch( err => console.error(err.message))

document.addEventListener('click', e => {
  const card = e.target.parentElement;
  if(card.classList.contains('card')){
    
    if(card.classList.contains('volteado')){
      card.style.animation = "flip-horizontal-reverse 0.4s both";
      card.classList.remove('volteado');
    }else{
      card.style.animation = "flip-horizontal-bottom 0.4s both";
      card.classList.add('volteado');

      fetch(URL)
      .then(response => {
      if( !response.ok ){
        throw new Error("Couldn't find Pokemon");
      }
        return response.json();
     })
     .then( data => {
      const filtro = data.filter(e => e.name == card)
      renderBackCardPokemon(card, filtro, () => console.log("hola"))
    })
    .catch( err => console.error(err.message))
    }
  }

})