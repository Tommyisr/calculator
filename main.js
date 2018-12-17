let dspl = undefined;
let firstArg = undefined;
let secondArg = undefined;
let operator = undefined;
let result = undefined;
document.querySelector(".display").innerHTML = '';

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

// let operators = document.querySelectorAll(".op");
// operators.forEach(x => x.addEventListener('click', math));


let operators = document.querySelectorAll(".op");
operators.forEach(x => x.addEventListener('click', PutNumber));


let results = document.querySelectorAll(".digital");
results.forEach(x => x.addEventListener('click', PutNumber));


function math(e){
    // window.console.log(e.target.innerHTML);
    // dspl += e.target.innerHTML;
    // document.querySelector(".display").innerHTML = dspl;


    /*
    if(firstArg == undefined || operator == undefined) {
        // firstArg = dspl;
        firstArg = document.querySelector(".display").innerHTML
        window.console.log(firstArg);
        dspl = undefined;
        }    
      
     
      
        else secondArg = dspl;
    // dspl = e.target.innerHTML;
    document.querySelector(".display").innerHTML += e.target.innerHTML;
    */
    

    /*
    if (firstArg != undefined && secondArg != undefined)
    {
        result = operate(Number(firstArg), Number(secondArg), operator);
        window.console.log(firstArg);
        window.console.log(secondArg);
        window.console.log(result);
        secondArg = undefined;
        firstArg = result;
    }
    switch(e.target.innerHTML) {
        case '+' :
        operator = 'ADD'
        break
        case '-' :
        operator = 'SUB'
        break
        case 'x' :
        operator = 'MUL'
        break
        case '/' :
        operator = 'DIV'
        break
        


    }
    
    let x = Number(e.target.innerHTML);
    // window.console.log(x);

    */
}

function PutNumber(e) { // buttons '=' and 'CLR'
    // window.console.log(firstArg);
    // window.console.log(secondArg);
    switch(e.target.innerHTML) {
        case '=':
    window.console.log(dspl);
    
    


    
        break;
        case 'CLR':
        dspl = undefined;
        firstArg = undefined
        secondArg = undefined
        document.querySelector(".display").innerHTML = '';
        break;

        default:
        if ( dspl === undefined) dspl = e.target.innerHTML ;
        else if ((dspl[dspl.length-1] === '+' || dspl[dspl.length-1] === '-' || 
        dspl[dspl.length-1] === 'x' || dspl[dspl.length-1] === '/') && (e.target.innerHTML === '+' || 
        e.target.innerHTML === '-' || e.target.innerHTML === 'x' ||  e.target.innerHTML === '/')) 
        {
            break;
        }
        
        else dspl += e.target.innerHTML;
        // if(firstArg != undefined && operator == undefined)  {
        // document.querySelector(".display").innerHTML = dspl;
        // }
    // else     
    document.querySelector(".display").innerHTML = dspl;
  
    
    
    // if(dspl == 0  ) document.querySelector(".display").innerHTML = dspl;
    
    // else document.querySelector(".display").innerHTML += dspl;
    // window.console.log(dspl);
    // document.querySelector(".display").innerHTML = dspl;

    }
    
}



// let op = window.prompt("what's your command?")
// let a = Number(window.prompt('a'))
// let b = Number(window.prompt('b'))
// let res = operate(a,b,op)
// console.log(res)
// window.alert(`the result is ${res}`)
