document.querySelectorAll('.number')
    .forEach( el => el.addEventListener('click', clickNumber));
document.querySelectorAll('.operation')
    .forEach( el => el.addEventListener('click', operation));
document.querySelector('.calc').addEventListener('click', calc);
document.querySelector('.clear').addEventListener('click', clear);
const display = document.querySelector('.display');
    
function clickNumber(event) {
    display.value += event.target.innerText;
}
function operation(event) {
    display.value += event.target.innerText;
}
function calc() {
    display.value = eval(display.value);
}
function clear() {
    display.value = ' ';
}
