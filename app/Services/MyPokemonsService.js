import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonsService {


  constructor() {
    console.log("mypokemonsserv");
    this.getMyPokemons()
  }

  async getMyPokemons() {
    try {
      let res = await sandboxApi.get("")
      console.log(res)
      ProxyState.myPokemons = res.data.map(p => new Pokemon(p))
      console.log(ProxyState.myPokemons)
    } catch (error) {
      console.error(error)
    }
  }

  async catchPokemon() {
    try {
      let res = await sandboxApi.post("", ProxyState.activePokemon)
      console.log(res)
      // this.getMyPokemons()
      ProxyState.myPokemons = [...ProxyState.myPokemons, new Pokemon(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  setActivePokemon(name) {
    console.log(ProxyState.myPokemons)
    let activePokemon = ProxyState.myPokemons.find(p => p.name == name)
    ProxyState.activePokemon = activePokemon

  }

  async uncatchPokemon(id) {
    try {
      await sandboxApi.delete(id)
      this.getMyPokemons()
      ProxyState.activePokemon = null
    } catch (error) {
      console.error(error)
    }
  }

}

export const myPokemonsService = new MyPokemonsService();
