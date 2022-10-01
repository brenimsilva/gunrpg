function Utilitario() {
  this.id = 0;
  this.generateID = function () {
    this.id += 1;
    return this.id;
  };
}

const util = new Utilitario();

export { util };
