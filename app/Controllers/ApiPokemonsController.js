import { ProxyState } from "../AppState.js";
import { apiPokemonsService } from "../Services/ApiPokemonsService.js"

function _drawPokeApiPokemons() {
  let pokemons = ProxyState.pokeApiPokemons
  // console.log(pokemons)
  // console.log("draw fn");
  let template = ""
  pokemons.forEach(p => template += `<li onclick="app.apiPokemonsController.setActivePokemon('${p.name}')"> ${p.name} </li>`)
  document.getElementById("api-pokemons").innerHTML = template;

}

function _drawActivePokemons() {
  if (ProxyState.activePokemon) {
    document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.ActiveTemplate
  } else {
    document.getElementById("active-pokemon").innerHTML = ""
  }
}

export default class ApiPokemonsController {
  constructor() {
    console.log("apipokemonscontroller");
    ProxyState.on("pokeApiPokemons", _drawPokeApiPokemons)
    ProxyState.on("activePokemon", _drawActivePokemons)
  }

  setActivePokemon(index) {
    console.log(index)
    apiPokemonsService.setActivePokemon(index)
  }
}