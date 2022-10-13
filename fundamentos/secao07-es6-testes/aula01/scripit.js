// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);
 
// const testingScope = (escopo) =>{(// arrow function
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// const testingScope = (escopo) =>{(// arrow function
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(`${ifScope},o que estou fazendo aqui ? :O'}`); // usando template literals

// testingScope(true);


// const testingScope = (escopo) =>{(// arrow function
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // usando let para não vazar no escopo
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';// usando const para não vazar do escopo
//     console.log(elseScope);
//   }
//   console.log(`${ifScope},o que estou fazendo aqui ? :O'}`); // usando template literals

// testingScope(true);

const testingScope = (escopo) =>{// arrow function
  if(escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // usando let para não vazar no escopo
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';// usando const para não vazar do escopo
    console.log(elseScope);
  }
  
}
testingScope(true);
// tirou o console.log(`${ifScope},o que estou fazendo aqui ? :O'}`)// usando template literals