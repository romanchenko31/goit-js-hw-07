const textInput = document.querySelector('#name-input');
const textSpan = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {

    textSpan.textContent = event.currentTarget.value;
});

