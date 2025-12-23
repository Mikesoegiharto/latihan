var Product = /** @class */ (function () {
    function Product() {
        this.name = '';
        this.price = 0;
    }
    Object.defineProperty(Product.prototype, "setName", {
        set: function (name) {
            if (name == '') {
                console.log(' name is required');
            }
            else {
                this.name = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setPrice", {
        set: function (price) {
            if (price < 0) {
                console.log(' price must be higher than 0');
            }
            else {
                this.price = price;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
// product adalah object dari class product
var product1 = new Product();
product1.setName = 'NZXT Tower Matle Black';
product1.setPrice = 150000;
console.log(product1);
