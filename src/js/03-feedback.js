import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onInputs, 500));
refs.form.addEventListener('submit', onSubmit);

let tolocalStoregeValues = {
  email: '',
  message: '',
};

function onInputs(event) {
  if (event.target.type === 'email') {
    tolocalStoregeValues.email = event.target.value;
  } else {
    tolocalStoregeValues.message = event.target.value;
  }

  saveValuesToLS();
}

function saveValuesToLS() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(tolocalStoregeValues)
  );
}

const booleamLS = localStorage.getItem('feedback-form-state');
if (!booleamLS) {
  return;
} else {
  const getValuesOfLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  refs.input.value = getValuesOfLS.email;
  refs.textarea.value = getValuesOfLS.message;

  tolocalStoregeValues.email = getValuesOfLS.email;
  tolocalStoregeValues.message = getValuesOfLS.message;
}

// event is reserved word in function so we may not send it as parameters
// reset form and L.s.
function onSubmit() {
  event.preventDefault();

  console.log(tolocalStoregeValues);

  localStorage.removeItem('feedback-form-state');

  refs.form.reset();
}
