// Boolean variable that will contain whether or not the coin landed on heads or tails 
var headsOrTails;
// The starting value for the positions, -1 to ensure that the user does not have to roll one more than necessary
var value = -1;
// The base 10 value of the number
var basetensum = 0;

// This function flips the coin with an animation to make it look more genuine 
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

// This function takes the side that was flipped and then calls up the changeValue() function to, as its name suggests, change the value at that specific position to heads or 
// tails 
function display(){
    // Using a ternary function to check which side the "coin landed on"
    let sideDisplay = headsOrTails == 1 ? "Heads!" : "Tails!";
    document.getElementById("coin-display").innerHTML = sideDisplay;
    document.getElementById("flipButton").disabled = false;

    // This is where the number is assigned, make sure to check over this one
    changeValue(sideDisplay);
    if (value > 6){
        document.getElementById("flipButton").disabled = true;
    }
}

// This function changes the value for that specific binary position and changes the base 10 value if necessary 
function changeValue(side){
    var heads = side == "Heads!";
    if (heads){
        document.getElementById("2^" + (value + 1)).innerHTML = 1;
        basetensum += Math.pow(2, (value + 1));
        // Mod 1000, 100, 10 to get each value
        // Getting the 100s value
        let hundredsValue = Math.floor(basetensum / 100);
        let tensValue = Math.floor((basetensum - hundredsValue * 100)/ 10);
        let onesValue = basetensum % 10;

        document.getElementById("hundreds").innerHTML = hundredsValue;
        document.getElementById("tens").innerHTML = tensValue;
        document.getElementById("ones").innerHTML = onesValue;
    } else {
        document.getElementById("2^" + (value + 1)).innerHTML = 0;
        
    }
    // Changing the colour of the cells so players know what position they are at 
    document.getElementById("label" + (value + 1)).style.backgroundColor = "green";
    try {
        document.getElementById("label" + (value + 2)).style.backgroundColor = "red";
    } catch (err){
        // Checking for the win condition 
        if (basetensum < 140){
            document.getElementById("coin-display").innerHTML = "You Lose!";
        } else if (basetensum >= 140 && basetensum < 175){
            document.getElementById("coin-display").innerHTML = "You win $1.00!";
        } else {
            document.getElementById("coin-display").innerHTML = "You win $2.00!";
        }
    }
    // Adding one to the value so the user can move position to position from right to left 
    value += 1;
}
