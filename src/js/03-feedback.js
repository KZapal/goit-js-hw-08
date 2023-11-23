import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);

form.addEventListener(
  `input`,
  throttle(event => {
    const dane = {
      mail: form.email.value,
      message: form.message.value,
    };
    if (dane) {
      localStorage.setItem(`feedback-form-state`, JSON.stringify(dane));
    }
  }, 500)
);

form.addEventListener(`submit`, event => {
  event.preventDefault();
  if (form.message.value && form.email.value) {
    form.message.value = '';
    form.email.value = '';
    console.log(JSON.parse(localStorage.getItem(`feedback-form-state`)));
    localStorage.clear();
  }
});

let obj = JSON.parse(localStorage.getItem(`feedback-form-state`));
if (obj) {
  form.email.value = obj.mail;
  form.message.value = obj.message;
}
