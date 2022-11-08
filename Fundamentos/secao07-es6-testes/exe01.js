const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1 
console.log(factorial(3));

// fatorial é a multiplicação de todos os numeros antecessores daquele até chegar a 1, por isso ja começa do 1 o else. 
// 5!=5*4*3*2*1
