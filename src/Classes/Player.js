export default class Player {
  constructor(ID, name, baseHP, baseATK, baseDEF) {
    this.id = ID;
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
    this.percs = {};

    //HTML Elements
    this.HTML_HP;
    this.HTML_INFO;
    this.HTML_SELECT;
    this.HTML_NAME;
    this.HTML_INVENTORY;

    //Methods
    this.initiateInventory = function (items) {
      this.inventory = [...items];
    };
  }
}

// const playerStats = {
//   playerHp: 20,
//   playerAtk: 1,
//   playerDef: 1,
//   playerEquipments: {
//     weapon: {},
//     armor: {},
//     shield: {},
//   },
//   playerInventory: [...weapons],
// };
