var styles = new Array();
styles[0] = "styles/defaultStyle.css";
styles[1] = "styles/redStyle.css";
styles[2] = "styles/blueStyle.css";


HideInf();

var guessesCount = 0;
var totalGuesses=0;
 var results = new Array(5);
 results[1] = 0;
function CompareNumbers() {

    var playerNumber = document.getElementById("inputNumber").value;
    document.getElementById("hiddenNumber").innerHTML = playerNumber;
    var playerNumberAsString = playerNumber.toString();
    var i;
    var j;
    var bullCount = 0;
    var cowCount = 0;
    var randomNumber = document.getElementById("task2").innerHTML;
    var randomNumberAsString = randomNumber.toString();
    for (i = 0; i < playerNumber.length; i++) {
        for (j = 0; j < playerNumber.length; j++) {

            if (playerNumber.charAt(i) === randomNumberAsString.charAt(j) && i === j) {
                bullCount++;
                break;
            }
            if (playerNumber.charAt(i) === randomNumberAsString.charAt(j) && i !== j) {
                cowCount++
                break;
            };
        };
    };
    ++guessesCount;
    if (bullCount ===4) {
        totalGuesses = guessesCount;
        guessesCount = 0;
    };
    document.getElementById("task1").innerHTML = "Cows: " + cowCount + " Bulls: " + bullCount;
}

function GenerateRandomNumber() {

    var randomNumber;
    var lengthOfNumber = 1;
    for (;;) {
        randomNumber = Math.floor(Math.random() * 10000)
        lengthOfNumber = randomNumber.toString().length;
        if (lengthOfNumber === 4) {
            var isRandomNumber = CheckForUniqueDigits(randomNumber);
            break;
        };
    };
    if (!isRandomNumber) {
        GenerateRandomNumber();
    } else {
        document.getElementById("task2").innerHTML = randomNumber;
    }
}

function CheckForUniqueDigits(randomNumber) {

    var number = randomNumber;
    //    var number = document.getElementById("task2").innerHTML;
    var isUnique = true;
    var i;
    var j;
    var lengthOfNumber = 1;
    var numberAsString = number.toString();
    for (i = 0; i < numberAsString.length - 1; i++) {
        if (!isUnique) {
            break;
        };
        for (j = i + 1; j <= numberAsString.length - 1; j++) {

            if (numberAsString.charAt(i) !== numberAsString.charAt(j)) {
                isUnique = true;
            } else {
                isUnique = false
                break;
            };
        };
    };
    //  document.getElementById("task3").innerHTML = isUnique + " ";
    return isUnique;
};

function AddToHistory() {
    var playerNumber = document.getElementById("hiddenNumber").innerHTML;
    var count = document.getElementById("task1").innerHTML;
    document.getElementById("history").innerHTML += playerNumber + "</br>";
    document.getElementById("history").innerHTML += count + "</br>";
}

function changeStyle(style) {

    document.getElementById("style").href = style;
    var text = document.getElementById("style").href;
    saveState(text);

}
function HideInf() {

    //  document.getElementsByClassName("hidden").style.display = "none";
    var x = document.getElementsByClassName("hidden");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    test.style.display = "none"
}
function ShowSettings() {
	var x = document.getElementById("settings")
	x.style.display = "block";
    x.className="selected";
    ChangeClassName("menu")
  
    HideInf();
}

function ShowHelp() {
    var x = document.getElementById("help")
    x.style.display = "block";
    x.className="selected";
    ChangeClassName("menu")
  
    HideInf();
}
function ShowGame() {
    var x = document.getElementById("game")
    x.style.display = "block";
    x.className="selected";
    ChangeClassName("menu")
  
    HideInf();
}
function ShowHighScores() {
    var x = document.getElementById("highscore")
    x.style.display = "block";
    x.className="selected";
    ChangeClassName("menu")
  
    HideInf();
}

function BackBtn(id) {
    var x = document.getElementById("menu")
    x.style.display = "block";
    x.className="selected";
    ChangeClassName(id);
  
    HideInf();
}


function ChangeClassName(id) {

    var x = document.getElementById(id);
    x.className="hidden" ;
    return x;
}

function saveState(text) {

    var value = text;
    var key = "path";
    localStorage.setItem(key, value);

}

function AddToHistory() {

    var playerNumber = document.getElementById("hiddenNumber").innerHTML;
    var count = document.getElementById("task1").innerHTML;
    document.getElementById("history").innerHTML += playerNumber + "</br>";
    document.getElementById("history").innerHTML += count + "</br>";
}

function showHistory() {

    document.getElementById("history").style.display = "inline";
    document.getElementById("showHistoryBtn").style.display = "none";
    document.getElementById("hideHistoryBtn").style.display = "inline";
}

function hideHistory() {

    document.getElementById("history").style.display = "none";
    document.getElementById("hideHistoryBtn").style.display = "none";
    document.getElementById("showHistoryBtn").style.display = "inline";
}

function clearHistory() {

    document.getElementById("history").innerHTML = "";
}

function startNewGame() {
    GenerateRandomNumber();
    document.getElementById("GuessNumber").style.display = "inline";
    document.getElementById("inputNumber").style.display = "inline";
    clearHistory();
    hideHistory();
}

function addToHighScore() {
   

    console.log(guessesCount);
     console.log(totalGuesses);
/*    var score = document.getElementById("highscore").innerHTML;
    var count = guessesCount
    document.getElementById("highscore").innerHTML += guessesCount + "</br>";

    for (var i = 0; i < results.length; i++) {
        if (results[i] === undefined) {
            results[i] = guessesCount;
        }
        else if (results[i]<) {};
    };
    */
}