
var num = Number(prompt("Guess a Number"));

if (num ===  7) {
	alert("You guessed it !");
}

if (num > 7) {
	alert("Too high! Guess again");
}

if (num < 7) {
	alert("Too low. Try again")
}