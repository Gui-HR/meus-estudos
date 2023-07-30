// const openModalButton = document.getElementById('openModalButton');
// const modal = document.getElementById('modal');
// const closeModal = document.getElementById('closeModal');

// openModalButton.addEventListener('click', () => {
//   modal.style.display = 'block';
// });

// closeModal.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close');
const form = document.getElementById('form');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  // Aqui você pode fazer o que quiser com os valores do formulário, como enviá-los para um servidor ou processá-los localmente.
  console.log(`Nome: ${name}, Idade: ${age}`);
  modal.style.display = 'none';
});