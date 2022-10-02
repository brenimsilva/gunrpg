import HTMLElements from "./HTMLElements";
import Item from "./Item";
export default class Player {
  id: number;
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
  HTMLElements: HTMLElements;

  constructor(
    id: number,
    name: string,
    baseHP: number,
    baseATK: number,
    baseDEF: number,
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
