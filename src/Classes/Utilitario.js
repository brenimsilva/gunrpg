export default class Utilitario {
    static generateID(prefix, sufix) {
        this.id += 1;
        let uniqueId = `${prefix}${this.id}${sufix}`;
        return uniqueId;
    }
}
Utilitario.id = 0;
