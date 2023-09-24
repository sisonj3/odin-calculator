// Used for checking excessive operators being displayed
let hasOp = false;
let hasNegative = false;

const displayer = document.querySelector('.display');

const buttons = Array.from(document.querySelectorAll('.toDisplay'));
buttons.forEach(button => button.addEventListener('click', display));

const equals = document.querySelector('.equals');
equals.addEventListener('click', operate);

//Backspace button
const ce = document.querySelector('.back');
ce.addEventListener('click', backspace);

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearDisplay);

function divide(num1, num2){
    if(num2 == 0) {
        alert('Nice Try!');
        return;
    } 

    return num1 / num2;
} 

function operate(){
    let equation = displayer.textContent.split(' ');
    let final = equation[0];

    for(let i = 2; i < equation.length; i += 2){
        let op = equation[i-1];
        let num2 = equation[i];

        if(isNaN(final) || isNaN(num2)){
            console.log(`${num1} or ${num2} is not a number!`);
            return;
        }

        if(op == '+'){
            final = Number(final) + Number(num2);
        } else if (op == '-'){
            final = Number(final) - Number(num2)
        } else if (op == 'x'){
            final = Number(final) * Number(num2)
        } else if (op == '/'){
            final = divide(Number(final), Number(num2));
        } else {
            console.log("Error!");
            return;
        }
    }

    displayer.textContent = final;
}

function display(e){
    if(isNaN(e.target.textContent) && hasOp){
        // Allow one minus for negative sign
        if(e.target.textContent == '-' && !hasNegative){
            displayer.textContent += ` ${e.target.textContent} `;
            hasNegative = true;
        } else if (hasNegative){
            alert('A digit must follow a negative sign!');
        } else {
            // Replace current operator with a new one
            displayer.textContent = displayer.textContent.slice(0, displayer.textContent.length - 2);
            displayer.textContent += ` ${e.target.textContent} `;
        }
    } else if(isNaN(e.target.textContent)){
        displayer.textContent += ` ${e.target.textContent} `;
        hasOp = true;
    } else {
        displayer.textContent += e.target.textContent;
        hasOp = false;
        hasNegative = false;
    }
}

function backspace(){
    displayer.textContent = displayer.textContent.slice(0, displayer.textContent.length - 1);
}

function clearDisplay(){
    displayer.textContent = '';
}