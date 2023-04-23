const btnOne = document.querySelector('button[data-action ="decrement"]')
const value = document.querySelector('#value')
const btnTwo = document.querySelector('button[data-action ="increment"]')
let counterValue = 0;

const updateCounterValue = () => {
    value.textContent = counterValue;
}

const decrement = () => {
    counterValue--;
    updateCounterValue();
}
const increment = () => {
    counterValue++;
    updateCounterValue();
}

btnOne.addEventListener('click', decrement);
btnTwo.addEventListener('click', increment);
