function output(){
    var w = window.open("","MsgWindow","width=250,height=450");
    var inputs = document.getElementsByName("formInput");
     for (let i = 0; i < inputs.length; i++) {
        var string = "label" + i;
         var label = document.getElementById(string)
    w.document.write(label.innerHTML + ": "+inputs[i].value+".<br>"); 
      }
    }
function telPattern()
    {
     var tel = document.getElementById("tel");
     if (tel.value.length==8 || tel.value.length==3) {
          tel.value+="-";
     }else if (tel.value.length >= 13) {
          tel.value = tel.value.substring(0,12); 
     } 
     // console.log(tel.value.length)
    }
