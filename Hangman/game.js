var hiddenWord = document.getElementById("hiddenWord").innerHTML;
var hiddenWordLength = hiddenWord.length;
var guessedWord = new Array();
var chars = new Array();
var guessedDiv = document.getElementById("Guess");
var lives =6;
var letterExists = false;
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
	letterExists = false;
	for (var i = 0; i < hiddenWord.length; i++) {
		if (letter === hiddenWord[i]) {
			guessedWord[i] = letter;
			letterExists = true;
		}
	}
	if (!letterExists) {
		lives--
		isDead(lives);
	};
	if (guessedWord.join("") === hiddenWord) {
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


function isDead(lives) {

	switch(lives) {
		case 5:
			drawHead();
			break;
		case 4:
			drawBody();
			break;
		case 3:
			drawLeftArm();
			break;
		case 2: 
			drawRightArm();
			break;
		case 1:
			drawLeftLeg();
			break;
		case 0:
			drawRightLeg();
			alert("You lost");
			break;
	}
}
/*
drawHead();
drawBody();
drawLeftLeg();
drawRightLeg();
drawLeftArm();
drawRightArm();
*/