const testArray = [5,28,19,21,400,6];

const maxAdjacentDiff = array => {
    let diff = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (Math.abs(array[i+1]-array[i])>diff){
    //         diff = Math.abs(array[i+1]-array[i]);
    //     }
    // }
    array.forEach((num, i) => {
        if (Math.abs(num[i+1]-num[i])>diff){
            diff = Math.abs(num[i+1]-num[i]);
        }
    })

    return diff;
}

console.log(maxAdjacentDiff(testArray));
