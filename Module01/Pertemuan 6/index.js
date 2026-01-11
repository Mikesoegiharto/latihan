var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var obj = new Object();
var myObj = {};
var myName = 'Aries Dimas';
var nameAgain = myName; //aries dimas
var myKey = "name";
var user = {
    name: "dimas",
    age: 30,
    'alamat-saya': 'puri-kembangan',
    address: {
        'street': 'kebasiran',
        'district': 'pagedangan',
        city: 'tangerang regency',
        province: 'jakarta'
    },
    typeCode: function () {
        console.log('coding...');
    },
    run: function () {
        console.log('running....');
    },
    read: function () {
        console.log('reading...');
    }
};
// console.log(obj, myObj)
console.log(user.name);
user.run();
console.log(myName.toLowerCase());
console.log(myName.split(''));
console.log(typeof myName);
var myNameArr = myName.split('');
console.log(typeof myNameArr);
console.log(typeof []);
// console.log(user['age'])
// console.log(user['myKey'])
// console.log(user[myKey])
// console.log(user['alamat-saya'])
// console.log(user)
// delete user['alamat-saya']
// deleter user['run']
// console.log(user)
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.street);
// console.log(user, user.address)
console.log(Object.keys(user));
var num = 90; //primitive
var nums = [1, 2, 3]; //dataStructure / non-primitive
var number = nums;
console.log(nums);
console.log(number);
num = 91;
console.log(myName);
nums[1] = 90;
// console.log(nums)
console.log('nums==>', nums);
console.log('numbers ==>', number); // passing by reference
// console.log(nameAgain)
// myName += " yudhistira"
// console.log(myName)
// console.log(nameAgain) // aries dimas --> passing by value
// user['salary'] = 1200000
// console.log(user)
// user.age = 20
// console.log(user)
// for (let key in person){
//     console.log(key, '=>', person[key])
// }
//destructuring array
var _b = [10, 20], num1 = _b[0], num2 = _b[1];
console.log(num1, num2);
//destructuring object
// let name = user.name
// let age = user.age
// let {name, age} = user
// console.log(name, age)
var otherObj = {
    color: 'red',
    move: function (direction) {
        console.log(' move', direction);
    }
};
var merge = __assign(__assign({}, user), otherObj);
console.log(merge);
