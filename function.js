document.getElementById("submitButton").onclick = function () {
    var x = document.getElementById('textBox').value;
    if ((x % 2) === 0) {
        x = Number(x);
        document.getElementById('showOff').innerHTML = "Number " + x + " is an even number";

    } else {
        document.getElementById('showOff').innerHTML = "Number " + x + " is not an even number";
    }
}