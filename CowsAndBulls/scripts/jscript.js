	var styles = new Array();
styles[0] = "styles/defaultStyle.css";
styles[1] = "styles/redStyle.css";
styles[2] = "styles/blueStyle.css";



var guessesCount = 0;
var totalGuesses=0;
 var results = new Array(5);
 results[1] = 0;

	  Hide();
	function Hide() {
	$(".hidden").css('display', 'none')
	}

	function Show() {
		var selected = $(".selected");
		//selected.slideDown('slow', function() {	
		selected.css('display', 'block');
		//});
	}

	function ShowSettings() {

		var settings = $("#settings");
		var menu = $("#menu");
		menu.removeClass('selected');
		menu.addClass('hidden');

		settings.removeClass('hidden');
		settings.addClass('selected')

		Show();
		Hide();

	}

	function ShowHelp() {

		var help = $("#help");
		var menu = $("#menu");
		menu.removeClass('selected');
		menu.addClass('hidden');

		help.removeClass('hidden');
		help.addClass('selected')
		Show();
		Hide();
	}

	function ShowGame() {

		var game = $("#game");
		var menu = $("#menu");
		menu.removeClass('selected');
		menu.addClass('hidden');

		game.removeClass('hidden');
		game.addClass('selected')
		Show();
		Hide();
	}

	function BackBtn(id) {

		var txt = "#"+id;
		var id =$(txt)
		var menu = $("#menu");
		id.removeClass('selected');
		id.addClass('hidden');
		menu.removeClass('hidden');
		menu.addClass('selected');
		Show();
		Hide();

	}
 function saveState(text) {

    var value = text;
    var key = "path";
   // localStorage.setItem(key, value);
   localStorage.setItem(key,value);
    //$.localStorage(key,value);
                
}
function changeStyle(style) {

	var stylesheet = $("#style");
	stylesheet.href = style
   // document.getElementById("style").href = style;
    var text = stylesheet.href;

    //saveState(text);
  $("#style").href = text;  
  $("head").remove("link");
  $("head").append($("<link rel='stylesheet' href="+text+" type='text/css' media='screen' />"));
}


function CheckForUniqueDigits(randomNumber) {

    var number = randomNumber;
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
    return isUnique;
};

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
        $("#task2").html(randomNumber);
    }
}

function startNewGame() {
    GenerateRandomNumber();
    $("#GuessNumber").css('display', 'inline');
    $("#inputNumber").css('display', 'inline');
    clearHistory();
    hideHistory();
}

function showHistory() {

    $("#history").css('display', 'inline');
    $("#showHistoryBtn").css('display', 'none');
    $("#hideHistoryBtn").css('display', 'inline');
}

function hideHistory() {

    $("#history").css('display', 'none');
    $("#hideHistoryBtn").css('display', 'none');
    $("#showHistoryBtn").css('display', 'inline');
}

function clearHistory() {

    $("#history").html("");
}
function CompareNumbers() {

    var playerNumber = $("#inputNumber").val();
    $("#hiddenNumber").html(playerNumber);
    var playerNumberAsString = playerNumber.toString();
    var i;
    var j;
    var bullCount = 0;
    var cowCount = 0;
    var randomNumber = $("#task2").html();
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
    $("#task1").html("Cows: " + cowCount + " Bulls: " + bullCount)
}
function AddToHistory() {
    var playerNumber = $("#hiddenNumber").html();
    var count = $("#task1").html()
    $("#history").append(playerNumber + "</br>")
    $("#history").append( count + "</br>")
}