const testArray = [5,28,19,21,4,6];

const maxDiff = array => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return max - min;
}

//console.log(maxDiff(testArray));

const factorial = number => {
    let output = number;
    if (number === 0){
        return 1;
    }
    while(number > 1) {
        output = output * (number-1);
        number--
    }
    return output;
}

console.log(factorial(10));


module.exports = factorial;
// const greeting = () => 'Hello';
// module.exports = greeting;



