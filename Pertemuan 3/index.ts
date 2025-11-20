const trafficLamp: string = "yellow"
const age = 20

if (trafficLamp === "red") {
    console.log("stop");
} else if (trafficLamp == "yellow") {
    console.log("get ready")
} else if (trafficLamp == "green") {
    console.log("go");
} else {
    console.log("do what you want?")
}

switch (trafficLamp){
    case "red":
        console.log("stop")
        break;
    case "yellow":
        console.log("get ready")
        break;
    case "green":
        console.log("go")
        break;
    default:
        console.log("do what you want")
}


// mainin di true atau conditionnya 
switch (true){
    case age >= 17 && age <= 65:
        console.log("youre an adult")
        break;
    default :
        console.log("you are not and adult")
}

if(false) {
    console.log("this will never run")
}


// if(12000) {
//     console.log("this will never run")
// }

console.log (age>= 20 || age<=20)

console.log(age<20 || age >20)

console.log(age != 20)
console.log(!false)

console.log(false && "hello")
console.log(true && "hello")

age > 17 ? console.log("you are npw have an ID") : console.log("you are underage")

// trafficLamp == "red" ? console.log("stop") :
//     trafficLamp == "yellow" ? console.log("get ready")