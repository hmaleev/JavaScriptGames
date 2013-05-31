var hiddenWord = document.getElementById("hiddenWord").innerHTML;
var hiddenWordLength = hiddenWord.length;
var guessedDiv = document.getElementById("Guess");
var dashes = "";
var newDashes = "";


function setCharAt(index, character, string) {
	return string.substring(0, index) + character + string.substring(index + character.length);
}


function getSelection() {
	var test = document.getElementsByName('letter');
	var sizes = test.length;
	for (i = 0; i < sizes; i++) {
		if (test[i].checked == true) {
			return test[i].value;
		}
	}
}
var letter = getSelection();
console.log(letter);
var guess = letter;

function runGame() {

	for (var i = 0; i < hiddenWordLength; i++) {
		dashes += "-"
	};

	guessedDiv.innerHTML = dashes;
	dashes = checkLetter(dashes);
	var dashes2 = checkLetter(dashes);
	guessedDiv.innerHTML = dashes2;
}
function checkLetter(str) {
	for (var i = 0; i < hiddenWordLength; i++) {
		for (var j = 0; j < hiddenWordLength; j++) {

			if (hiddenWord.charAt(i) === guess) {
				str = setCharAt(i, guess, str);
			} else {
				continue;
			}
		};
	};
	return str;
}
runGame();