//game.js file will randomly select a word for the player.
// import word file
var Word = require('./Word.js');
// array to hold words
var wordBank = ['Hello', 'Disney', 'Chinese Hacker', 'Ready 1 2 3'];
 
function Game() {
	this.wins = 0;
	this.losses = 0;
	this.livesRemaining = 0;
	this.lettersUsed = [];
	this.word;

	this.startNewGame = function() {
		this.livesRemaining = 10;
		this.lettersUsed = [];
		this.word = this.generateRandomWord();

		console.log("Welcome to hangman 1.0");
	}

	this.generateRandomWord = function () {
		var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		var currentWord = new Word(randomWord);

		return currentWord;
	}

	this.printResults = function() {
		// prints results between guesses
	}

	this.endGame = function() {
		// prints end of game results
	}
}

module.exports = Game;

