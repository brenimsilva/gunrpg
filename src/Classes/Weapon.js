import Item from "./Item.js";

export default class Weapon extends Item {
  constructor(id, name, damage, bodyPart, type, rarity, dropRate, value) {
    super(name, value, dropRate, rarity);
    this.damage = damage;
    this.bodyPart = bodyPart;
    this.type = type;
    this.id = id;
  }

  getData() {
    return `Nome: ${this.name},\n Damage: ${this.damage},\n BodyPart: ${this.bodyPart},\n Type: ${this.type}`;
  }
}
