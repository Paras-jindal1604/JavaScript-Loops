
//* for - loops through a block of code a number of times

// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }
// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.



for(let i=0; i<20; i++){
    console.log("I'm Vengeance");
}

//* NOTE - if we initialize variable inside for loop with const, it will give error.
// because the value of "const" variable can not be incremented.

// sum of first 100 natural numbers

let sum = 0;

for(let i=1; i<=100; i++){
    sum += i;
}
console.log(sum);


//^ Why c++ is faster than js ?
//^ in js, everytime new space will be allocated to sum and i as their values are changing.
// but in cpp new space is not allocated everytime, which makes it faster.


//? NOTE - if there is single statement in loop, no need to write curly braces.


let n = 5; // number of rows

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}



