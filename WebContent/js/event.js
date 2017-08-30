function changecolor(color) {
    var c = document.getElementById("container");
    // c.style.backgroundColor = color;
    c.setAttribute("class",color);
}
function toUpperCase(e) {
    // var w = document.getElementById("word");
    e.value = e.value.toUpperCase();
}
function addBorder(e) {
    // var b = document.getElementById("box");
    // e.style.border = "3px solid red";
    e.setAttribute("class", "border");
}
function removeBorder(e) {
    // var e = document.getElementById("box");
    // e.style.border = "";
    e.removeAttributeNode("class","border");
}