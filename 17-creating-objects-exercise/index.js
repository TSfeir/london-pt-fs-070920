/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */

let user = {
    firstName: "firstName",
    lastName: "lastName",
    age: 35,
}

console.log(user);

/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */


let allTypes = {
    stringType: "",
    numberType: 0,
    arrayType: [],
    objectType: {},
    randomFunction: function() {},
    booleanType: true, 
} 

console.log(allTypes);

/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

function createMovieObject(movieName, movieRating, movieTicketPrice) {
    return (
        movie = {
            name: movieName,
            rating: movieRating,
            ticketPrice: movieTicketPrice,
        }
    );
}

console.log(createMovieObject('home Alone',5,30));
