function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b != 0) return a / b
    return 'ERR'
}

function operate(a,b,op) {
    switch(op) {
        case 'ADD':
        return add(a,b)
        case 'SUB':
        return substract(a,b)
        case 'MUL':
        return multiply(a,b)
        case 'DIV':
        return divide(a,b)
    }
}

let operators = document.querySelectorAll(".op");
operators.forEach(x => x.addEventListener('click', operate));

let operatorss = document.querySelectorAll(".digital");
operatorss.forEach(x => x.addEventListener('click', operate));


function operate(e){
    window.console.log(e.target.innerHTML);
    let x = Number(e.target.innerHTML);
    x = x + 3;
    window.console.log(x);
}

// let op = window.prompt("what's your command?")
// let a = Number(window.prompt('a'))
// let b = Number(window.prompt('b'))
// let res = operate(a,b,op)
// console.log(res)
// window.alert(`the result is ${res}`)
