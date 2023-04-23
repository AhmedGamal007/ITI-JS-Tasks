function factorial(x) {

    if (x == 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}
for (let i = 0; i <= 10; i++) {
    document.write("<tr> <td>"+i+"!</td><td>"+factorial(i)+"</td></tr>")
    
}
function test(){
    var exception = true;
    ahmed: while(exception){
    var input = prompt("Enter The Number");
    input = parseInt(input);
    if ( isNaN(input) || input.length<=0) {
        alert("Invalid Number");
        continue ahmed;
    } else {
        
        alert(factorial(input))
        exception = false;
    }

    }
}