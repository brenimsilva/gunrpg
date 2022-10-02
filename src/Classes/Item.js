import Utilitario from "./Utilitario.js";
export default class Item {
    constructor(name, value, dropRate, rarity) {
        this.name = name;
        this.id = Utilitario.generateID("I", this.name.slice(0, 1));
        this.value = value;
        this.dropRate = dropRate;
        this.rarity = rarity;
    }
}
