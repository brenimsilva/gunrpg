export default class HTMLElements {
  HP: HTMLElement;
  AP: HTMLElement;
  PP: HTMLElement;
  Inventory: HTMLElement;
  Gold: HTMLElement;
  Exp: HTMLElement;
  Lvl: HTMLElement;
  constructor(
    HP: HTMLElement,
    AP: HTMLElement,
    PP: HTMLElement,
    Inventory: HTMLElement,
    Gold: HTMLElement,
    Exp: HTMLElement,
    Lvl: HTMLElement
  ) {
    this.HP = HP;
    this.AP = AP;
    this.PP = PP;
    this.Inventory = Inventory;
    this.Gold = Gold;
    this.Exp = Exp;
    this.Lvl = Lvl;
  }
}
