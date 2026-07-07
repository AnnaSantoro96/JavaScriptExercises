console.log("EXERCISES #1");
console.log("Sum");
const n1 = 3;
const n2 = 3;
const sum = n1 + n2;
console.log(n1 + " + " + n2 + " = " + sum);

console.log("");

console.log("EXERCISES #2");
console.log("Subtraction");
const n3 = 10;
const n4 = 5;
const sot = n3 - n4;
console.log(n3 + " - " + n4 + " = " + sot);

console.log("");

console.log("EXERCISES #3");
console.log("Multiplication");
const n5 = 2;
const n6 = 2;
const mul = n5 * n6;
console.log(n5 + " * " + n6 + " = " + mul);

console.log("");

console.log("EXERCISES #4");
console.log("Division");
const d1 = 8;
const d2 = 2;
const div = d1 / d2;
console.log(d1 + " / " + d2 + " = " + div);

console.log("");

console.log("EXERCISES #5");
console.log("Rest");
const r1 = 12;
const r2 = 5;
const rest = r1 % r2;
console.log(r1 + " % " + r2 + " = " + rest);

console.log("");

console.log("EXERCISES #6");
console.log("Increase of 1")
let num = 4;
console.log("Number not incremented: " + num);
num++;
console.log("Number incremented: " + num);

console.log("");

console.log("EXERCISES #7");
console.log("Decrease of 1");
let n = 4;
console.log("Number not decremented: " + n);
n--;
console.log("Number decremented: " + n);

console.log("");

console.log("EXERCISES #8");
console.log("Power");
const base = 2;
const exp = 3;
const power = Math.pow(base, exp);
console.log(base + " ** " + exp + " = " + power);

console.log("");

console.log("EXERCISES #9");
console.log("Square root");
const s = 16;
const sqr = Math.sqrt(s);
console.log("Square root of " + s + " is " + sqr);

console.log("");

console.log("EXERCISES #10");
console.log("Round of a number");
const r = 3.5;
const round = Math.round(r);
console.log(r + " rounded is " + round);

console.log("");

console.log("EXERCISES #11");
console.log("Random number");
const min = 1;
const max = 10;
const random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number between " + min + " - " + max + " is " + random); 

console.log("");

console.log("EXERCISES #12");
console.log("Conversion from string to number")
const st = "123";
const nu = parseInt(st);
console.log("Conversione of " + st + " to a number --> " + nu);