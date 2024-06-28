class ORM {
  constructor() {
    if (new.target === ORM) {
      throw new Error("Classe Abstrata.");
    }
    this._dados = [];
    this._idCounter = 1;
  }

  cadastrar(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error("Objeto inválido.");
    }
    obj.id = this._idCounter++;
    this._dados.push(obj);
    console.log("> Cadastro realizado com sucesso!");
    return obj;
  }

  alterar(id, obj_novo) {
    if (typeof obj_novo !== 'object' || obj_novo === null) {
      throw new Error("Objeto novo inválido.");
    }
    let itemIndex = this._dados.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      obj_novo.id = id;
      let item_antigo = this._dados.splice(itemIndex, 1, obj_novo);
      console.log("> Objeto alterado com sucesso!");
      console.log("> Objeto antigo:\n", item_antigo, "\n\n> Novo objeto:");
      return obj_novo;
    }
    throw new Error("> Objeto não encontrado.");
  }

  excluir(id) {
    const itemIndex = this._dados.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      let item_excluido = this._dados.splice(itemIndex, 1);
      console.log("> Objeto excluído com sucesso:");
      return item_excluido;
    }
    throw new Error("> Objeto não encontrado.");
  }

  listar() {
    console.log("\n> Listando todos os objetos:");
    this._dados.forEach((item) => {
      console.log(item);
    });
    return " ";
  }

  buscar(id) {
    const itemIndex = this._dados.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      console.log("> Objeto encontrado:");
      return this._dados[itemIndex];
    }
    throw new Error("> Objeto não encontrado.");
  }
}

export default ORM;
