/**
 * Exercise
 *
 * 1. create {User} class which receives {name},
 * {age}, {hunger}.
 *
 * 2. {User} should has {name}, {age} and {hunger} getters.
 *
 * 3. Add getter {foodConsumed} which returns {foodEaten}
 *
 * 4. {hungerStatus} should return a string:
 * base on hunger level {hunger} should return a string:
 * 0 - 20: "Famished"
 * 21 - 40: "Starving"
 * 41 - 60: "Hungry"
 * 61 - 80: "Content"
 * 81 - 100: "Full"
 *
 * 5. {hunger} should have setter.
 * Make sure you can't set {hunger} more than 100.
 *
 * 6. Add a method {eatFood}, which takes an object as an argument
 * (ex. {name:string; value: number;}) and add {value} to {hunger},
 * and food {name} store to {foodEaten}.
 * Make sure you can't set {hunger} more than 100.
 *
 * 7. Add setter {starveABit} which takes an argument(number),
 * and deduct from {hunger}.
 * If after deduction, hunger <= 0 return "You are dead".
 *
 * 8. If user is dead, make sure that on any method call you are getting
 * "User is dead"
 */
