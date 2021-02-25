import { ProxyState } from "../AppState.js";
import { myPokemonsService } from "../Services/MyPokemonsService.js"

function _drawMyPokemons() {
  let pokemons = ProxyState.myPokemons
  // console.log(pokemons)
  // console.log("draw fn");
  let template = ""
  pokemons.forEach(p => template += `<li onclick="app.myPokemonsController.setActivePokemon('${p.name}')" > ${p.name} </li>`)
  document.getElementById("my-pokemons").innerHTML = template;
}
export default class MyPokemonsController {
  constructor() {
    console.log("mypokemonscontroller");
    ProxyState.on("myPokemons", _drawMyPokemons)
  }

  catchPokemon() {
    myPokemonsService.catchPokemon()
  }

  setActivePokemon(name) {
    myPokemonsService.setActivePokemon(name)
  }

  uncatchPokemon(id) {
    myPokemonsService.uncatchPokemon(id)
  }
}