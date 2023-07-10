function appendChar(char) {
    document.getElementById('result').value += char;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
    try {
        var result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
