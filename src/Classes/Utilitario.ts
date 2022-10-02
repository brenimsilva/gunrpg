export default class Utilitario {
  static id: number = 0;

  /**
   * @param prefix Expects the first letter of the class, Eg: Weapon will generate a 'W' prefix;
   * @param sufix Expects the first letter of the current element, Eg: Potion will generate a 'P' prefix;
   * @returns
   */
  static generateID(prefix: string, sufix: string): string {
    this.id += 1;
    let uniqueId = `${prefix}${this.id}${sufix}`;
    return uniqueId;
  }
}
