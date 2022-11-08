const verificaValores = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') { // se o tipo de a for diferente de  numero e o tipo de b foi diferente de number
    throw new Error ('Erro!Os valores, precisam ser númericos!')
  } // criando um erro e dando uma mensagem a ele, caso não for numero, o new é um objeto que é o ErroR é um objeto nativo que representa um erro, e conseguimos customizar.
}

const soma=(a,b) => { // o try é responsavel por executar o codigo, se caso ocorrer o erro usa o catch
 try {
    verificaValores(a,b)
    return a + b; // chama a função com os parametros e o retorno,só será feita a soma dos valores quando for verificada se são numericos
 }      
  catch(erro){ // depois da palavra catch pode ser uma variavel com qualquer nome 
  return erro.menssage //  a tratativa, caso algum erro aconteça dentro do bloco, o messange é a propriedade do erro para ver qual tipo de erro.
 } // catch é pegar o erro e tratar, ao inves do erro quebrar.
}
console.log(soma(2,'6'))