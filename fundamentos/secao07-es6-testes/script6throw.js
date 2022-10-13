// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, 3));
// se caso for um valor diferente de um 'numero', entra o fluxo de exceção para dar uma tratativa
// como no caso fosse : console.log(sum(2,'3'))

// para isso precisa lançar o erro, para depois fazer a tratativa dele.
const verificaValores = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') { // se o tipo de a for diferente de  numero e o tipo de b foi diferente de number
    throw new Error('Erro!Os valores, precisam ser númericos!')
  } // criando um erro e dando uma mensagem a ele, caso não for numero, o new é um objeto que é o ErroR é um objeto nativo que representa um erro, e conseguimos customizar.
}
console.log(verificaValores(5, '5'));

