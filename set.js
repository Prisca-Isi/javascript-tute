// Print number betrween -10 and 19
console.log("Print number between -10 and 19")
var num = -10;
while(num <= 19) {
	console.log(num);
	num++;
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")
var even = 10;
while (even <= 40) {
	console.log(even);
	even+=2;
}

// while (even <= 40) {
// 	if (even % 2 == 0) {
// 		console.log(even);
// 	}
// 	even+=1;
// }



// ("Print all odd numbers between 300 and 333") 
console.log("Print all odd numbers between 300 and 333")
var odd = 300;
while(odd <= 333) {
	if (odd % 2 === 1) {
		console.log(odd);
		
	}
	odd++;
}

console.log("Print all number divisible by 5 and 3 between 5 and 50")
var count = 5;
 while(count <= 50) {
 	if (count % 5 == 0 && count % 3 == 0) {
 		console.log(count);	
 	}
  count++;
 }