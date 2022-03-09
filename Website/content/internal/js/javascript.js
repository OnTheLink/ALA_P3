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