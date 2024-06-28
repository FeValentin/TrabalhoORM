# ORM - Manipulando objetos literais
- O que é:
O ORM, ou Mapeador de Relação de Objetos, é uma técnica utilizada no desenvolvimento de software que permite mapear objetos em um sistema orientado a objetos. Neste projeto, será aplicado no JavaScript, utilizando objetos literais.

## Instalação
Para instalar o projeto, você deve usar o npm.
1. Acesse o terminal (prompt de comando).
2. Instale o projeto; Digite "npm install projeto-orm".
3. Crie um pacote json; Digite "npm init -y".
4. Mude o tipo de pacote para módulo; Acesse o arquivo "package.json", e insira "type": "module".
Agora, a ferramenta já está pronta para uso.


## Uso
## Importação
Crie um arquivo .js, e importe a ORM; Digite "import ORM from "projeto-orm/ORM.js".

# Configuração
E então crie qualquer classe que herde a ORM e a instancie. Por exemplo:
class Pessoa extends ORM {
}

const pessoa = new Pessoa();


## Operações CRUD
## 1. Cadastrar
pessoa.cadastrar( Objeto Literal )
console.log(pessoa.cadastrar( {Nome: "Josué", Idade: 24} ));

## 2. Alterar
pessoa.alterar(id, Novo Objeto )
console.log(pessoa.alterar(1, {Nome: "Jonathan", Idade: 29} ));

## 3. Buscar
pessoa.buscar(id)
console.log(pessoa.buscar(1));

## 4. Excluir
pessoa.excluir(id)
console.log(pessoa.excluir(1));

## 5. Listar Todos
pessoa.listar()
console.log(pessoa.listar());