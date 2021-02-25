export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img || data.sprites.back_default
    // this.sprites = data.sprites.back_default
    this.description = data.description
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.user = data.user
    this.id = data.id || data._id
    this.abilities = data.abilities || []

    if (Array.isArray(this.description)) {
      this.description = this.types.join("\n")
    }
  }

  get ActiveTemplate() {
    return /*html*/`
    <div class="card">
                    <div class="card-body">
                    <img src="${this.img}" alt="">
                        <h3 class="card-title">Pokemon Name: ${this.name}</h3>
                        <h4 class="card-text">Type: ${this.Types}</h4>
                        <p class="card-text">Weight: ${this.weight}</p>
                        <p class="card-text">Height: ${this.height}</p>
                        <p class="card-text">Abilities: ${this.Abilities}</p>
                        ${this.ButtonBuilder}
                    </div>
      </div>
    `
  }

  get Types() {

    let template = ""
    this.types.forEach(type => {
      template += type.type.name + " "

    }); return template
  }
  // get Sprites() {
  //   let template = ""
  //   this.sprites.forEach(sprite => {
  //     template += sprite.back_default + " "

  //   }); return template
  // }

  get Abilities() {
    let template = ""
    this.abilities.forEach(ability => {
      template += ability.ability.name + " "

    }); return template
  }

  get ButtonBuilder() {
    if (this.user) {
      return `
      <button class="btn btn-danger" onclick="app.myPokemonsController.uncatchPokemon('${this.id}')">Uncatch Pokemon</button>
      `
    }
    return `
      <button class="btn btn-success" onclick="app.myPokemonsController.catchPokemon()">Catch Pokemon</button>
      `
  }

}


