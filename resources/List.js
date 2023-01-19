function removeFromList() {
    var listOption = document.getElementById("selectList");
    var def = document.getElementById("selectDefault");
    var textField = document.getElementById("selectText");
    if (listOption.value == def.value) {
        alert("Choose An Option Before Deleting.")
        return;
    }
    else{
    listOption.remove(listOption.selectedIndex);
    if (listOption.value.length == 0) {
        listOption.value = def.value;
        textField.value = "";
        return;
    }
    }
    textField.value = listOption.value;
  }
  
  function addToList() {
    var text = document.getElementById("selectText").value;
    var listOption = document.getElementById("selectList");
    listOption.innerHTML += "<option>"+text+"</option>";
  }
function listRedirect(){
    var listOption = document.getElementById("selectList");
    document.getElementById("selectText").value = listOption.value;
}
  