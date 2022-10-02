import Item from "./Item.js";

export default class Weapon extends Item {
  constructor(id, name, damage, bodyPart, type, rarity) {
    super(id, name);
    this.damage = damage;
    this.bodyPart = bodyPart;
    this.type = type;
    this.rarity = rarity;
    this.id = id;
  }

  getData() {
    return `Nome: ${this.name},\n Damage: ${this.damage},\n BodyPart: ${this.bodyPart},\n Type: ${this.type}`;
  }
}
