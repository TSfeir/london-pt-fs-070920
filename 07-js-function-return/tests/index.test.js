/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */

function greet(your_name){
    return("Hello "+your_name+"!");
}

/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */

function loginValidation(age){
    if (age<18){
        return("Sorry, not allowed.");
    }
    return("Welcome!");
}

/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */

function minNumber(num1, num2){
    if(num1 < num2){
        return(num1);
    }
    return(num2);
} 

/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */

function randomNumber(){
    let rand = Math.floor(Math.random()*10);
    return(rand);  
}

/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */

 function getOppositeNumber(number){
     return(-number);
 }
// Exercise 1
describe("greet", () => {
	test("should return a string with a name", () => {
		expect(greet("Alex")).toBe("Hello Alex!");
	});
});

// Exercise 2
describe("loginValidation", () => {
	test("should return 'Welcome!' for age 18+", () => {
		expect(loginValidation(18)).toBe("Welcome!");
	});

	test("should return 'Sorry, not allowed.' for age less than 18", () => {
		expect(loginValidation(17)).toBe("Sorry, not allowed.");
	});
});

//Exercise 3
describe("minNumber", () => {
	test("should return the least number", () => {
		expect(minNumber(10, 6)).toBe(6);
	});
});

//Exercise 4
describe("randomNumber", () => {
	test("should return random number", () => {
		const number = randomNumber();

		expect(number !== randomNumber()).toBeTruthy();
	});

	test("should return number between 1 and 10", () => {
		const number = randomNumber();

		expect(number > 0 && number <= 10).toBeTruthy();
	});

	test("returned number should be integer", () => {
		const number = randomNumber();

		expect(number === Math.floor(number)).toBeTruthy();
	});
});

//Exercise 5
describe("getOppositeNumber", () => {
	test("should return opposite number", () => {
		expect(getOppositeNumber(5)).toBe(-5);
	});
});
