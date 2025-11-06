// no 1
const length = 5
const width = 3

console.log(length*width);

// no 2
const lengthrec = 5
const widthrec = 3

console.log(lengthrec*2 + widthrec*2);

// no 3
const radiusValue = 5;

console.log(radius = radiusValue*2);
console.log(circumference = 2*3.14*radiusValue);
console.log(area = 0.25*3.14*(radiusValue*2)**2);

// no 4
const a = 80;
const b = 65;

console.log(180-(a+b));

//no 5
const day1 = 400;
const day2 = 366;

const year =Math.floor(day1/365);
const remainingMonths = day1 % 12;
const month = Math.floor(remainingMonths/30);
const days = remainingMonths%30;

console.log(`${year}years, ${month}months, ${days}days`);

//no 6
let date1 = new Date("2022-01-20");
let date2 = new Date("2020-01-22");

let result = date1 - date2;
console.log(result / (24*60*60*1000));