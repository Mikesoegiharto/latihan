//bagian 1 nomor 1
let arr = [12, 5, 23, 18, 4, 45, 32]
let minVal = Math.min(...arr);
let maxVal = Math.max(...arr);
function avg(arr){
    let sum = 0
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length
}

const average = avg(arr);


console.log("nilai min ;", minVal);
console.log("nilai max ;", maxVal);
console.log(average);

//bagian 1 nomor 2 
const fruit = ['apple', 'banana', 'cherry', 'date']
const flatFruit = fruit.toString();


console.log(flatFruit);

//bagian 1 nomor 3

function secondSmallestElement(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
}

const numbers = [5, 3, 7, 1, 2, 6];
console.log("Second smallest element:", secondSmallestElement(numbers));

//bagian 1 nomor 4

function calculateArray(arr1, arr2) {
    let result = [];
    for (let i = 0; i<arr1.length; i++) {
        result.push(arr1[i]+arr2[i]);
    }
    return result;
}

const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
const sumArray = calculateArray(array1, array2);
console.log(sumArray);


//bagian1 nomor 5
function addToArrayIfNotExist(val, arr) {
  arr.push(val);

  // Use new Set() to create a new collection, then create a new array from this collection
  const uniqueArr = Array.from(new Set(arr));

  return uniqueArr;
}

console.log(addToArrayIfNotExist(2, ['a', 'b', 'c', 1, 2])); // [ 'a', 'b', 'c', 1, 2 ]
console.log(addToArrayIfNotExist(3, ['a', 'b', 'c', 1, 2])); // [ 'a', 'b', 'c', 1, 2, 3 ]