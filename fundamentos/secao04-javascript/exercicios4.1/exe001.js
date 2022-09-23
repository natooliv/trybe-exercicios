//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for(let  index = 0 ; index < numbers.length ; index +=1){
 // console.log(numbers[index]);
//}
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
//let resultado = 0;
//for(let  index = 0 ; index < numbers.length ; index +=1){
 //resultado += numbers[index];
//}
//console.log(resultado);

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
//let resultado = 0;
//for(let  index = 0 ; index < numbers.length ; index +=1){
//}
 //resultado = resultado / numbers.length;

 //if(resultado > 20){
//  console.log("Valor maior que 20");
//}else{
 // console.log("Valor menor ou igual a 20");
//}

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
// let maiorNumero=[]

// for(let  index = 0 ; index < numbers.length ; index +=1){
//   if(numbers[index] > maiorNumero){
//     maiorNumero = numbers[index];
//   }
// }
// console.log(maiorNumero)
//----------------------------------------------------
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let resultado = 0;

// for(let  index = 0 ; index < numbers.length ; index +=1){
//   if(numbers[index] % 2 !== 0 ){
//  resultado +=1;
// }
// if (resultado == 0){
//   console.log("nenhum resultado encontrado");
// }else {
// console.log(resultado); 
// }
//--------------------------------------------------------
 // levar para monitoria



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let menorNumero= numbers [0];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}

console.log(menorNumero);
