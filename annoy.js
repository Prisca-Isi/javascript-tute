//  Ask a user "Are we there yet" until they enter yes or yeah
// VERSION 1

// Using if
// var answer = prompt("Are we there yet ?"); 
// if (answer === "Yes") {
// 	alert ("Yay! We made it");
// } else {
// 	var answer = prompt("Are we there yet ?"); 
// }


// var answer = prompt("Are we there yet ?"); 

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet ?"); 	
// }

// alert ("Yay! We made it");




// VERSION 2
// Enter any string that contains yes or yeah

var answer = prompt("Are we there yet ?"); 

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet ?"); 	
}

alert ("Yay! We made it"); 
