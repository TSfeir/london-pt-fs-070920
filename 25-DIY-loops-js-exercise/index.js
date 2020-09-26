const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */

 function sortedData(data){

   let result = {
     integers: [],
     strings: [],
     floats: [],
     arrays: [],
     objects: []
   };

   for (let i = 0; i < data.length; i++){
     if(typeof data[i] === 'number'){
       if(Number.isInteger(data[i])){
         result.integers.push(data[i]);
       } else {
        result.floats.push(data[i]);
       }
     }
     else if(typeof data[i] === 'string'){
      result.strings.push(data[i]);
    }
    else if(typeof data[i] === 'object'){
      if (Array.isArray(data[i])){
        result.arrays.push(data[i]);
      } else{
        result.objects.push(data[i]);        
      }
    }
   }
  console.log(result);
  return(result);
 }

/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */

function multipliedByNextNumber(array){

  let newArray = [];

  for (let i = 0; i < array.length -1 ; i++){

    if(typeof array[i] === 'number'){
      newArray.push(array[i]*array[i+1]);
    }
  }
  
  if(typeof array[array.length-1] === 'number'){
      newArray.push(array[array.length-1]);
  }
  return newArray;
}

/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */

function multipliedEvenNumbers(array){

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
 
    if(typeof array[i] === 'number'){

      if(array[i] % 2 === 0){

        if(typeof array[i+1] === 'undefined'){
          newArray.push(array[i]*2);
          break;
        }

        for (let j = i + 1; j <array.length; j++) {
          if(array[j] % 2 === 0){
            newArray.push(array[i]*array[j]);
            break;
          } else if (j === array.length -1){
            newArray.push(array[i]*2);
          }
        }
      }
      else if(array[i] % 2 !== 0){
        newArray.push(array[i]);
      }
    }   
  }
return(newArray);
}

/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */

function multipliedOddNumbers(array){

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
 
    if(typeof array[i] === 'number'){

      if(array[i] % 2 !== 0){

        if(typeof array[i+1] === 'undefined'){
          newArray.push(array[i]*1);
          break;
        }

        for (let j = i + 1; j <array.length; j++) {
          if(array[j] % 2 !== 0){
            newArray.push(array[i]*array[j]);
            break;
          } else if (j === array.length -1){
            newArray.push(array[i]*1);
          }
        }
      }
      else if(array[i] % 2 === 0){
        newArray.push(array[i]);
      }  
  }
}
console.log(newArray);
return(newArray);
}


/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */

function multipliedEvenOddNumbers(array, type){

  let newArray = [];

  if (type === "even"){

  for (let i = 0; i < array.length; i++) {
 
    if(typeof array[i] === 'number'){

      if(array[i] % 2 === 0){

        if(typeof array[i+1] === 'undefined'){
          newArray.push(array[i]*2);
          break;
        }

        for (let j = i + 1; j <array.length; j++) {
          if(array[j] % 2 === 0){
            newArray.push(array[i]*array[j]);
            break;
          } else if (j === array.length -1){
            newArray.push(array[i]*2);
          }
        }
      }
      else if(array[i] % 2 !== 0){
        newArray.push(array[i]);
      }
    }   
  }
}
  else if (type === "odd"){
    for (let i = 0; i < array.length; i++) {
 
      if(typeof array[i] === 'number'){
  
        if(array[i] % 2 !== 0){
  
          if(typeof array[i+1] === 'undefined'){
            newArray.push(array[i]*1);
            break;
          }
  
          for (let j = i + 1; j <array.length; j++) {
            if(array[j] % 2 !== 0){
              newArray.push(array[i]*array[j]);
              break;
            } else if (j === array.length -1){
              newArray.push(array[i]*1);
            }
          }
        }
        else if(array[i] % 2 === 0){
          newArray.push(array[i]);
        }  
    }
  }
  } else {
    newArray = array;
  }
  console.log(newArray);
  return(newArray);
}

  

multipliedEvenOddNumbers([4, 3, 6, 8, 5, 7],"odd");
