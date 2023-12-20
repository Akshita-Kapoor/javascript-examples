let nameObj1 = {
    firstName: 'Narendra',
    lastName: 'Modi',
}
let printName = function(hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + state);   // this keyword will point to the name object
} 

printName.call(nameObj1, 'Gandhi nagar', 'Gujrat');

let nameObj2 = {
    firstName: 'Sharukh',
    lastName: 'Khan'
}

/*  call method: function borrowing.
    We can borrow functions from other objects &
    use it with the data of some other object.
*/

/*  Here, first argument will be the reference.
    It means what we want our 'this' keyword to point to.

    Later arguments will be arguments to the function.
*/

printName.call(nameObj2, ' Mumbai', 'Maharashtra');

/*
    apply method: The only difference between call & apply method is the way we pass the arguments.
*/

printName.apply(nameObj2, [' Mumbai', 'Maharashtra']);
