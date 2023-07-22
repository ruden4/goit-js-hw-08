import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('input');
const messageInputEl = document.querySelector('textarea');

const saveFormState = () => {
  const formState = {
    email: emailInputEl.value,
    message: messageInputEl.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

emailInputEl.addEventListener('input', throttle(saveFormState, 500));
messageInputEl.addEventListener('input', throttle(saveFormState, 500));
window.addEventListener('DOMContentLoaded', () => {
  const savedFormState = localStorage.getItem('feedback-form-state');

  if (savedFormState) {
    const formState = JSON.parse(savedFormState);

    emailInputEl.value = formState.email;
    messageInputEl.value = formState.message;
  }
});
formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const formState = {
    email: emailInputEl.value,
    message: messageInputEl.value,
  };

  console.log(formState);

  localStorage.removeItem('feedback-form-state');
  emailInputEl.value = '';
  messageInputEl.value = '';
});