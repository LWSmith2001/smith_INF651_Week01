/* Practice Assignment 4:

Complete this javascript file according to the individual instructions 
given in the comments.

*** DO NOT CHANGE any of the cod that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".

function helloWorld() {
	console.log("Hello World!");
}

// 2) Create a function named greeting that will accept a "name" parameter 
// and return the string: "Hello, name." where "name is replaced
// with whatever value we want to provide when calling the function.

function greeting(name) {
	console.log("Hello, " + name + ".");
}

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.

function divisibleByThree(number) {
	return (number % 3 == 0);
}

// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.

function averageAge(num1, num2, num3) {
	if (num3 == undefined) {
		return (num1 + num2) / 2;
	} else {
		return (num1 + num2 + num3) / 3;
	}
}

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.

function leetSpeak(word) {
	word = word.replace(/a/g, "4"); // replaces all instances of 'a' with '4', uses global flag, found on W3Schools
	word = word.replace(/e/g, "3"); //    ~      ~      ~    ~   'e'  ~   '3'   ~     ~      ~     ~    ~     ~
	return word;
}




helloWorld(); // Hello, World!
greeting("Rincewind"); // Hello, Rincewind.
console.log(divisibleByThree(10)); // false
console.log(divisibleByThree(12)); // true
console.log(averageAge(15, 21, 3)); // 13
console.log(averageAge(2, 5)); // 3.5
console.log(leetSpeak("very awesome")); // v3ry 4w3som3
