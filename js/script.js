const input = document.querySelector('#currency-input');
const btnPesquisa = document.querySelector('#search-button');
const btnSave = document.querySelector('#save');
const listUl = document.querySelector('#currency-list');

const criarList = (moeda) => {
  const li = document.createElement('li');
  li.innerHTML = `${moeda[0]}: ${moeda[1]}`;
  listUl.appendChild(li);
};

btnSave.addEventListener('click', () => {
  const saveList = listUl.innerHTML;
  localStorage.setItem('saveList', saveList);
});

btnPesquisa.addEventListener('click', async () => {
  const inputValue = input.value;
  const inputReturn = await fetchCurrency(inputValue);
  const { rates } = inputReturn;
  const arrayData = Object.entries(rates);
  listUl.innerHTML = '';
  arrayData.forEach((moeda) => {
    criarList(moeda);
  });
});

window.onload = () => {
  listUl.innerHTML = localStorage.getItem('saveList');
};