let arr = ['Mango', 'Apple'];
let obj1 = {
    type: 'fruit',
    name: 'mango',
    getFruitName: function() {
        console.log('fruit: ', this.name);
    }
}

let obj2 = {
    type: 'vegetable'
}


// To demonstrate prototypal inheritance, not advisable to do.
obj2.__proto__ = obj1;

/*
    Everything in JS is an object.
    
    Array.__proto__ = Function with hidden methods & properties.
    Object.__proto = Function with hidden methods & properties.
    Object.__proto__.proto = Object
    Object.__proto__.proto.__proto__ = null
*/