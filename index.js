var mathOperations = ["+","-","*","/","c","="];
var numbers = ["1","2","3","4","5","6","7","8","9","0","."];
input = document.getElementById('result');

function runFor(operation){
    if(operation == "c"){
        input.value = "";
    } else if(mathOperations.includes(operation)){
        math(operation);
    } else if(numbers.includes(operation)){
        addToInput(operation);
    }
    
}

function addToInput(caracter){
    input.value = input.value+caracter;
}

function math(operation){
    if(operation == "="){
        if(lastOperation == "+"){
            input.value = String(value1+Number(input.value));
        } else if(lastOperation == "-"){
            input.value = String(value1-Number(input.value));
        } else if(lastOperation == "/"){
            input.value = String(value1/Number(input.value));
        } else if(lastOperation == "*"){
            input.value = String(value1*Number(input.value));
        }        
        return;
    } 
    value1 = Number(input.value);
    lastOperation = operation;
    input.value = "";

}