export default class Weapon {
  constructor(id, name, damage, bodyPart, type, rarity) {
    this.name = name;
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
