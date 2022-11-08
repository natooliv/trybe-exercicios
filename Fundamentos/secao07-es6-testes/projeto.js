function formFild() {
  const getName = document.getElementById('nome');
  const getNick = document.getElementById('input-name');
  const getLastNick = document.getElementById('input-lastname');

  getName.innerText = `Nome: ${getNick.value} ${getLastNick.value}`;

  const formsEmail = document.getElementById('email');
  const emailValido = document.getElementById('input-email');
  formsEmail.innerText = `Email: ${emailValido.value}`;

function formFild2() {
  const subject = document.getElementsByClassName('subject');
  const sub = [];
  for (let index = 0; index < subject.length; index += 1) {
    const arrayVazio= subject[index];
    if (arrayVazio.checked === true) {
      sub.push(arrayVazio.value);
    }
  }
  return sub;
}

const formularioFinal = document.getElementById('form-data');
const result = () => {
  const create = document.createElement('p');
  const familys = document.querySelector('input[name="family"]:checked');

  create.innerText = `Família: ${familys.value}`;

  formularioFinal.appendChild(create);
};
const observation = () => {
  const create = document.createElement('p');
  const txt = document.getElementById('textarea').value;

  create.innerText = `Observações: ${txt}`;
  formularioFinal.appendChild(create);
};
const forms = document.getElementById('evaluation-form');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  forms.style.display = 'none';

  formulario();
  result();
  observation();

  const casaHouse = document.getElementById('casa');
  const inputHause = document.getElementById('house');
  casaHouse.innerText = `Casa: ${inputHause.value}`;

  const avaliationForm = document.getElementById('avaliacao');
  const inputForm = document.querySelector('input[name="rate"]:checked');
  avaliationForm.innerText = `Avaliação: ${inputForm.value}`;

  const materiasTech= document.getElementById('materias');
  materiasTech.innerText = `Matérias: ${formFild2().join(', ')}`;
});
