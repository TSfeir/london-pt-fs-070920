/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

function logProperties(object){
    for (let i in object) {
        console.log("Property name: "+i);
    }
}


/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object){
    array = [];
    for (let i in object){
        array.push(object[i]);
    } return (array);
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

function getAllValuesAsString(object){
    let string = "";
    for (let i in object){
        string = string.concat(object[i])+" ";
    }
    string = string.slice(0, string.length - 1);
    console.log(string);
    return(string);
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */

 function propertyValueString(object){
    for (let i in object) {
        console.log(i+": "+object[i]);
    }
 }