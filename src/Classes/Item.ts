import Rarity from "./Rarity";

export default class Item {
  id: number;
  name: string;
  value: number;
  dropRate: number;
  rarity: Rarity;
  constructor(
    id: number,
    name: string,
    value: number,
    dropRate: number,
    rarity: Rarity
  ) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.dropRate = dropRate;
    this.rarity = rarity;
  }
}
