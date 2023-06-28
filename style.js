var textBox = document.getElementById("searchArea");
var textInput = document.getElementById("textInput");

textInput.onfocus = function () {
    textBox.style.boxShadow = "0px 0px 5px 2px rgb(224, 224, 224)";
}

textInput.onblur = function () {
    textBox.style.boxShadow = "none";
}