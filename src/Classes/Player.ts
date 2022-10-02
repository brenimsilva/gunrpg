import HTMLElements from "./HTMLElements.js";
import Item from "./Item.js";
import Utilitario from "./Utilitario.js";
export default class Player {
  id: string;
  name: string;
  baseHP: number;
  HP: number;
  baseATK: number;
  baseDEF: number;
  AtributePoints: number;
  PercPoints: number;
  equipments: Object;
  inventory: Array<Item>;
  extraAtributes: Object;
  percs: Array<Object>;
  initiateInventory: Function;
  human: boolean;
  HTMLElements: HTMLElements;
  constructor(
    name: string,
    baseHP: number,
    baseATK: number,
    baseDEF: number,
    human: boolean
  ) {
    this.human = human;
    this.AtributePoints = 0;
    this.PercPoints = 0;
    this.name = name;
    this.id = Utilitario.generateID("P", this.name.slice(0, 1));
    this.baseHP = baseHP;
    this.HP = baseHP;
    this.baseDEF = baseDEF;
    this.baseATK = baseATK;
    console.log(this.id);

    //Items
    this.equipments = {
      weapon: {},
      armor: {},
      shield: {},
      ring: {},
      necklace: {},
    };
    this.inventory = [];

    //Extra
    this.extraAtributes = {
      HP: 0,
      ATK: 0,
      DEF: 0,
    };
    this.percs = [];

    //HTML Elements
    this.HTMLElements = new HTMLElements(this.human);

    //Methods
    this.initiateInventory = function (items: Array<Item>) {
      this.inventory = [...items];
    };
  }
}
