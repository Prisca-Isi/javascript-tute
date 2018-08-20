// Print number betrween -10 and 19
console.log("Print number between -10 and 19")
for (var i = -10; i < 20; i++) {
	console.log(i);
}


// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")
for (var i = 10; i <= 40; i+=2) {
	console.log(i);
}

// for (var i = 10; i <= 40; i+=2) {
// 	if (i % 2 == 0) {
//  		console.log(i); 
// 		}
// }




// ("Print all odd numbers between 300 and 333") 
console.log("Print all odd numbers between 300 and 333")
// var odd = 300;
// while(odd <= 333) {
// 	if (odd % 2 === 1) {
// 		console.log(odd);
		
// 	}
// 	odd++;
// }


for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);	
 	}
}

console.log("Print all number divisible by 5 and 3 between 5 and 50")
// var count = 5;
//  while(count <= 50) {
//  	if (count % 5 == 0 && count % 3 == 0) {
//  		console.log(count);	
//  	}
//   count++;
//  }

for(var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 ===0) {
		console.log(i);
	}	
}