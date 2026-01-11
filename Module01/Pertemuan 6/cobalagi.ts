// function calculatedStudents(students: Student[]){
//     let result = {
//         age : {
//             highest : students[0].age,
//             lowest : students[0].age,
//             average : 0
//         },
//         score : {
//             highest : students[0].score,
//             lowest : students[0].score,
//             average : 0
//         }
//     }

//     for (let i=0; i<students.length; i++){
//         result.age.average += students[i].age
//         result.score.average += students[i].score

//         if(students[i].age > result.age.highest){
//             result.age.highest = students[i].age
//         }
//         if(students[i].age < result.age.lowest){
//             result.age.lowest = students[i].age
//         }
//         if(students[i].score > result.score.highest){
//             result.score.highest = students[i].score
//         }
//         if(students[i].score < result.score.lowest){
//             result.score.lowest = students[i].score
//         }
//     }
//     result.age.average = Math.ceil(result.age.average / students.length)
//     result.score.average = Math.ceil(result.score.average / students.length)
    
//     return result
// }

// class Student {
//     name: string = ''
//     email: string = ''
//     age: number = 0
//     score: number = 0

//     constructor (name: string, email: string, age: number, score: number){
//         this.name = name
//         this.email = email
//         this.age = age
//         this.score = score
//     }
// }

// let students = [
//     new Student('siti kurnia', 'sitikurnia@gmail.com', 15, 76),
//     new Student('hendrik', 'hendrik@gmail.com', 16, 89),
//     new Student('fadil', 'fadil@gmail.com', 14, 82)
// ]

// console.log(calculatedStudents(students));


class Product {
    private name : string = ''
    private price : number = 0

    set setName(name: string){
        if (name == ''){
            console.log('name is required')
        } else {
            this.name = name 
        }
    }

    get getName(){
        return this.name
    }
    
    set setPrice(price: number){
        if (price < 0){
            console.log('price must be higher than 0')
        } else {
            this.price = price
        }
    }

    get getPrice (){
        return this.price
    }
}

class Transaction{
    total: number = 0
    products: {product: Product, qty: number, subtotal: number}[] = []

    addToCart (product: Product, qty: number){

        this.products.push({
            product: product,
            qty: qty,
            subtotal: product.getPrice * qty
        })
        this.total += product.getPrice * qty
    }
    showTotal(){
        return this.total
    }
    checkout(){
        return {
            detail : this.products,
            total: this.total
        }
    }

}

let product1 = new Product()
product1.setName = 'BERAK'
product1.setPrice = 150000
console.log(product1)