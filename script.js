let hasOp = false;

const displayer = document.querySelector('.display');

const buttons = Array.from(document.querySelectorAll('.toDisplay'));
buttons.forEach(button => button.addEventListener('click', display));

const equals = document.querySelector('#equals');
equals.addEventListener('click', operate);

function divide(num1, num2){
    if(num2 == 0) return;

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
    if(isNaN(e.target.textContent)){
        displayer.textContent += ` ${e.target.textContent} `;
    } else {
        displayer.textContent += e.target.textContent;
    }
}