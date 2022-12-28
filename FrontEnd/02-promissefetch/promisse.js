// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => { // construtir da promisse  que recebe uma função com dois parametro. 
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
resolvedPromise()
  .then((response) => {
    console.log(` o número gerado é ${response}.`);
  })
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });
rejectedPromise()
.then((response) => {
  console.log(`resolvedPromise: o número gerado é ${response}.`);
})
.catch((error) => {
  console.log(`Com a promise resolvida, não irá passar pelo catch`);
});

