import ORM from "./ORM/ORM.js";

class Carro extends ORM {
  constructor() {
    super();
  }
}

const carro = new Carro();

console.log(
  carro.cadastrar( { Marca: "Ford", Modelo: "Charger", Ano: 2021 } )
);
console.log(
  carro.cadastrar({ Marca: "Honda", Modelo: "Civic", Ano: 1990 })
);

console.log(
  carro.alterar(1, {Marca: 'Volkswagen', Modelo: 'Fusca', Ano: 1982 })
);

console.log(
  carro.listar()
);

console.log(carro.buscar(2))
console.log(carro.excluir(1))