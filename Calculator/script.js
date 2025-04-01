let fullOperation = "";
let flagOperation = false;
let flagSecond = false;

let number = ['0','1','2','3','4','5','6','7','8','9'];
let operator = ['/','x','-','+','^'];

let history = [];

function addInput(input){

    if(input.toString() === '=' && flagOperation === true && flagSecond == true){
        console.log("end of calc");
        history.push(fullOperation);
        calculate();
        flagOperation = false;
        flagSecond = false;
        return
    }
    else if(operator.includes(input.toString()) && flagOperation === false){
        fullOperation = fullOperation + input.toString()
        console.log("operation included")
        flagOperation = true;
    }
    else if(number.includes(input.toString())){
        if(flagOperation){
            flagSecond = true;
        }
        fullOperation = fullOperation + input.toString()
        console.log("number")
    }
    else if(input.toString() === 'AC'){
        fullOperation = "";
        flagOperation = false;
        flagEnd = false;
        flagSecond = false;
    }

    let op = fullOperation.split('')
    console.log(op)

    showNumber();
}

function showNumber(){
    document.getElementById("operation").innerHTML = fullOperation;
}

function showHistory(){
    document.getElementById("history").innerHTML = "";
    history.slice(-5).forEach((op) => {
        let p = document.createElement("p");
        p.innerText = op;
        document.getElementById("history").appendChild(p);
    });
}

function hideHistory(){
    document.getElementById("history").innerHTML = "";
}

function clearHistory(){
    document.getElementById("history").innerHTML = "";
    history.length = 0;
}

function calculate(){
    
    let operation;

    for(let c of operator){
        if(fullOperation.includes(c)){
            operation = c;
            console.log(operation)
            break
        }
    }

    let number = fullOperation.split(operation);
    let result;

    switch (operation) {
        case '+':
            result = Number(number[0]) + Number(number[1]);
            break
        case '-':
            result = Number(number[0]) - Number(number[1]);
            break
        case 'x':
            result = Number(number[0]) * Number(number[1]);
            break
        case '/':
            result = Number(number[0]) / Number(number[1]);
            break
        case '^':
            result = Number(number[0]) ** Number(number[1]);
            break
    }

    fullOperation = result.toString();
    showNumber();
}