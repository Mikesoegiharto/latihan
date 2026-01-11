var user = /** @class */ (function () {
    function user() {
        this.name = '';
        this.age = 0;
    }
    user.prototype.greet = function () {
        console.log('hello im a user');
    };
    return user;
}());
function User2() {
    this.name = '';
    this.age = 0;
    this.greeting();
    {
        console.log('hellow im a user');
    }
}
console.log(user);
console.log(User2);
var user1 = new user();
var user2 = new user();
console.log(user1);
console.log(user2);
user1.name = 'dimas';
user1.age = 20;
user2.name = 'rian';
user2.age = 19;
console.log(user1);
