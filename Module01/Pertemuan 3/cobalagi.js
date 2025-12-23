// function multi(num){
//     for (let i=0; i<num; i++){
//         console.log(num + 'x' + i + '=' + num*i);
//     }
// }

// console.log(multi(9))

// function palindrome(test){
//     let kata = test.split('').join()
//     let testSplit = test.split('').reverse().join();

//     console.log(kata)
//     console.log(testSplit)

//     if(kata === testSplit){
//         console.log('palindrome');
//     } else {
//         console.log('bukan palindrome')
//     }

//     // for(let i=0; i<testSplit.length; i++){
//     //     kata.push(i);
//     // }
//     // // let split = textSplit.split('')
//     // console.log(testSplit);
//     // // for(let i=0; i<text.length< i++){

//     // // }
// }

// palindrome('berak')

// function cmToKm(num){
//     console.log(num/100000 + 'km');
// }

// cmToKm(100000)

// function currency(num){
//     let IDR = new Intl.NumberFormat('id-ID', {
//         style: 'currency',
//         currency: 'IDR'
//     })
//     console.log(`${IDR.format(num)}`)

//     // let titik = num.toString().split('')
//     // let dorong = titik[1] = '.'
//     // let gabung = parseFloat(`${}`)
//     // console.log(titik)
//     // console.log('Rp.' + gabung)
// }

// currency(1000);

// let string = 'hello world'
// let res = string.replace('hello', 'ho')

// console.log(res)

// function capitalize(str){
//     const string = str.split(' ');
//     const cased = [];

//     string.map((word) => {
//         cased.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
//         console.log(word.slice(1));
//     });
//     return cased.join(' ');

// }

// console.log(capitalize('hello world'))

// function toggleCase(str){
//     let toggledString = ''

//     for (let i=0; i<str.length; i++){
//         let char = str[i]
//         if(char === char.toUpperCase() && char !== char.toLowerCase()){
//             toggledString += char.toLowerCase();
//         } else if(char === char.toLowerCase() && char !== char.toUpperCase()){
//             toggledString += char.toUpperCase();
//         } else {
//             toggledString += char
//         }
//     }
//     return toggledString
//     // return str[i]
// }

// console.log(toggleCase("HeLLo wOrld"))

// function biggest(num1, num2){
//     console.log(Math.max(num1, num2));
// }

// biggest(21, 42)

// let angka = [24, 42, 18]
// angka.sort()
// console.log(angka)

// function stringOrNot(num){
//     let string = typeof("string");
//     let number = typeof(1);

//     if(typeof(num) === string){
//         console.log(1)
//     } else if (typeof(num) === number ){
//         console.log(2)
//     } else {
//         console.log('others')
//     }
// }

// stringOrNot(true)

// let a = console.log(typeof(1))
// let b = "number"

// console.log(a===b)

function change(char){

    const modifiedString = char.replaceAll(/a/gi, '*');
    console.log(modifiedString)
    // let changeToText = char.split('')
    // let result = []
    // for(let i=0; i<changeToText[i]; i++){
    //     if([i] === 'a'){

    //     }
    // }
}
change('berak');