function onClick() {
    if (inputsAreEmpty()) {
        label.textContent = 'Error: one or both inputs are empty.';
        return;
    }
    updateLabel();
}

function inputsAreEmpty() {
    if (inputs[0] === '' || inputs[1] === '') {
        return true;
    } else {
        return false;
    }
}

function updateLabel() {
    var value1 = inputs[0].value;
    var value2 = inputs[1].value;
    var value3 = inputs[2].value;
    var value4 = inputs[3].value;
    var value5 = inputs[4].value;
    var sum = parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5);
    var gpa = (5 * parseInt(value1) + 4 * parseInt(value2) + 3 * parseInt(value3) + 2 * parseInt(value4) + parseInt(value5)) / sum;
    gpa = Math.round(gpa * 100) / 100;
    if (sum === 0) {
        window.alert("You must enter at least one number greater than zero for at least one of the grades.");
    } else {
        document.getElementById("gparesult").innerHTML = "GPA: " + gpa;
    }
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

