var ALU = new Array();
var screen = document.getElementById('screen');
screen.value=null;
var result= new Array();
var i;
var index;
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
    index=0;
    screen.value=null;
    ALU = new Array();
}
function equal(){
    var num1="";
    var num2="";
    var totalResult = new Array();
    while(index<result.length){
        for (var itr = 0; itr < ALU.length; itr++) {
    ahmed : while(true){
        if (totalResult.length>0) {
            num1=totalResult[totalResult.length-1];
            break ahmed;
        } else {
            
        
        if (result[index]==404) {
            num1 = parseInt(num1);
            index++;
            break ahmed;
        } else {
            num1 += result[index]
            index++;    
        }
    } 
    }
    for (index; index < result.length || result[index]!=404; index++) {
        num2 += result[index];        
    }
    num2 = parseInt(num2);
    screen.value=null;
    
        
    
    switch(ALU[itr]){
        case 'plus':
            totalResult[itr]=add(num1,num2);
            break;
        case 'minus':
            totalResult[itr]=minus(num1,num2);
            break;
        case 'multiply':
            totalResult[itr]=multiply(num1,num2);
            break;
        case 'divide':
            totalResult[itr]=divide(num1,num2);
            break;
        default:
            break;
    }
}
if (index > result.length) {
    
}
}

}

