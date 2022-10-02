export default class Utilitario {
  static id: number = 0;

  static generateID(prefix: string, sufix: string): string {
    this.id += 1;
    let uniqueId = `${prefix}${this.id}${sufix}`;
    return uniqueId;
  }
}
