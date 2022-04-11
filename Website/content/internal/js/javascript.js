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
    let dropDeciTwo = document.getElementById('dropDeciTwo');
    let inputConv = dropDeciTwo.options[dropDeciTwo.selectedIndex].value;

    if(inputConv == "binary"){
        conversion = input.toString(2);
        document.getElementById('antwoordDeci').innerHTML += "Binary: " + conversion;
    }else if(inputConv == "decimal"){
        conversion = parseInt(input, 2);
        document.getElementById('antwoordDeci').innerHTML += "Decimal: " + conversion;
    }
}

document.getElementById('umDeciBtn').addEventListener("click", umDecimal);


function umFactorizer(){
    let inputBase = document.getElementById('inputFactoOne').value;
    let input = parseFloat(inputBase);
    let aPrime = [];
    let aFinal = [];
    let wipAnswer = 0;
    let finalAnswer = 0;
    let checkRound = 0;
    let done = false;
    document.getElementById('antwoordFacto').innerHTML = "<br>";
    
    /*
    console.log("DEBUG LOGGER STARTED ON METHOD: umFactorizer");
    console.log("Startup Configuration:");
    console.log("InputBase: " + inputBase);
    console.log("input: " + input);
    console.log("aPrime: " + aPrime);
    console.log("aFinal: " + aFinal);
    console.log("wipAnswer: " + wipAnswer);
    console.log("finalAnswer: " + finalAnswer);
    console.log("done: " + done);
    console.log("");
    console.log("Executing function...");
    console.log("Running PrimeMaker...");
    */

    if(input > 0){
        for (let i = 0; i <= input; i++) {
            let check = 0;

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    check = 1;
                    break;
                }
            }

            if (i > 1 && check == 0) {
                aPrime.push(i);
                //console.log(i);
            }
        }

        wipAnswer = input;

        /*
        console.log(aPrime);
        console.log("PrimeMaker Task Finished");
        console.log("Running WhileLoop...");
        */

        // als priem getal geen heel getal geeft ga naar volgende priem getal

        while(done != true){
            if(input == Math.round(wipAnswer) && wipAnswer > 1){
                //console.log("Dividing by 2");
                wipAnswer = wipAnswer / 2;
                aFinal.push(2);
            }else if(wipAnswer > 1){
                //console.log("Dividing by prime number: " + aPrime[0]);
                wipAnswer = wipAnswer / aPrime[0];
                aFinal.push(aPrime[0]);
                aPrime.shift();
            }else if(wipAnswer < 1){
                checkRound = aPrime[0] / wipAnswer;
                if(checkRound != Math.round(checkRound)){
                    aPrime.shift();
                }
            }else{
                aFinal.push(aPrime[0]);
                aPrime.shift();
            }

            if(wipAnswer != Math.round(wipAnswer) && wipAnswer < 1){
                wipAnswer = 1;
            }

            /*
            console.log("Final Array:")
            console.log(aFinal);
            console.log("");
            console.log("Current wipAnswer State:");
            console.log(wipAnswer);
            console.log("Current finalAnswer State:");
            console.log(finalAnswer);
            console.log("Going through for loop (Multiplying Final array with the next item each time...")
            */

            if(wipAnswer == 1){
                done = true;
                for(var i = 0; i < aFinal.length; i++) {
                    if(finalAnswer != input){
                        multiplyFactor = aFinal[i] + 1;
                        finalAnswer = aFinal[i] * multiplyFactor;
                        /*
                        console.log("multiplyFactor:");
                        console.log(multiplyFactor);
                        console.log("finalAnswer:");
                        console.log(finalAnswer);
                        console.log("NEXT");
                        console.log(" ");
                        */
                    }
                }
                //console.log("Pushing final data to HTML...");
                document.getElementById('antwoordFacto').innerHTML += aFinal.join(" * ") + " = " + finalAnswer + "<br>";
            }
        }
        //console.log("Execution Finished!");
    }else{
        document.getElementById('antwoordFacto').innerHTML = "Voer een getal boven de 0 in...";
    }
}

document.getElementById('umFactoBtn').addEventListener("click", umFactorizer);

// Heel getal gedeeld door 2
// Geen heel getal gedeeld door volgend priemgetal
  /////////////////////
 // UMREIKENUNG END //
/////////////////////

// romanizer
function umRomanizer() {
    let inputBase = document.getElementById('inputRomanOne').value;
    let input = parseFloat(inputBase);
    let roman = "";
    document.getElementById('antwoordRoman').innerHTML = "";
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let a;
    if(input < 1 || input > 3999){
        document.getElementById('antwoordRoman').innerHTML = "Voer een getal tussen de 1 en 3999 in...";
    }else{
        for(let key in romanNumList){
            a = Math.floor(input / romanNumList[key]);
            if(a >= 0){
                for(let i = 0; i < a; i++){
                    roman += key;
                }
            }
            input = input % romanNumList[key];
        }
        document.getElementById('antwoordRoman').innerHTML = roman;
    }
}
document.getElementById('umRomanBtn').addEventListener("click", umRomanizer);


  //morsenizer 
    function umMorsenizer() {
        let inputBase = document.getElementById('inputMorse').value;
        let input = parseFloat(inputBase);
        let mors = "";
        document.getElementById('antwoordMorse').innerHTML = "";
        const morsNumList = {1: ".-", 2: "-...", 3: "-.-.", 4: "-..", 5: ".", 6: "..-.", 7: "--.", 8: "....", 9: "..", 0: "-----", a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.."};
        let a;
        if(input < 0 || input > 9999){
            document.getElementById('antwoordMorse').innerHTML = "Voer een getal tussen de 0 en 9999 in...";
        }else{
            for(let key in morsNumList){
                a = Math.floor(input / key);
                if(a >= 0){
                    for(let i = 0; i < a; i++){
                        mors += morsNumList[key];
                    }
                }
                input = input % key;
            }
            document.getElementById('antwoordMorse').innerHTML = mors;
        }
    }
    document.getElementById('umMorseBtn').addEventListener("click", umMorsenizer);

