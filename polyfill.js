let nameObj1 = {
    firstName: 'Narendra',
    lastName: 'Modi',
}
let printName = function(hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ', ' + hometown + ', ' + state);
} 
let printMyName = printName.bind(nameObj1, 'Gandhi Nagar');
printMyName('Gujrat');

Function.prototype.myBind = function(...args) {  // args is the array of arguments passed.
    let obj = this;
    // 'this' keyword points to printName function

    let params = args.slice(1);
    return function(...args2) {
       // obj.call(args[0], params);

       // we used apply method here instead of call, because slice funtion returns us an array in params.
        obj.apply(args[0], [...params, ...args2]);  // [...params, ...args] -> creates a larger array while concating both the arrays (params & args2) and pass to the apply method.
    }
}

let printMyName2 = printName.myBind(nameObj1, 'Gandhi Nagar');
printMyName2('Gujrat'); // this argument will be received in the function which we are returning (line 16).
