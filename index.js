// Declaring some global variables 
var headsOrTails;
var value = -1;
var basetensum = 0;

// Simulating the coin flip
function flipCoin(){
    headsOrTails = Math.floor(Math.random() * 2) + 1;
    document.getElementById("coin-display").innerHTML = "Flipping";
    document.getElementById("flipButton").disabled = true;

    var flipone = setTimeout(flip1, 200);
    var fliptwo = setTimeout(flip2, 500);
    var flipthree = setTimeout(flip3, 800);
    var wait = setTimeout(display, 1000);
    
}

// Different functions to make it seem like the word goes from Flipping to Flipping...
function flip1(){
    document.getElementById("coin-display").innerHTML = "Flipping.";
}

function flip2(){
    document.getElementById("coin-display").innerHTML = "Flipping..";
}

function flip3(){
    document.getElementById("coin-display").innerHTML = "Flipping...";
}

// Displaying whether or not it landed on heads or tails, then calling up the appropriate methods based upon what it landed on
function display(){
    // Using a ternary function to check which side the "coin landed on"
    let sideDisplay = headsOrTails == 1 ? "Heads!" : "Tails!";
    document.getElementById("coin-display").innerHTML = sideDisplay;
    document.getElementById("flipButton").disabled = false;

    // This is where the number is assigned, make sure to check over this one
    if (value < 6){ // USED TO BE 7, TRYING OUT 6 TO SEE IF THE VALUES WILL WORK
        changeValue(sideDisplay);
    } else {
        // Deal with when it is greater than 7
        document.getElementById("flipButton").disabled = true;
    }
}

// Changing the value in both the binary display and the base 10 display
function changeValue(side){
    var heads = side == "Heads!";
    if (heads){
        document.getElementById("2^" + (value + 1)).innerHTML = 1;
        basetensum += Math.pow(2, (value + 1));
        // Getting the 100s value
        let hundredsValue = Math.floor(basetensum / 100);
        let tensValue = Math.floor(basetensum / 10);
        let onesValue = basetensum % 10;

        document.getElementById("hundreds").innerHTML = hundredsValue;
        document.getElementById("tens").innerHTML = tensValue;
        document.getElementById("ones").innerHTML = onesValue;
    } else {
        document.getElementById("2^" + (value + 1)).innerHTML = 0;
    }

    value += 1;
}
