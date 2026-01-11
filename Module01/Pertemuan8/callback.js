// function calculator (a: number, b: number, cb: (num: number) => number){
//    return cb(a+b)
// }
// function displayer(num: number) {
//     return num 
// }
// console.log(calculator(5, 6, displayer))
var products = [
    { name: 'abc', price: 1000 },
    { name: 'def', price: 2000 }
];
var money = 5000;
function shopping(product, money, cb) {
    console.log(product === null || product === void 0 ? void 0 : product.name, ' dibeli dengan harga', product === null || product === void 0 ? void 0 : product.price);
    console.log('uang anda : ', money);
    cb(money - (product === null || product === void 0 ? void 0 : product.price));
}
shopping(products[0], money, function (changes) {
    console.log('kembalian anda: ', changes);
});
