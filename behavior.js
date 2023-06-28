var textBox = document.getElementById("searchArea");
var crossIcon = document.getElementById("cross");
var textInput = document.getElementById("textInput");
var slashIcon = document.getElementById("slash");

textInput.onfocus = ()=>{textBox.style.boxShadow = "0px 0px 5px 2px rgb(224, 224, 224)";}

textInput.onblur = ()=>{textBox.attributeStyleMap.clear();}

crossIcon.onclick = function () {
    textInput.value = "";
    crossIcon.style.display = "none";
    slashIcon.style.display = "none";
    textInput.focus();
}

textInput.oninput = function(){
    if(textInput.value !== ""){
        crossIcon.style.display = "block";
        slashIcon.style.display = "block";
    }
    else{
        crossIcon.style.display = "none";
        slashIcon.style.display = "none";
    }

}