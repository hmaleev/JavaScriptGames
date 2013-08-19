$(document).ready(function() {



	var game = new Game();

	game.play();

	function Game() {

		var hiddenWord = $("#hiddenWord");
		var guessedWord = [];
		var wordsArray = [];
		var guessedDiv = $("#Guess");
		var lives = 6;

		this.getWords = function() {
			var array = [];
			var words = $("#Words").text()
			array = words.split("\n");
			$.each(array, function(index, val) {

				array[index] = $.trim(this);

			});
			array.splice(0, 1);
			array.splice(length - 1, 1)

			return array;
		}
		this.getRandomWords = function(wordsArr) {

			var wordIndex = Math.floor((Math.random() * wordsArr.length));
			var randomWord = wordsArr[wordIndex];
			return randomWord;
		}
		this.createHiddenWord = function(hiddenWord) {
			var guessedWord = [];
			for (var i = 0; i < hiddenWord.length; i++) {
				guessedWord[i] = "*";
				if (hiddenWord[i] === " ") {
					guessedWord[i] = " "
				}

			};
			return guessedWord;
		}
		this.remainingLives = function(lives, hiddenWord) {

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
		this.guess = function(guessedWord, hiddenWord, letter) {
			letterExists = false;
			for (var i = 0; i < hiddenWord.length; i++) {
				if (letter === hiddenWord[i]) {
					guessedWord[i] = letter;
					letterExists = true;
				}

			}
			if (!letterExists) {

				game.remainingLives(lives, hiddenWord);
				lives--
			};
			if (guessedWord.join("") === hiddenWord) {
				var answer = confirm("You won the game! Do you want to play another game?");
			};
			if (answer === true) {

				location.reload();

			}

			return guessedWord;
		}
		this.getLetter = function() {
			return $("button").click(function() {
				var text = $(this).text();
				$("input").val(text);
				var x = game.guess(guessedWord, hiddenWord, text);
				guessedDiv.html(x.join(""));
			});

		}
		this.play = function() {

			wordsArray = game.getWords();
			var randomWord = game.getRandomWords(wordsArray);
			hiddenWord.html(randomWord);
			hiddenWord = hiddenWord.html();

			guessedWord = game.createHiddenWord(hiddenWord);
			guessedDiv.html(guessedWord);
			console.log(hiddenWord);
			var letter = game.getLetter();
			game.guess(guessedWord, hiddenWord, letter, lives);
			//guessedDiv.html(guessedWord.join(""));

		}
	}
});