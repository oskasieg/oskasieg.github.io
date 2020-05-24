document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const submitButton = document.querySelector('.form__buttonSubmit');
  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');

  let nameValue, emailValue, messageValue;

  name.addEventListener('input', (e) => {
    nameValue = e.target.value;
  });

  email.addEventListener('input', (e) => {
    emailValue = e.target.value;
  });

  message.addEventListener('input', (e) => {
    messageValue = e.target.value;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  submitButton.addEventListener('click', () => {

});
