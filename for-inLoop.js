

//? The For In Loop -  loops through the properties of an Object

const obj = {
    name : "batman",
    age : 23,
    city : "gotham"
};

for(let i in obj){
    console.log(i, obj[i]);
}

// so we iterate through the keys of object of object using for-in loop.

console.log(Object.keys(obj));

// but we can also get the keys of an object using Object.keys() method.


//? Let's take an example to understand the difference b/w for-in loop and Object.keys() method.


const obj2 = Object.create(obj);
obj2.gender = "male";
obj2.balance = 99;
// console.log(obj2);

console.log(Object.keys(obj2));
// only the new keys defined by user are accessed.

for(let j in obj2){
    console.log(j);
}
// all the keys-  "newly added and inherited"  are accessed.


//^ Object.keys() only access new keys added. It can't access inherited keys.
//^ for-in loop can access inherited keys also.


// ---------------------------------------------------------------------------------------

//^ we should not use for-in loop with arrays :
// for-in loop only look for key-value pairs and access them, and array is also stored as object.

let arr = [11,22,33,44,55];


for(let i in arr){
    console.log(i, arr[i]);
}
// here it is useful to access index of array elements and elements too.

// but if we made these changes to array - 

arr.name = "batman";

for(let j in arr){
    console.log(j, arr[j]);
}


// now it consider "name" as a key  and "batman" as its value which is not true for array.
// so we should not use for-in loop for arrays.




