// function cariAngka(num){
//     let sortir = num.sort((a, b) => a - b)
//     console.log(sortir)

//     let terkecil = `angka terkecil adalah ${sortir[0]}`
//     console.log(terkecil)

//     let besar = Math.max(...sortir)
//     let terbesar = `angka terbesar adalah ${besar}`
//     console.log(terbesar)

//     let sum = 0 
//     for (i=0; i<sortir.length; i++){
//         sum += sortir[i]
//     }
//     console.log ('angka rata-rata adalah' + ' ' + sum / sortir.length)
// }

// cariAngka([12, 5, 23, 18, 4, 45, 32])

// function words(words){
//     const length = words.length

//     if(length ==0){
//         return ''
//     } else if (length === 1){
//         return words[0]
//     }
    
//     const allButLast = words.slice(0, -1). join(' ,')
//     const lastWord = words[length-1]
//     return `${allButLast} and ${lastWord}`

// }

// console.log(words(['apple', 'banana', 'cherry', 'date']))


// function number2 (num){
//     let sortir = num.sort()

//     console.log(sortir[1])
// }

// number2([5, 3, 1, 7, 2, 6])

// function calculate(arr1, arr2){
//     let res = []
//     for(let i=0; i<arr1.length; i++){
//         res.push(arr1[i] + arr2[i])
//     }
//     return res
// }

// console.log(calculate([1, 2, 3], [3, 2, 1]))

function test(arr, num){
        if(!arr.includes(num)){
            arr.push(num)
        }
            return arr

}

console.log(test([1, 2, 3, 4], 7))


