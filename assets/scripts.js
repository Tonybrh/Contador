let currentNumberWrapper = document.querySelector('.currentNumber');
let currentNumber = 0;

function increment() {
    if (currentNumber < 1000000) {
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
