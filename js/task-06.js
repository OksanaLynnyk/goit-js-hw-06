

const textInput = document.querySelector('#validation-input');
const dataLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
    const valueLength = event.target.value.trim().length;
    const isValidLength = Number(dataLength) === valueLength;

    textInput.classList.toggle('valid', isValidLength);
    textInput.classList.toggle('invalid', !isValidLength);
});