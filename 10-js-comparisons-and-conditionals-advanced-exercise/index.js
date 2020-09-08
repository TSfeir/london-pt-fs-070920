/**
 * Exercise 1
 *
 * create variable {age} and assign your age as a value;
 */

let age = 36;

/**
 * Exercise 2
 *
 * create variable {favoriteLanguage} and assign "JavaScript" as a value;
 */

let favoriteLanguage = 'JavaScript';

/**
 * Exercise 4
 *
 * create variable {favoriteCity} and assign "London", "Paris", "Milan"
 * or "Barcelona" as a value;
 */

 let favoriteCity = 'London';

/**
 * Exercise 5
 *
 * create a function {isAccessGranted}, that takes your {age} and {favoriteLanguage}
 * as parameters, and returns true if your age above/equals 18
 * OR your "favoriteLanguage" is "JavaScript" else return false
 *
 * use "OR" operators(google, if you
 * don't know what is that) to write a condition
 */

function isAccessGranted(age, favoriteLanguage){
    if (age >= 18 || favoriteLanguage == 'JavaScript'){
        return(true);
    }
    return(false);
}

/**
 * Exercise 6
 *
 * create a function {greeting}, that takes your {age} and {favoriteLanguage}
 * as parameters and return "You are a frontend developer" if your age
 * is/above 18 and favoriteLanguage is "JavaScript" otherwise return
 * "You pick the wrong career"
 * Use "AND" operator (google, if you don't know what is that) to write
 * a condition that will take
 */

function greeting (age, favoriteLanguage){
    if (age >= 18 && favoriteLanguage == 'JavaScript'){
        return("You are a frontend developer");
    }
    return("You pick the wrong career");
}

/**
 * Exercise 7
 *
 * create a function {checkTheNumber} that takes a number as a parameter and returns
 * "More than 10" if the number more than 10, "Less than 10" if it's
 * between 5 and 10 and "Less than 5" if it's less than 5
 */

function checkTheNumber(num){
    if (num > 10){
        return("More than 10");
    } if (num <5){
        return("Less than 5");
    }   return("Less than 10");
}

/**
 * Exercise 8
 *
 * create a function {greetOnLocalLanguage} that takes {favoriteCity}
 * as a parameter and return local greetings:
 * "London": "Hello",
 * "Paris": "Bonjour",
 * "Milan": "Ciao",
 * "Barcelona": "Hola"
 * In any other case should return "I don't speak your language"
 *
 * use "switch" for this exercise
 */

function greetOnLocalLanguage(favoriteCity){
    switch(favoriteCity){
        case 'London': return('Hello');
        case 'Paris': return('Bonjour');
        case 'Milan': return('Ciao');
        case 'Barcelona': return('Hola');
    }
    return("I don't speak your language");
}
