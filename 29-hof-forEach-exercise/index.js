// Examples
/**
 * with Inline function callback
 *
 * const callback = () => {}
 * array.foreach(callback)
 */

/**
 * with anonymous function callback
 *
 * array.foreach(arrayItem => {})
 */

/* ======================== */
/* external callback version */
/* ======================== */

/**
 * Exercise 1
 * create an arrow function {forEachCallback} that takes
 * param and logout it.
 *
 * create a function {logAllWithExternalCallback} that will take an array
 * and with forEach log every element from your array
 * use {forEachCallback} as a callback function for forEach
 */

const forEachCallback = (param) => {console.log(param)};

const logAllWithExternalCallback = (array) => {
    array.forEach(forEachCallback);
}

/* =========================== */
/* anonymous callbacks version */
/* =========================== */
/**
 *
 * create a function {logAllWithAnonymousCallback} which will
 * do same thing as {logAllWithExternalCallback} but with
 * anonymous callback
 */

let array = []; 

const logAllWithAnonymousCallback = (array) => {array.forEach(param => console.log(param))};

/**
 * Exercise 2
 *
 * module 3
 *
 * create a arrow function {dividableBy3} that takes an array
 * of numbers as a param. With forEach, filter it and return a new
 * filtered array what will contain only numbers that dividable by 3
 * without remainder
 *
 * Ex: dividableBy3([3,7,9,11]) => return [3,9]
 */

const dividableBy3 = (param = []) => {
    let newArray = [];
    param.forEach((param) => {
        if (param % 3 === 0){
            newArray.push(param);
        }
    })
    return newArray;
}

/**
 * Exercise 3
 * create an arrow function {oddNumbersSum} which takes an array
 * of numbers and return sum of all odd numbers.
 *
 * Use forEach to loop through the array.
 */

const oddNumbersSum = (array = []) => {
    let sum = 0;
    array.forEach((array) => {
        if (array % 2 !== 0){
            sum = sum + array;
        }
    })
    console.log(sum);
    return (sum);
}

/**
 * Exercise 4
 * create an arrow function {totalLength} which takes an array
 * with different types. You need to get only strings and return
 * total of their lengths.
 *
 * Use forEach to loop through the array.
 *
 * Ex: ["cat", 5, "dog"] => 6
 */

const totalLength = (array) => {
    let total = 0;
    array.forEach((array) => {
        if (typeof array === 'string'){
            total = array.length + total;
        }
    })
    return (total);
}