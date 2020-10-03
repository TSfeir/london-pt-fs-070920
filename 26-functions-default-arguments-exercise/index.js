/**
 * Exercise 1
 * 
 * create a function {sayHi} which takes param
 * {name} and return 'Hi, {name}!' if you don't pass any 
 * param it should use default value for name which 
 * should be 'incognito'
 */

const sayHi = (name = 'incognito') => {
    return (`Hi, ${name}!`);
}

/**
 * Exercise 2
 * 
 * create a function {multiply} which takes 2 numbers
 * as params, multiply them and return a result.
 * 
 * It you don't pass 1 or both params it should use 1 as 
 * a default value/values
 */

const multiply = (num1 = 1, num2 = 1) => {
    const result = num1 * num2;
    return result;
}

/**
 * Exercise 3
 * create a function {logElements} that takes array as a param
 * by looping through it log every element. If you don't 
 * pass any array, default value of your param should be 
 * array that contains only one element - string with value "Nothing to log"
 */

const logElements = (array = ['Nothing to log']) => {
    for (i of array) { console.log(i)}
}

/**
 * Exercise 4
 * create a function {getUserName} that takes object with property
 * {name} as a param and return user name as a string.
 * Default value of the param should be object with property name,
 * and value "John Smith"
 */

 const getUserName = (user = {name: 'John Smith'}) => {
     const stringName = user.name;
     console.log(stringName);
     return stringName;
 }