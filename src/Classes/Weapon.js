export default class Weapon {
  constructor(name, damage, bodyPart, type, rarity) {
    this.name = name;
    this.damage = damage;
    this.bodyPart = bodyPart;
    this.type = type;
    this.rarity = rarity;
  }

  getData() {
    return `Nome: ${this.name},\n Damage: ${this.damage},\n BodyPart: ${this.bodyPart},\n Type: ${this.type}`;
  }
}
