
var hiddenWord = document.getElementById("hiddenWord").innerHTML;
var hiddenWordLength = hiddenWord.length;
var guessedWord = new Array();
var chars = new Array();

for (var i = 0; i < hiddenWordLength; i++) {
		guessedWord[i]="-";
		
	};
	getSelection();
var letter = $("input").value;
console.log(letter);


function guess(guessedWord,hiddenWord,letter) {

	for(var i=0;i<hiddenWord; i++) {
		if(letter===hiddenWord[i]) {
			guessedWord[i]=letter;
		}
	}
	return guessedWord;
}
function getSelection() {
 $("button").click(function () {
	var text = $(this).text();
	console.log(text);
	 $("input").val(text);
	});
	
}







/*
var hiddenWord = document.getElementById("hiddenWord").innerHTML;
var hiddenWordLength = hiddenWord.length;
var guessedDiv = document.getElementById("Guess");
var dashes = "";
var newDashes = "";
var hiddenWordAsArray = new Array();
hiddenWordAsArray = hiddenWord.split("");

function setCharAt(index, character, string) {

	var chars = new Array();
	chars = string.split("");
	//return string.substring(0, index) + character + string.substring(index + character.length);
	return chars
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

for (var i = 0; i < hiddenWordLength; i++) {
		dashes += "-"
		
	};
	
var dash=new Array();
	dash = dashes.split("");
function runGame() {

	var dashes2 = checkLetter(dash);
	if(dashes2 != hiddenWord){
		letter = getSelection();
		dashes2 = checkLetter(dash);
		runGame();
	}
	guessedDiv.innerHTML = dashes2;
}

function checkLetter(str) {
	//for (var i = 0; i < hiddenWordLength; i++) {
		for (var j = 0; j < hiddenWordLength; j++) {

			if (hiddenWordAsArray[j] === guess) {
				str[j]=hiddenWordAsArray[j];
			} else {
				continue;
			}
		};
	//};
	return str;
}
runGame();
*/


