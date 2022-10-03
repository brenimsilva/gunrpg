import Item from "./Item.js";
import Rarity from "./Rarity.js";
import Utilitario from "./Utilitario.js";

export default class Weapon extends Item {
  damage: number;
  bodyPart: string;
  type: string;
  id: string;
  constructor(
    name: string,
    damage: number,
    bodyPart: string,
    type: string,
    rarity: Rarity,
    dropRate: number,
    value: number
  ) {
    super(name, value, dropRate, rarity);
    this.damage = damage;
    this.bodyPart = bodyPart;
    this.type = type;
    this.id = Utilitario.generateID("W", this.name.slice(0, 1));
  }

  getData() {
    return `Nome: ${this.name},\n Damage: ${this.damage},\n BodyPart: ${this.bodyPart},\n Type: ${this.type}`;
  }
}
