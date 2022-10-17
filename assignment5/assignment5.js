/* Practice Assignment 6:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create an array named myPizzaOrder that cannot be reassigned and
// contains the 3 elements: "Pepperoni", 12.99, false

const myPizzaOrder = ["Pepperoni", 12.99, false];

// 2) Create a function named getPizzaType that will accept an array
// as a parameter and returns the 1st element from the array.

function getPizzaType(pizzaArray) {
	return pizzaArray[0];
}

// 3) Create a function named addTax that will accept an array
// like your myPizzaOrder array as a parameter. The function will
// insert an element into the array between the 2nd and 3rd
// element in the array that is equal to the 2nd element multiplied
// by 0.0925 and rounded to the nearest penny (ie 0.95, 0.79, 0.42, etc).
// The function should return the array.
// ===========
// Hint: find the method that will allow you to set the decimals.

function addTax(pizzaArray) {
	pizzaArray.splice(2, 0, pizzaArray[1] * .0925);
	pizzaArray[2] = Math.round(pizzaArray[2] * 100) / 100;
	return pizzaArray
}

// 4) Create a function named completeOrder that will accept an array
// as a parameter. The function will change the value of the 4th
// element in the array to true and return the array.

function completeOrder(pizzaArray) {
	pizzaArray[3] = true;
	return pizzaArray
}

// 5) Create a function named allTheNumbers that accepts a number as
// a parameter. The function will create an array that contains all of
// the numbers from 1 to whatever number the parameter is. The array
// should not include the parameter number. The function returns
// the array.

function allTheNumbers(maxValue) {
	tempArray = []
	for (let i = 1; i < maxValue; i++) {
		tempArray[i - 1] = i
	}
	return tempArray
}

// 6) Create a function named getEvens that accepts 2 parameters:
// startNum and endNum. The function should return an array that
// includes the even numbers from startNum to endNum. If the startNum
// or endNum are even, they should be included in the returned array.

function getEvens(startNum, endNum) {
	tempArray = []
	let j = 0
	for (let i = startNum; i <= endNum; i += 2) {
		if (i % 2 != 0) {
			i++;
		}
		tempArray[j] = i;
		j++;
	}
	return tempArray;
}

// 7) Create a function named getLastElement that accepts an array
// as a parameter and returns the last element of the array. The
// array can have any number of elements. The function should always
// return the last element.

function getLastElement(array) {
	if (array.length == 0) {
		return null
	}
	return array[array.length-1];
}

// 8) Create a function named combineArrays that accepts two arrays
// as parameters and combines them into one array. The function
// should return the new combined array.

function combineArrays(array1, array2) {
	tempArray = array1;
	originalLen = array1.length;
	for (let i = 0; i < array2.length; i++) {
		tempArray[originalLen + i] = array2[i];
	}
	return tempArray;
}

// 9) Create a function named isPalindrome that accepts a string as
// a parameter. The function will return true if the string is a
// palindrome and false if the string is not. To check for a
// palindrome, remove all spaces and set to lowercase. The string
// will be identical both forward and reverse if it is a palindrome.
// For example: Taco Cat is a palindrome. tacocat is the same both
// forward and reverse.
// ==========
// Hints: There are several possible solutions for this. I use a
// combination of string and array methods. You can turn the string
// into an array, use arrays methods, and turn the array back into
// a string. This is also a challenge on freeCodeCamp. Check the
// help forums there if you get stuck!

function arrayEquals(array1, array2) {
	return Array.isArray(array1) && Array.isArray(array2) && array1.length == array2.length && array1.every((val, index) => val === array2[index]);
}

function isPalindrome(string) {
	string = string.toUpperCase();
	stringArray = string.split("");
	for (let i = 0; i < stringArray.length; i++) {
		if (stringArray[i].toLowerCase() == stringArray[i]) {
			stringArray.splice(i, 1);
			i--;
		}
	}

	reverseArray = stringArray.map((x) => x);
	reverseArray.reverse();
	if (arrayEquals(reverseArray, stringArray)) {
		return true;
	}
	return false;
}

console.log(myPizzaOrder);
console.log(getPizzaType(myPizzaOrder));
console.log(addTax(myPizzaOrder));
console.log(completeOrder(myPizzaOrder));
console.log(allTheNumbers(10));
console.log(getEvens(1, 16));
console.log(getLastElement(getEvens(0, 10)));
console.log(combineArrays(getEvens(4, 14), allTheNumbers(15)));

console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome("heck goshdarn dang"));
