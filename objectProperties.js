
//? writable, enumerable, configurable 

const obj = {
    name : "batman",
    age : 23
};

console.log(obj);

console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// output : 
//   value: 'batman',
//   writable: true,
//   enumerable: true,
//   configurable: true

//  it gives all the properties of key of an object 
//  by default all these properties are true.


//^ writable = true means that the value of that key can be changed.
// if writable is false then we can not change the values of keys of object.

obj.name = "madman";
console.log(obj);


//^ configurable = true  means that we can change the value of writable, enumerable and configurable.
// if configurable is false then we can not change the value of writable and enumerable.


const obj2 = {};

Object.defineProperty(obj2, 'name', {
    value : "rohan",
    writable : false,
    enumerable : true,
    configurable : false
})

// Object.defineProperty(obj2, 'name',{
//     writable : true
// })
// this throw error as configurable is false, so we cant redefine property


obj2.name = "sohan";
// the name wont change as writable is false.

console.log(obj2);




//^ enumerable = true  means that the keys are visible to for-in loop. 

const obj3 = {
    name : "lucy",
    age : 30,
    account_num : 12345
};

Object.defineProperty(obj3, "name",{
    enumerable : false
});

// name wont print, other keys will print.
for(let a in obj3){
    console.log(a);
}


// even if the key is inherited, if its enumerable is true then it can be accessed.

const obj4 = Object.create(obj3);
obj4.pin = 1122;
obj4.city = "delhi";

for(let b in obj4){
    console.log(b);
}
// all inherited keys will be accessed except name






//^ here, object get its properties from Object.prototype but it does not print those keys.
// because the enumerable of those properties is false. so they are not visible to us.
// e.g. toString(), valueOf()

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

// output 

// value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true



