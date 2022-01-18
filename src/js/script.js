var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

/*let currentNumber = 0;

const currentNumberWrapper = document.getElementById('currentNumber');

function increment() {
	currentNumber++;
	currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
	currentNumber--;
	currentNumberWrapper.innerHTML = currentNumber;
}

function test() {
	kdowkdpo;
}*/