const produto = -1;
const venda = -3;

let valorCustoTotal = produto * 0.2;
let totalGastos =  ( valorCustoTotal + produto);
let lucro = (venda -  totalGastos) * 1000

if (produto >0 && venda >0){
     console.log(lucro)
}
else{
  console.log("Erro")
}