import fetch from "node-fetch";
import fs from "fs/promises"

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
const filePath = "server/db.json";

/**
 * Función que accede a la pokeApi y traerá los pokemons (20) y guardará la info en server/db.json
 */
async function fetchAndSave() {
  try {
    const response = await fetch(apiURL); // fetch de node-fetch para backend
    const data = await response.json();
    const { results } = data;

    await fs.writeFile(filePath, JSON.stringify( { results }, null, 2) ); // Las llaves son cruciales para guardar la clave : valor en un objeto

  } catch (error) {
    console.error("Error en acceso api, Error: "+error.message);
  }
}

fetchAndSave();