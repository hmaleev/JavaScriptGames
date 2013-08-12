var hiddenWord = document.getElementById("hiddenWord")
var hiddenWordLength = hiddenWord.length;
var guessedWord = new Array();
var chars = new Array();
var guessedDiv = document.getElementById("Guess");
var lives = 6;
var letterExists;

var words = getWord();
var rw = getRandomWord(words);
hiddenWord.innerHTML = rw;
hiddenWord = hiddenWord.innerHTML;

for (var i = 0; i < hiddenWord.length; i++) {
	guessedWord[i] = "-";
	if (hiddenWord[i] === " ") {
		guessedWord[i] = " "
	}

};

function getLetter() {
	getSelection();
	var letter = $("input").value;
	return letter
}

function getWord() {
	var y = [];
	var x = $("#Words").text()
	console.log(x);

	y = x.split("\n");
	$.each(y, function(idx, val) {

		y[idx] = $.trim(this);

	});
	y.splice(0, 1);
	y.splice(length - 1, 1)

	return y;
}

function getRandomWord(words) {


	var randomWord;
	var wordIndex = Math.floor((Math.random() * words.length));
	randomWord = words[wordIndex];
	return randomWord;
}


getLetter();
guessedDiv.innerHTML = guessedWord.join("");

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
		remainingLives(lives, hiddenWord);
	};
	if (guessedWord.join("") === hiddenWord) {
		var answer = confirm("You won the game! Do you want to play another game?");
	};
	if (answer === true) {

		location.reload();
		
	}

	return guessedWord;
}

function getSelection() {
	return $("button").click(function() {
		var text = $(this).text();

		$("input").val(text);
		var letter = $("input").value;
		var x = guess(guessedWord, hiddenWord, text);
		guessedDiv.innerHTML = x.join("");
	});
}


function remainingLives(lives, hiddenWord) {

	switch (lives) {
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
			var answer = confirm("You lost. The hidden word was " + hiddenWord + "\n Do you want to play another game?");
			//console.log(answer);
			break;

	}
	if (answer === true) {

		location.reload();
		
	}
}