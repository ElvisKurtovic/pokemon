// import ValuesController from "./Controllers/ValuesController.js";

import ApiPokemonsController from "./Controllers/ApiPokemonsController.js";
import MyPokemonsController from "./Controllers/MyPokemonsController.js";

class App {
  // valuesController = new ValuesController();
  apiPokemonsController = new ApiPokemonsController();
  myPokemonsController = new MyPokemonsController();
}

window["app"] = new App();
