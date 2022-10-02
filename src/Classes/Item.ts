import Rarity from "./Rarity.js";
import Utilitario from "./Utilitario.js";

export default class Item {
  id: string;
  name: string;
  value: number;
  dropRate: number;
  rarity: Rarity;
  constructor(name: string, value: number, dropRate: number, rarity: Rarity) {
    this.name = name;
    this.id = Utilitario.generateID("I", this.name.slice(0, 1));
    this.value = value;
    this.dropRate = dropRate;
    this.rarity = rarity;
  }
}
