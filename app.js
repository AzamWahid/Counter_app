let count = 0;
let countDiv = document.querySelector('.count');
countDiv.innerHTML = count;

function decrease() {
    count--;
    countDiv.innerHTML = count;
    fontColorChnage(count);
}

function increase() {
    count++;
    countDiv.innerHTML = count;
    fontColorChnage(count);
}

function reset() {
    count=0;
    countDiv.innerHTML = count;
    fontColorChnage(count);
}

function fontColorChnage(pValue) {
    countDiv.style.color = pValue < 0 ? 'red' :  pValue > 0 ? 'green' : 'black';
}