import HTMLElements from "./HTMLElements";
import Item from "./Item";
export default class Player {
  id: Number;
  name: String;
  baseHP: Number;
  HP: Number;
  baseATK: Number;
  baseDEF: Number;
  AtributePoints: Number;
  PercPoints: Number;
  equipments: Object;
  inventory: Array<Item>;
  extraAtributes: Object;
  percs: Array<Object>;
  initiateInventory: Function;
  HTMLElements: HTMLElements;

  constructor(
    id: Number,
    name: String,
    baseHP: Number,
    baseATK: Number,
    baseDEF: Number,
    HTMLElements: HTMLElements
  ) {
    this.AtributePoints = 0;
    this.PercPoints = 0;
    this.id = id;
    this.name = name;
    this.baseHP = baseHP;
    this.HP = baseHP;
    this.baseDEF = baseDEF;
    this.baseATK = baseATK;

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
    this.HTMLElements = HTMLElements;

    //Methods
    this.initiateInventory = function (items: Array<Item>) {
      this.inventory = [...items];
    };
  }
}
