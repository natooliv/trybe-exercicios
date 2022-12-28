const requestURL = 'https://api.exchangerate.host/latest'
const converter = document.querySelector ('#moedas');
const botao =  document.querySelector('.btn');
const conteiner =  document.querySelector('#conteiner');

const moedasConvertidas = ()=> {
  fetch(requestURL)
  .then(response => response.json())
  .then(data => data.rates)
  .then(json => carregapagina(json));

  