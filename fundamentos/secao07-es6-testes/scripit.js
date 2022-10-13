const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (array) => {
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
};
//console.log(sortOddsAndEvens(array));
//  console.log(oddsAndEvens.sort((a,b)=> b-a))


// console.log(oddsAndEvens.sort((a,b)=> a-b))
console.log(oddsAndEvens.reduce((acumulador,atual)=> {
  return acumulador +  atual ;
},0));
// Foi recebido um array de numeros numa constante, nisso, recebi um novo array, foi necessário abrir um loop já começando na posição 1
// foi criado um novo loop dentro deste que é do nosso array da const , e que esse numero fosse  menor que o array que atribui iria andar mais 1
// se o array criado na posição index foose maior que o array na posição index do array da const, declarei uma variavel que 