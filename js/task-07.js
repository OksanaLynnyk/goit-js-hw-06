
const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function sizeChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

control.addEventListener('input', sizeChange);