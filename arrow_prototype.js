function Product(title, price) {
    this.title = title;
    this.price = price;
}

let p1 = new Product('Box', 50);

console.log(p1);
console.log(p1.constructor);
console.log(Product.prototype);

let Employee = (id, name) => {
    this.id = id;
    this.name = name;
}

//let emp1 = new Employee('101', 'John');

// console.log(emp1);
console.log(Employee.prototype);
