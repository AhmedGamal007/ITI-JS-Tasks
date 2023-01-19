
function substring(){
var string = (document.getElementById("stringBox")).value;
var substring = (document.getElementById("subStringInput")).value;
var index = (document.getElementById("indexInput")).value

if (string.indexOf(substring) != -1) {
    document.getElementById("firstIndexOutput").value = string.indexOf(substring);
    document.getElementById("lastIndexOutput").value = string.lastIndexOf(substring);
} else {
    alert("Substring Not Found");
}
if (string.indexOf(substring,index) != -1) {
    document.getElementById("firstIndexInputOutput").value =string.indexOf(substring,index) - index + 1 ;
} else {
    document.getElementById("firstIndexInputOutput").value = "NULL";
}
if(string.lastIndexOf(substring,index)!= -1){
    document.getElementById("lastIndexInputOutput").value = index - string.lastIndexOf(substring,index)-1;
}else {
    document.getElementById("lastIndexInputOutput").value = "NULL";
}
}