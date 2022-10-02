import Rarity from "./Rarity.js";
import Utilitario from "./Utilitario.js";

export default class Item {
  readonly id: string;
  readonly name: string;
  readonly value: number;
  readonly dropRate: number;
  readonly rarity: Rarity;
  constructor(name: string, value: number, dropRate: number, rarity: Rarity) {
    this.name = name;
    this.id = Utilitario.generateID("I", this.name.slice(0, 1));
    this.value = value;
    this.dropRate = dropRate;
    this.rarity = rarity;
  }
}
