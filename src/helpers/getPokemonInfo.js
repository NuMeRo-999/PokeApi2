import fetch from "node-fetch";
import fs from "fs/promises"

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
const filePath = "server/db.json";

/**
 * Función que accede a la pokeApi y traerá los pokemons (20) y guardará la info en server/db.json
 */
async function getPokemonInfo() {
  try {
    const response = await fetch(apiURL); // fetch de node-fetch para backend
    const data = await response.json();
    const { results } = data;
    const pokemonData = [];

    for (const pokemon of results ) {
      const response = await fetch(pokemon.url);
      const data = await response.json();

      const { abilities, name, sprites, types } = data;
      const typesData = []; // Cambio aquí: inicializa como un array vacío

      for (const type of types) {
        typesData.push({ type: type.type.name }); // Agrega cada tipo al array
      }

      const images = {
        url_front: sprites.front_default,
        url_back: sprites.front_default
      }

      const pokemonInfo = {
        name: name,
        url: pokemon.url,
        images,
        abilities: abilities.map(el => el.ability.name),
        typesData
      }

      pokemonData.push(pokemonInfo)

    };

    await fs.writeFile(filePath, JSON.stringify( {pokemonData}, null, 2) ); // Las llaves son cruciales para guardar la clave : valor en un objeto

  } catch (error) {
    console.error("Error en acceso api, Error: "+error.message);
  }
}

getPokemonInfo();