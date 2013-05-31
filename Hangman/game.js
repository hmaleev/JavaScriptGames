var hiddenWord = document.getElementById("hiddenWord").innerHTML;
var hiddenWordLength = hiddenWord.length;
var guessedDiv = document.getElementById("Guess");
var dashes = "";
var newDashes = "";

var guess = new Array();
guess[0] = "s";
guess[1] = "a";
guess[2] = "j";
guess[3] = "v";


guessedDiv.innerHTML = "";
runGame();

function runGame() {

	for (var i = 0; i < hiddenWordLength; i++) {
		dashes += "-"
	};

	guessedDiv.innerHTML = dashes;

	for (var i = 0; i < hiddenWordLength; i++) {
		for (var j = 0; j < hiddenWordLength; j++) {

			if (hiddenWord.charAt(i) === guess[j]) {
				dashes = setCharAt(i, guess[j], dashes);
			}
		};

	};
	guessedDiv.innerHTML = dashes;
}
//console.log(dashes);

function setCharAt(index, character, string) {
	return string.substring(0, index) + character + string.substring(index + character.length);
}