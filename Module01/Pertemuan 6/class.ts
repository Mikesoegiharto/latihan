class user {
    name: string = ''
    age: number = 0
    greet(){
        console.log('hello im a user')
    }
}

function User2(){
    this.name = ''
    this.age = 0
    this.greeting(){
        console.log('hellow im a user')
    }
}

console.log(user)
console.log(User2)

let user1: user = new user()
let user2: user = new user()

console.log(user1)
console.log(user2)

user1.name = 'dimas'
user1.age = 20

user2.name = 'rian'
user2.age = 19

console.log(user1)
console.log(user2)

user1.greeting()
user2.greeting()