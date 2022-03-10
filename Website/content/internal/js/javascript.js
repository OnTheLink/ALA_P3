function calcPlus() {
    let inputPlusOne = document.getElementById('inputPlusOne').value;
    let inputPlusTwo = document.getElementById('inputPlusTwo').value;
    let inputOne = parseFloat(inputPlusOne);
    let inputTwo = parseFloat(inputPlusTwo);
    let antwoordPlus = inputOne + inputTwo;
    document.getElementById('antwoordPlus').innerHTML = antwoordPlus;
}

document.getElementById('calcPlusBtn').addEventListener("click", calcPlus);

function calcMin() {
    let inputMinOne = document.getElementById('inputMinOne').value;
    let inputMinTwo = document.getElementById('inputMinTwo').value;
    let inputOne = parseFloat(inputMinOne);
    let inputTwo = parseFloat(inputMinTwo);
    let antwoordMin = inputOne - inputTwo;
    document.getElementById('antwoordMin').innerHTML = antwoordMin;
}

document.getElementById('calcMinBtn').addEventListener("click", calcMin);

function calcDivide() {
    let inputDivideOne = document.getElementById('inputDivideOne').value;
    let inputDivideTwo = document.getElementById('inputDivideTwo').value;
    let inputOne = parseFloat(inputDivideOne);
    let inputTwo = parseFloat(inputDivideTwo);
    let antwoordDivide = inputOne / inputTwo;
    document.getElementById('antwoordDivide').innerHTML = antwoordDivide;
}

document.getElementById('calcDivideBtn').addEventListener("click", calcDivide);

function calcTimes() {
    let inputTimesOne = document.getElementById('inputTimesOne').value;
    let inputTimesTwo = document.getElementById('inputTimesTwo').value;
    let inputOne = parseFloat(inputTimesOne);
    let inputTwo = parseFloat(inputTimesTwo);
    let antwoordTimes = inputOne * inputTwo;
    document.getElementById('antwoordTimes').innerHTML = antwoordTimes;
}

document.getElementById('calcTimesBtn').addEventListener("click", calcTimes);