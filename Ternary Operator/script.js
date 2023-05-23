// let x = 20;
// let y = 30;
// let res = (x>y)?x:y;
// console.log(`Greatest among two numbers are : ${res}`);



// let x = 20;
// let y = 30;
// let z = 40;
// let res = (x>y)?(x>z?x:z):(y>z)?y:z;
// console.log(`Greatest among three numbers are : ${res}`);


let x = 20;
let y = 30;
let z = 40;
let a = 50;
let res = (x>y)?(x>z?x:z):(x>a?x:a)? (y>z?y:z):(z>a)?z:a;
console.log(`Greates among four numbers are : ${res}`);