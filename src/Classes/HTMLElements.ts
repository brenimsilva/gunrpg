export default class HTMLElements {
  readonly HP: HTMLElement | null;
  readonly AP: HTMLElement | null;
  readonly PP: HTMLElement | null;
  readonly Inventory: HTMLElement | null;
  readonly Gold: HTMLElement | null;
  readonly Exp: HTMLElement | null;
  readonly Lvl: HTMLElement | null;
  constructor(human: boolean) {
    if (human) {
      this.HP = document.getElementById("");
      this.AP = document.getElementById("");
      this.PP = document.getElementById("");
      this.Inventory = document.getElementById("");
      this.Gold = document.getElementById("");
      this.Exp = document.getElementById("");
      this.Lvl = document.getElementById("");
    } else {
      this.HP = document.getElementById("");
      this.AP = document.getElementById("");
      this.PP = document.getElementById("");
      this.Inventory = document.getElementById("");
      this.Gold = document.getElementById("");
      this.Exp = document.getElementById("");
      this.Lvl = document.getElementById("");
    }
  }
}
