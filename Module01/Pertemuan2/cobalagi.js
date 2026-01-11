// function oddOrEven(num){
//     if (num % 2 === 0){
//         console.log('Even')
//     } else {
//         console.log('Odd')
//     }
// }

// oddOrEven(11);

// function primeOrNot(n){
//     if(n<=1){
//         return false;
//     }
//     for (let i=2; i<n.length; i++){
//         if(n % i === 0){
//             return false;
//         } 
//     }
//     return true
// }

// console.log(primeOrNot(11))

// function sumNumber(n){
//     let total = 0
//     for (let i=1; i<=n; i++){
//         total += i;
//     }
//     return total
// }

// console.log(sumNumber(3))

function timesNumber(n){
    let total = 1
    for (let i=1; i<=n; i++){
        total *= i;
    }
    return total
}

console.log(timesNumber(4));
console.log(timesNumber(6));
