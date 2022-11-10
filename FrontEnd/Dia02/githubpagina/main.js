import './style.css'

const users = document.querySelector('#users');
const btn = document.querySelector('.btn');
const url = 'https://api.github.com/users';
const conteiner = document.querySelector('#conteiner');

const getData = () => {
  const getUser = users.value;
  fetch(`${url}/${getUser}`)
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement('p');
      const img = document.createElement('img');
      p.innerText = data.bio;
      img.src = data.avatar_url;
      conteiner.appendChild(p);
      conteiner.appendChild(img);
    });
};

btn.addEventListener('click', () => {
  getData();
  conteiner.innerHTML = ''
});
