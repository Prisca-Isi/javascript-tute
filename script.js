// Get age and convert into number as prompt will always take is as a string
var age = Number(prompt("What's your age ?"));

// If age is negative
if (age < 0) {
	alert("You're not yet born");
}

// If age is 21
  if (age === 21) {
 	alert("Happy 21st Birthday");
 }
 

 // If age is an add number
  if (age%2 !== 0)  {
  	alert("Your age is odd");
  }

  // if age is a perfect square
  if (age % Math.sqrt(age)=== 0) {
  	alert("Your age is a perfect square");
  }