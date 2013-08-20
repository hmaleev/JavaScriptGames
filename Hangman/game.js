
$(function() {

	var game = new Game();
	var draw = new Draw();
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
					draw.DrawHead();
					break;
				case 4:
					draw.DrawBody();
					break;
				case 3:
					draw.DrawLeftArm();
					break;
				case 2:
					draw.DrawRightArm();
					break;
				case 1:
					draw.DrawLeftLeg();
					break;
				case 0:
					draw.DrawRightLeg();
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

			draw.DrawGallow();
			wordsArray = game.getWords();
			var randomWord = game.getRandomWords(wordsArray);
			hiddenWord.html(randomWord);
			hiddenWord = hiddenWord.html();

			guessedWord = game.createHiddenWord(hiddenWord);
			guessedDiv.html(guessedWord);
			console.log(hiddenWord);
			var letter = game.getLetter();
			game.guess(guessedWord, hiddenWord, letter, lives);
		}
	}

	function Draw() {

		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();

		this.DrawGallow = function() {

			ctx.moveTo(50, 290);
			ctx.lineTo(150, 290);

			ctx.moveTo(100, 290);
			ctx.lineTo(100, 70);

			ctx.moveTo(100, 70);
			ctx.lineTo(200, 70);

			ctx.moveTo(200, 70);
			ctx.lineTo(200, 100);

			ctx.closePath();
			ctx.stroke();
		}
		this.DrawHead = function() {

			ctx.beginPath();
			ctx.moveTo(220, 120);
			ctx.arc(200, 120, 20, 0, 2 * Math.PI);

			ctx.closePath();
			ctx.stroke();
		}
		this.DrawBody = function() {

			ctx.beginPath();
			//body
			ctx.moveTo(200, 140);
			ctx.lineTo(200, 200);

			ctx.closePath();
			ctx.stroke();
		}
		this.DrawLeftLeg = function() {
			ctx.beginPath();
			//legs
			ctx.moveTo(200, 200);
			ctx.lineTo(170, 250);

			ctx.closePath();
			ctx.stroke();
		}
		this.DrawRightLeg = function() {

			ctx.beginPath();
			ctx.moveTo(200, 200);
			ctx.lineTo(230, 250);

			ctx.closePath();
			ctx.stroke();
		}
		this.DrawLeftArm = function() {

			ctx.beginPath();
			ctx.moveTo(200, 150);
			ctx.lineTo(170, 200);

			ctx.closePath();
			ctx.stroke();
		}
		this.DrawRightArm = function() {
			ctx.beginPath();
			ctx.moveTo(200, 150);
			ctx.lineTo(230, 200);

			ctx.closePath();
			ctx.stroke();
		}
	}
});