console.log("Log 1");

setTimeout(() => console.log("Async log"), 1000);

console.log("Log 2");
console.log("Log 3");
// setTimeout é uma função que recebe dois parâmetros: o primeiro é uma função que será executada no futuro e o segundo parâmetro é o tempo em milissegundos (1 segundo = 1000 milissegundos)