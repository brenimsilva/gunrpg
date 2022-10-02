import Utilitario from "./Utilitario.js";
export default class Rarity {
  constructor(name, color) {
    this.name = name;
    this.id = Utilitario.generateID("R", this.name.slice(0));
    this.color = color;
  }
}
