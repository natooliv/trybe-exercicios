const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => { // criando array de numeros
for (let index = 1; index < array.length; index++) { //Aqui a iteração vai começar a partir do índice 1 do array
  for (let index2 = 0; index2 < index ; index2++) {
  if (array[index] < array[index2]){
    let posicion = array[index];
    array[index] = array[index2];
    array[index2] = posicion;
  }
  }
  }
  return array;
};
console.log(sortOddsAndEvens(array)); // será necessário alterar essa linha 😉