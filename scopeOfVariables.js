
//? Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope
// Function scope
// Global scope



//? 1. Global Scope - can be used anywhere in code, inside loops, functions and if-else.

let a = 5;
var b = 8;
const c = 9;

function global_scope() { 
    console.log(a);
    console.log(b);
    console.log(c);
}

global_scope();




//? 2. Function Scope - Variables defined inside function are not accessible(visible) from outside the function.


function fun_scope(){
    let x = 99;
    var y = 88;
    const z = 55;
    console.log("can't be accessed");
}

fun_scope();

// console.log(x);
// console.log(y);
// console.log(z);
// these variables cant be accessed outside function, throw error.



//? 3. Block Scope - Variables declared inside a { } block cannot be accessed from outside the block.

// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

// Variables declared with the var keyword can NOT have block scope.
// Variables declared with var inside a { } block can be accessed from outside the block.


var amount = 554433;
var amount = 9988;

if(true){
    let p = 99;
    var amount = 1000;
    const q = 33;
}

// console.log(p,q);
// these cant be accessed as they have bolck scope.\

console.log(amount);
// "var" can be accessed and changed.

var amount = 9999;
console.log(amount);




//? The problem with "var" : 
// if we are using multiple js files with same variable name using var keyword,
// then it can be initialized and changed as many times in different files,
// it will result in errors in output.
// so, it is best practice to not use it.





// ------------------------------------------------------------------------------------


let habibi = 50;

if(true){
    let habibi = 99;
    console.log(habibi);
}

console.log(habibi);


// the first habibi is global scope and second is block scope so can be declared with same name.
// it check for variable name in its local scope first then checks in global scope.
// we cant redeclare it in global/function/block  scope using let and const.

// we cant access let and const before declaring , it throw error.


// we can access var even before it is declared.
console.log(gg);
var gg = 123;
// here, we can access variable but not its value.




// similarly, we can access a function before it is declared.

greet();
function greet(){
    console.log("hello greet");
}

// meet();
const meet = function () {
    console.log("hello meet");
}

//   but if we use variable for a function then we cant access it before declaration.

