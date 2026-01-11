class Product {
    private name: string = ''
    private price: number = 0

    set setName(name: string){
        if (name == ''){
            console.log(' name is required')
        } else {
            this.name = name
        }
    }

    get getName() {
        return this.name
    }
    
    set setPrice(price: number){
        if(price<0){
            console.log(' price must be higher than 0')
        } else {
            this.price = price
        }
    }
    
    get getPrice() {
        return this.price
    }
}

// product adalah object dari class product
let product1 = new Product()
product1.setName = 'NZXT Tower Matle Black'
product1.setPrice = 150000
console.log(product1)