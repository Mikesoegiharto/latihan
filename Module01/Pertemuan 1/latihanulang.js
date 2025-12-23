// function findRec (length, width){
//     console.log(length*width);
// }

// findRec(5, 3);

// function findPerimeterRec (length, width){
//     console.log(length*2 + width*2);
// }

// findPerimeterRec(5, 3);

// function findDiam(radius){
//     return('diameter =' + radius*2)
// }

// findDiam(5);

// function findCircumference(radius){
//    return('Circumference =' + 2*3.14*radius);
// }

// findCircumference(5);

// function findArea(radius){
//     return('Area =' + 3.14*radius**2);
// }

// console.log(findArea(5));

// function findAngle(a, b){
//     console.log(180-a-b);
// }

// findAngle(80, 65);

// let year = 365
// let month = 30

// function days(a){
//     let year = 365
//     let month = 30

//     const years = Math.floor(a/year);
//     const remainingMonth = a - year
//     const months = Math.floor(remainingMonth/month);
//     const remainingDays = a % 365 % 30
    
//     console.log(`${years} year, ${months} month, ${remainingDays} day`)
// }

// days(400);

const date1 = new Date('2022-01-20')
const date2 = new Date('2022-01-22')

const diffTime = Math.abs(date2 - date1);
const diffDate = diffTime / (1000*60*60*24)

console.log(diffDate);

