import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class ApiPokemonsService {

  constructor() {
    console.log("api pokemons service");
    this.getApiPokemons()
  }

  async getApiPokemons() {
    try {
      const res = await pokeApi.get("?limit=1118")
      console.log(res)
      ProxyState.pokeApiPokemons = res.data.results
    } catch (error) {
      console.error(error)
    }
  }

  async setActivePokemon(index) {
    try {
      let res = await pokeApi.get(index)
      console.log(res)
      ProxyState.activePokemon = new Pokemon(res.data)
    } catch (error) {
      console.error(error)
    }
  }

}

export const apiPokemonsService = new ApiPokemonsService();