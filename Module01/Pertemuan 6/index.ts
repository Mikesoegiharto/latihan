let obj = new Object()
let myObj = {}
let myName = 'Aries Dimas'
let nameAgain = myName //aries dimas
let myKey = "name"

let user = {
    name: "dimas",
    age: 30,
    'alamat-saya': 'puri-kembangan',
    address: {
        'street': 'kebasiran',
        'district': 'pagedangan',
        city: 'tangerang regency',
        province: 'jakarta'
    },
    typeCode: () => {
        console.log('coding...')
    },
    run: function () {
        console.log('running....')
    },
    read () {
        console.log('reading...')
    }
}

// console.log(obj, myObj)
console.log(user.name)
user.run()

console.log(myName.toLowerCase())
console.log(myName.split(''))

console.log(typeof myName)

let myNameArr = myName.split('')

console.log(typeof myNameArr)
console.log(typeof [])

// console.log(user['age'])
// console.log(user['myKey'])
// console.log(user[myKey])
// console.log(user['alamat-saya'])

// console.log(user)
// delete user['alamat-saya']
// deleter user['run']
// console.log(user)

console.log(user.address?.street)
// console.log(user, user.address)

console.log(Object.keys(user))

let num = 90 //primitive
let nums = [1, 2, 3] //dataStructure / non-primitive
let number = nums
console.log(nums)
console.log(number)

num = 91
console.log(myName)

nums[1] = 90
// console.log(nums)
console.log('nums==>', nums)
console.log('numbers ==>', number) // passing by reference


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
let [num1, num2] = [10, 20]
console.log(num1, num2)

//destructuring object
// let name = user.name
// let age = user.age

// let {name, age} = user
// console.log(name, age)

let otherObj = {
    color: 'red',
    move: (direction:string) => {
        console.log(' move', direction)
    }
}

// let merge = {...user, ...otherObj}
// console.log(merge)

// user.typeCode()
// user.read()
// user.run()

let user2 = {}

Object.assign(user2, user)
console.log(user2)

let user3 = Object.create(user)
console.log(user3)