var hiddenWord = document.getElementById("hiddenWord").innerHTML;
var hiddenWordLength = hiddenWord.length;
var guessedWord = new Array();
var chars = new Array();
var guessedDiv = document.getElementById("Guess");

for (var i = 0; i < hiddenWordLength; i++) {
	guessedWord[i] = "-";

};

function getLetter() {
	getSelection();
	var letter = $("input").value;
	return letter
}

getLetter();
//console.log(x);
guessedDiv.innerHTML = guessedWord.join("");
/*
var res = guess(guessedWord,hiddenWord,"A");
console.log(res);
console.log(guess(res,hiddenWord,"S"));
*/
function guess(guessedWord, hiddenWord, letter) {

	for (var i = 0; i < hiddenWord.length; i++) {
		if (letter === hiddenWord[i]) {
			guessedWord[i] = letter;
		}
		
	}
	if (guessedWord.join("")===hiddenWord) {
			alert("You won the game");
		};

	return guessedWord;
}

function getSelection() {
	return $("button").click(function() {
		var text = $(this).text();
		console.log(text);
		$("input").val(text);
		var letter = $("input").value;
		var x=	guess(guessedWord,hiddenWord,text);
		guessedDiv.innerHTML = x.join("");
	});
}




drawHead();
drawBody();
drawLeftLeg();
drawRightLeg();
drawLeftArm();
drawRightArm();