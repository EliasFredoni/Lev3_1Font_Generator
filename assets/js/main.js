let size = document.getElementById("size");
let fonts = document.getElementById("fonts");
let text = document.getElementById("inputText");
let result = document.getElementById("result");

function changetext() {
    console.log("Hello");
    result.style.fontFamily = fonts.value;
    result.style.fontSize = size.value + "px";
    result.style.text = text.value;
    result.innerHTML = text.value;
}