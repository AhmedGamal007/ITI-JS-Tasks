function stringSplit(){
    var string = (document.getElementById("stringSentence")).value;
var split = (document.getElementById("splitInput")).value;
var strings = string.split(split);
for (let index = 0; index < strings.length; index++) {
    document.getElementById("stringBox").value += `${strings[index]}\n`; 
    // document.getElementById("stringBox").value +=`\n`;  
}
document.getElementById("firstOutput").value = string.substring(0,10);

}