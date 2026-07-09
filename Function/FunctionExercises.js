console.log("EXERCISE #1");
console.log("Rectangle Area");
function area(base, height){
    return base * height;
}

console.log(area(4,4));

console.log("");
console.log("EXERCISE #2");
console.log("Even number or odd number");
function evenOdd(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

console.log(evenOdd(2));
console.log(evenOdd(3));

console.log("");
console.log("EXERCISE #3");
console.log("Concatenating two strings");
function concat(str1, str2){
    return str1.concat(str2);
}

console.log(concat("Anna ", "Santoro"));

console.log("");
console.log("EXERCISE #4");
console.log("Print the factorial of a number");
function factorial(number){
      let fattoriale = 1;

  for (let i = 1; i <= number; i++) {
    fattoriale *= i;
  }

  return fattoriale;

}

 const n = 5
  console.log("Factorial of " + n + " is: " + factorial(n));

console.log("");
console.log("EXERCISE #5");
console.log("Random number");
function random(min, max){
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const randomNumber = random(min, max);
console.log("Random number: " + randomNumber);
