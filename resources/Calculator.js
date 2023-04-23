var ALU = new Array();
var screen = document.getElementById('screen');
screen.value=null;
var result= new Array();
var i;
function add(x,y){
    return x+y;
}
function minus(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
function button(i){
    i = parseInt(i);
    
        result[result.length]=i;
        screen.value += i;
 
    
}

function calc(i){
    ALU[ALU.length]=i;
    result[result.length]=404;
    screen.value=null;
}
function clearScreen(){
    result = new Array();
    screen.value=null;
    ALU = new Array();
}
function equal(){
    var num1="";
    var num2="";
    let index=0;
    while(true){
        if (result[index]==404) {
            num1 = parseInt(num1);
            index++;
            break;
        } else {
            num1 += result[index]
            index++;    
        }
        
    }
    for (index; index < result.length; index++) {
        num2 += result[index];        
    }
    num2 = parseInt(num2);
    screen.value=null;
    switch(ALU[0]){
        case 'plus':
            screen.value=add(num1,num2);
            break;
        case 'minus':
            screen.value=minus(num1,num2);
            break;
        case 'multiply':
            screen.value=multiply(num1,num2);
            break;
        case 'divide':
            screen.value=divide(num1,num2);
            break;
        default:
            break;
    }
}

