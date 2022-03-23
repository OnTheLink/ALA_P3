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
function setTable() {
    let inputTableOne = document.getElementById('inputTableOne').value;
    let inputTableTwo = document.getElementById('inputTableTwo').value;
    let inputOne = parseFloat(inputTableOne);
    let inputTwo = parseFloat(inputTableTwo);
    document.getElementById('antwoordTable').innerHTML = "";

    let counter = 0;
    while(counter <= inputOne){
        document.getElementById('antwoordTable').innerHTML += counter * inputTwo + " ";
        counter++;
    }
}

document.getElementById('SetTableBtn').addEventListener("click", setTable);

// Powers
function setPowers() {
    let inputPowersOne = document.getElementById('inputPowersOne').value;
    let inputPowersTwo = document.getElementById('inputPowersTwo').value;
    let inputBase = parseFloat(inputPowersOne);
    let inputExpo = parseFloat(inputPowersTwo);
    document.getElementById('antwoordPowers').innerHTML = "";

    let counter = 0;
    while(counter <= inputExpo){
        document.getElementById('antwoordPowers').innerHTML += Math.pow(inputBase, counter) + " ";
        counter++;
    }
}

document.getElementById('SetPowersBtn').addEventListener("click", setPowers);

// Fractions
function setFractions() {
    let inputFractionsOne = document.getElementById('inputFractionsOne').value;
    let inputBase = parseFloat(inputFractionsOne);
    document.getElementById('antwoordFractions').innerHTML = "<br>";

    let counter = 1;
    while(counter <= inputBase){
        document.getElementById('antwoordFractions').innerHTML += "1 / " + counter + "= " + 1 / counter + "<br>";
        counter++;
    }
}

document.getElementById('SetFractionsBtn').addEventListener("click", setFractions);

// Squares
function setSquares() {
    let inputSquaresOne = document.getElementById('inputSquaresOne').value;
    let inputBase = parseFloat(inputSquaresOne);
    document.getElementById('antwoordSquares').innerHTML = "<br>";

    let counter = 1;
    while(counter <= inputBase){
        document.getElementById('antwoordSquares').innerHTML += counter + "² = " + Math.pow(counter, 2) + "<br>";
        counter++;
    }
}

document.getElementById('SetSquaresBtn').addEventListener("click", setSquares);

  ////////////////////
 // SIMPLE SET END //
////////////////////


  ///////////////////////
 // COMPLEX SET BEGIN //
///////////////////////

// Fibonacci
function plexFibonacci() {
    let inputFibonacciOne = document.getElementById('inputFibonacciOne').value;
    let inputBase = parseFloat(inputFibonacciOne);
    let number1 = 0;
    let number2 = 1;
    let anwserNumber;

    document.getElementById('antwoordFibonacci').innerHTML = "<br>";
    document.getElementById('antwoordFibonacci').innerHTML += number1 + "<br>";
    document.getElementById('antwoordFibonacci').innerHTML += number2 + "<br>";

    anwserNumber = number1 + number2;

    while (anwserNumber <= inputBase) {

        document.getElementById('antwoordFibonacci').innerHTML += anwserNumber + "<br>";

        number1 = number2;
        number2 = anwserNumber;
        anwserNumber = number1 + number2;
    }
}

document.getElementById('PlexFibonacciBtn').addEventListener("click", plexFibonacci);


// Prime
function plexPrime(){
    let inputPrimeOne = document.getElementById('inputPrimeOne').value;
    let inputBase = parseFloat(inputPrimeOne);
    document.getElementById('antwoordPrime').innerHTML = "<br>";

    for (let i = 0; i <= inputBase; i++) {
        let check = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                check = 1;
                break;
            }
        }

        if (i > 1 && check == 0) {
            document.getElementById('antwoordPrime').innerHTML += i + "<br>";
        }
    }
}

document.getElementById('PlexPrimeBtn').addEventListener("click", plexPrime);


// Collatz 
function plexCollatz(){
    let inputCollatzOne = document.getElementById('inputCollatzOne').value;
    let inputBase = parseFloat(inputCollatzOne);
    let oldInput;

    document.getElementById('antwoordCollatz').innerHTML = "<br>";

    while (inputBase !== 1) {
      if (inputBase % 2 === 0) {
        oldInput = inputBase;
        inputBase = inputBase / 2;
        document.getElementById('antwoordCollatz').innerHTML += oldInput + " / 2 = " + inputBase + "<br>";
      } else {
        oldInput = inputBase;
        inputBase = inputBase * 3 + 1;
        document.getElementById('antwoordCollatz').innerHTML += oldInput + " * 3 + 1 = " + inputBase + "<br>";
      }
    }
}

document.getElementById('PlexCollatzBtn').addEventListener("click", plexCollatz);


// Perfect number
function plexPerfect(){
    let inputPerfectOne = document.getElementById('inputPerfectOne').value;
    let inputBase = parseFloat(inputPerfectOne);
    let reachedEnd = false;
    let newAnswer;
    let answerArr = [];
    let visualArr = [];
    let finalAnswer = 0;
    let check = inputBase;

    document.getElementById('antwoordPerfect').innerHTML = "<br>";

    do{
        inputBase = Math.round(inputBase);
        newAnswer = inputBase / 2;
        newAnswer = Math.round(newAnswer);
        document.getElementById('antwoordPerfect').innerHTML += inputBase + " / 2 = " + newAnswer + "<br>";
        inputBase = newAnswer;

        if(inputBase > 1){
            answerArr.push(inputBase);
            visualArr.push(inputBase, " + ");
        }else{
            answerArr.push(inputBase);
            visualArr.push(inputBase);
        }

        if(inputBase == 1){
            for (let i = 0; i < answerArr.length; i++) {
                finalAnswer += answerArr[i];
            }
            document.getElementById('antwoordPerfect').innerHTML += visualArr.join(" ") + " = " + finalAnswer + "<br>";
            console.log(check);
            console.log(finalAnswer);
            if(check == finalAnswer){
                document.getElementById('antwoordPerfect').innerHTML += "Dit is een perfect getal" + "<br>";
            }else{
                document.getElementById('antwoordPerfect').innerHTML += "Dit is geen perfect getal" + "<br>";
            }
            reachedEnd = true;
        }

    } while(inputBase > 1);
    
    
}

document.getElementById('PlexPerfectBtn').addEventListener("click", plexPerfect);

  /////////////////////
 // COMPLEX SET END //
/////////////////////


  ///////////////////////
 // UMREIKENUNG BEGIN //
///////////////////////

function umDecimal(){
    // Number Input
    let inputDeciOne = document.getElementById('inputDeciOne').value;
    let input = parseFloat(inputDeciOne);
    let conversion;

    document.getElementById('antwoordDeci').innerHTML = "<br>";

    // Dropdown
    let dropDeciOne = document.getElementById('dropDeciOne');
    let inputConv = dropDeciOne.options[dropDeciOne.selectedIndex].value;

    if(inputConv == "binary"){
        conversion = input.toString(2);
        document.getElementById('antwoordDeci').innerHTML += "Binary: " + conversion;
    }else if(inputConv == "decimal"){
        conversion = parseInt(input, 2);
        document.getElementById('antwoordDeci').innerHTML += "Decimal: " + conversion;
    }
}

document.getElementById('umDeciBtn').addEventListener("click", umDecimal);

  /////////////////////
 // UMREIKENUNG END //
/////////////////////