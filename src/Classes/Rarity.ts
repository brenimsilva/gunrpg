import Utilitario from "./Utilitario.js";

export default class Rarity {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.id = Utilitario.generateID("R", this.name.slice(0));
    this.color = color;
  }
}
