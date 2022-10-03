import Utilitario from "./Utilitario.js";

export default class Rarity {
  id: string;
  name: string;
  color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.id = Utilitario.generateID("R", this.name.slice(0, 1));
    this.color = color;
  }
}
