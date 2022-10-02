export default class Player {
    constructor(id, name, baseHP, baseATK, baseDEF, HTMLElements) {
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
        this.initiateInventory = function (items) {
            this.inventory = [...items];
        };
    }
}
