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

class User {
  constructor(name, age, hunger) {
    let foodEaten = [];
    this.name = name;
    this.age = age;
    this.hunger = hunger;
    this.foodEaten = foodEaten;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setHunger(hunger) {
    if (hunger > 100) {
      return (this.hunger = 100);
    } else {
      return (this.hunger = hunger);
    }
  }

  getHunger() {
    return this.hunger;
  }

  getFoodEaten() {
    return this.foodEaten;
  }

  hungerStatus() {
    switch (true) {
      case this.hunger <= 0:
        return "User is dead";
      case this.hunger <= 20:
        return "Famished";
      case this.hunger <= 40:
        return "Starving";
      case this.hunger <= 60:
        return "Hungry";
      case this.hunger <= 80:
        return "Content";
      case this.hunger > 80:
        return "Full";
      default:
        return "Error";
    }
  }

  starveABit(number) {
    this.hunger -= number;
    if (this.hunger <= 0) {
      return "You are dead";
    }
  }

  eatFood(food) {
    if (this.hunger <= 0) {
      return "User is dead";
    }
    this.hunger += food.value;
    this.setHunger(this.hunger);
    this.foodEaten.push(food.name);
  }
}
