export default class Utilitario {
    /**
     * @param prefix Expects the first letter of the class, Eg: Weapon will generate a 'W' prefix;
     * @param sufix Expects the first letter of the current element, Eg: Potion will generate a 'P' prefix;
     * @returns
     */
    static generateID(prefix, sufix) {
        this.id += 1;
        let uniqueId = `${prefix}${this.id}${sufix}`;
        console.log(uniqueId);
        return uniqueId;
    }
}
Utilitario.id = 0;
