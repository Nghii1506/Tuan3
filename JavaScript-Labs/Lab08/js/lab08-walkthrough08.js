
function outputBox(num) {
    var box = "<div class='movingDiv' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}// define functions in this file

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
    box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}