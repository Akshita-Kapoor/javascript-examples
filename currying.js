let multiply = function (x,y) {
    console.log(x*y);
}

/* create a copy of mehtod using bind and make more
   methods out of it by pre-setting some argumnets inside the function.
*/
let multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(5);

// another way by closures.

let multiply1 = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let multiplyByThree = multiply1(3);

multiplyByThree(5);
