const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW

/**
 * Exercise 1
 *
 * create a variable {targetMatchesCoercedUserValue} which uses
 * coerced equality to compare {target} and {userValue}
 */

let targetMatchesCoercedUserValue;
if (target == userValue){
    targetMatchesCoercedUserValue = true;
} else {
    targetMatchesCoercedUserValue = false;
}

/**
 * Exercise 2
 *
 * create a variable {targetMatchesUserValue} which uses
 * strict equality to compare {target} and {userValue}
 */

let targetMatchesUserValue;
if (target === userValue){
    targetMatchesUserValue = true;
} else {
    targetMatchesUserValue = false;
}

/**
 * Exercise 3
 *
 * create a variable {passwordMatchesConfirmation} which uses
 * strict equality to compare {password} and {passwordConfirmation}
 */

let passwordMatchesConfirmation;
if (password === passwordConfirmation){
    passwordMatchesConfirmation = true;
} else {
    passwordMatchesConfirmation = false;
}

/**
 * Exercise 4
 *
 * create a variable {passwordMessage} should be "Oops, your password and confirmation do not match!"
 * if {password} and {passwordConfirmation} do not match
 */


let passwordMessage;
if (password !== passwordConfirmation){
    passwordMessage = "Oops, your password and confirmation do not match!";
}

/**
 * Exercise 5
 *
 * create a variable {fruits} which should be equal to
 * "banana, cherry, watermelon" if {sortOrder} equals to "ALPHABETICAL"
 */
let fruits
if (sortOrder === "ALPHABETICAL"){
    fruits = "banana, cherry, watermelon";
}


describe("coerced equality: ==", () => {
  test("targetMatchesCoercedUserValue is true", () => {
    expect(targetMatchesCoercedUserValue).toBeDefined();
    expect(targetMatchesCoercedUserValue).toBe(true);
  });
});

describe("strict equality: ===", () => {
  test("targetMatchesUserValue is false", () => {
    expect(targetMatchesUserValue).toBeDefined();
    expect(targetMatchesUserValue).toBe(false);
  });
  test("passwordMatchesConfirmation is false", () => {
    expect(passwordMatchesConfirmation).toBeDefined();
    expect(passwordMatchesConfirmation).toBe(false);
  });
});

describe("if statements", () => {
  test('passwordMessage is "Oops, your password and confirmation do not match!"', () => {
    expect(passwordMessage).toBeDefined();
    expect(passwordMessage).toBe(
      "Oops, your password and confirmation do not match!"
    );
  });
  test('fruits is "banana, cherry, watermelon" because sortOrder is "ALPHABETICAL"', () => {
    expect(fruits).toBeDefined();
    expect(fruits).toBe("banana, cherry, watermelon");
  });
});
