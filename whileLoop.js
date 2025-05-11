
//? The While Loop - loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
   // code block to be executed
// }


// print numbers from 1 to 10

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

// NOTE - If you forget to increase the variable used in the condition, the loop will never end.
//  This will crash your browser.



// sum of numbers from 1 to 100

let j = 1;
let sum = 0;
while(j <= 100){
    sum += j;
    j++;
}
console.log(sum);




//? Do While Loop -This loop will execute the code block once, before checking if the condition is true,
//  then it will repeat the loop as long as the condition is true.

// Syntax
// do {
   // code block to be executed
// }
// while (condition);


// NOTE - The loop will always be executed at least once, even if the condition is false,
//  because the code block is executed before the condition is tested



let k = 5;
do{
    console.log("hey! Mr. Wayne");
} while(k > 10);

// loop ran for one time even if condition is false.



