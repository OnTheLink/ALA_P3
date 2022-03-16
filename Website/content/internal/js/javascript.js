  ///////////////////////
 // SIMPLE CALC BEGIN //
///////////////////////

// Plus
function calcPlus() {
    let inputPlusOne = document.getElementById('inputPlusOne').value;
    let inputPlusTwo = document.getElementById('inputPlusTwo').value;
    let inputOne = parseFloat(inputPlusOne);
    let inputTwo = parseFloat(inputPlusTwo);
    let antwoordPlus = inputOne + inputTwo;
    document.getElementById('antwoordPlus').innerHTML = antwoordPlus;
}

document.getElementById('calcPlusBtn').addEventListener("click", calcPlus);

// Min
function calcMin() {
    let inputMinOne = document.getElementById('inputMinOne').value;
    let inputMinTwo = document.getElementById('inputMinTwo').value;
    let inputOne = parseFloat(inputMinOne);
    let inputTwo = parseFloat(inputMinTwo);
    let antwoordMin = inputOne - inputTwo;
    document.getElementById('antwoordMin').innerHTML = antwoordMin;
}

document.getElementById('calcMinBtn').addEventListener("click", calcMin);

// Divide
function calcDivide() {
    let inputDivideOne = document.getElementById('inputDivideOne').value;
    let inputDivideTwo = document.getElementById('inputDivideTwo').value;
    let inputOne = parseFloat(inputDivideOne);
    let inputTwo = parseFloat(inputDivideTwo);
    let antwoordDivide = inputOne / inputTwo;
    document.getElementById('antwoordDivide').innerHTML = antwoordDivide;
}

document.getElementById('calcDivideBtn').addEventListener("click", calcDivide);

// Multiply
function calcTimes() {
    let inputTimesOne = document.getElementById('inputTimesOne').value;
    let inputTimesTwo = document.getElementById('inputTimesTwo').value;
    let inputOne = parseFloat(inputTimesOne);
    let inputTwo = parseFloat(inputTimesTwo);
    let antwoordTimes = inputOne * inputTwo;
    document.getElementById('antwoordTimes').innerHTML = antwoordTimes;
}

document.getElementById('calcTimesBtn').addEventListener("click", calcTimes);

// Exponential
function calcExpo() {
    let inputExpoOne = document.getElementById('inputExpoOne').value;
    let inputExpoTwo = document.getElementById('inputExpoTwo').value;
    let inputOne = parseFloat(inputExpoOne);
    let inputTwo = parseFloat(inputExpoTwo);
    let antwoordExpo = inputOne ** inputTwo;
    document.getElementById('antwoordExpo').innerHTML = antwoordExpo;
}

document.getElementById('calcExpoBtn').addEventListener("click", calcExpo);

// Percentage
function calcPercent() {
    let inputPercentOne = document.getElementById('inputPercentOne').value;
    let inputPercentTwo = document.getElementById('inputPercentTwo').value;
    let inputOne = parseFloat(inputPercentOne);
    let inputTwo = parseFloat(inputPercentTwo);
    let antwoordPercent = inputOne / 100 * inputTwo;
    document.getElementById('antwoordPercent').innerHTML = antwoordPercent;
}

document.getElementById('calcPercentBtn').addEventListener("click", calcPercent);

// Rest
function calcRest() {
    let inputRestOne = document.getElementById('inputRestOne').value;
    let inputRestTwo = document.getElementById('inputRestTwo').value;
    let inputOne = parseFloat(inputRestOne);
    let inputTwo = parseFloat(inputRestTwo);
    let antwoordRest = inputOne % inputTwo;
    document.getElementById('antwoordRest').innerHTML = antwoordRest;
}

document.getElementById('calcRestBtn').addEventListener("click", calcRest);

// Even or Odd
function calcOdd() {
    let inputOddOne = document.getElementById('inputOddOne').value;
    let inputOne = parseFloat(inputOddOne);
    if(inputOne % 2 == 0) {
        document.getElementById('antwoordOdd').innerHTML = "Even";
    }else{
        document.getElementById('antwoordOdd').innerHTML = "Odd";
    }
}

document.getElementById('calcOddBtn').addEventListener("click", calcOdd);

  /////////////////////
 // SIMPLE CALC END //
/////////////////////


  //////////////////////
 // SIMPLE SET BEGIN //
//////////////////////

// Tables
function calcTimes() {
    let inputTimesOne = document.getElementById('inputTimesOne').value;
    let inputTimesTwo = document.getElementById('inputTimesTwo').value;
    let inputOne = parseFloat(inputTimesOne);
    let inputTwo = parseFloat(inputTimesTwo);
    let antwoordTimes = inputOne * inputTwo;
    document.getElementById('antwoordTimes').innerHTML = antwoordTimes;
}

document.getElementById('calcTimesBtn').addEventListener("click", calcTimes);

  ////////////////////
 // SIMPLE SET END //
////////////////////

