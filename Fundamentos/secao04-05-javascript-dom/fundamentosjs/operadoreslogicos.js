//operadores lógicos
//Os valores booleanos podem ser “true” ou “false”. Eles serão de extrema importância para a construção de lógicas no momento em que estivermos desenvolvendo nossas aplicações. A próxima ferramenta de trabalho que iremos aprender serão os operadores lógicos. Eles não são utilizados só na programação, mas no estudo da lógica em si e no seu dia a dia (e com bastante frequência). A principal funcionalidade desses operadores é determinar a lógica entre dois valores ou variáveis.

//Na linguagem JavaScript, temos três principais operadores lógicos: &&, || e o !. Podemos nos referir a eles como “AND”, “OR” e “NOT”, respectivamente.

//Essas ferramentas não vão te acompanhar apenas no JavaScript, mas em toda a sua carreira. Por isso, é muito importante praticar bastante e ficar bem familiarizado com o conceito de cada um deles.



//if (bebida === 'cafézinho' && comida === 'pão na chapa') {
 // //console.log('Muito obrigado pela refeição :)');
//} else {
//  console.log('Acho que houve um engano com meu pedido');
//}

//O operador “AND” (ou &&, no JavaScript) é binário. O que significa que ele precisa de dois elementos para funcionar corretamente.
//ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras.
//const conditionOne = false;
//const conditionTwo = true;

//console.log(conditionOne && conditionTwo);

//console.log(true && true);   // true
//console.log(true && false);   // false
//console.log(false && true);   // false
//console.log(false && false);    // false

const currentHour= 25;
let menssagem= "";

if(currentHour >= 22){
  menssagem =  "Não deveriamos comer nada";
}
else if (currentHour >= 18 && currentHour < 22){
  menssagem = "Rango da noite, vamos jantar :D";
}
else if( currentHo >=14  && currentHour<18){
  menssagem = "Vamos fazer um bolo pro café da tarde?"
}
if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour < 11 && currentHour < 4) {
  message = "Hmmm, cheiro de café recém passado";
}