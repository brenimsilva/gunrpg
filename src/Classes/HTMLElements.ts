export default class HTMLElements {
  readonly HP: HTMLElement;
  readonly AP: HTMLElement;
  readonly PP: HTMLElement;
  readonly Inventory: HTMLElement;
  readonly Gold: HTMLElement;
  readonly Exp: HTMLElement;
  readonly Lvl: HTMLElement;
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
