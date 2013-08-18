$(document).ready(function() {

			var hiddenWord = $("#hiddenWord");
			var hiddenWordLength = hiddenWord.length;
			var guessedWord = [];
			var array = [];
			var guessedDiv = $("#Guess");
			var lives = 6;
			var game = new Game();
			array = game.getWords();
			var randomWord = game.getRandomWords(array);
			hiddenWord.html(randomWord);
			hiddenWord = hiddenWord.html();

			guessedDiv.html(game.createHiddenWord(hiddenWord));

		var letter = game.getLetter();
		game.guess(guessedWord,hiddenWord,letter,lives);
		guessedDiv.html(guessedWord.join(""))
	function Game() {

		this.play = function() {


			var self = this;
			array = self.getWords();
			hiddenWord = self.getRandomWords(array);
			guessedDiv.html(self.createHiddenWord(hiddenWord).join(""));
			self.getLetter();
			//var g = self.guess(guessedWord, hiddenWord,  lives)
			return;


		}
		this.getWords = function() {
			var wordsArray = [];
			var words = $("#Words").text()
			wordsArray = words.split("\n");
			$.each(wordsArray, function(index, val) {

				wordsArray[index] = $.trim(this);

			});
			wordsArray.splice(0, 1);
			wordsArray.splice(length - 1, 1)

			return wordsArray;
		}
		this.getRandomWords = function(wordsArr) {

			var wordIndex = Math.floor((Math.random() * wordsArr.length));
			var randomWord = wordsArr[wordIndex];
			return randomWord;
		}
		this.guess = function(guessedWord, hiddenWord,letter,  lives) {
			var letterExists;
		
			for (var i = 0; i < hiddenWord.length; i++) {
				if (letter === hiddenWord[i]) {
					guessedWord[i] = letter;
					letterExists = true;
				} else {
					letterExists = false;
				}
			}
			if (!letterExists) {
				lives--
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
			};
			if (guessedWord.join("") === hiddenWord) {
				var answer = confirm("You won the game! Do you want to play another game?");
			};
			if (answer === true) {
				location.reload();
			}
			return guessedWord;
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
		this.getLetter = function() {
			var text
			$("body").on("click", "button", function() {
				text = $(this).text();
				$("input").val(text);	
			})
			return text;
		}
	}
	
});
/*
function funcx()
   {
   // your code here
   // break out here if needed
   setTimeout(funcx, 3000);
   }

funcx();
*/