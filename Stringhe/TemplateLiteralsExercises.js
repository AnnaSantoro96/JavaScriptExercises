console.log("EXERCISE #1");
console.log("Print a String with a value");
const name = "Anna";
console.log(`Hi! My name is ${name}.`);

console.log("");
console.log("EXERCISE #2");
console.log("Print a sum");
const n1 = 3;
const n2 = 2;
const result = n1 + n2;
console.log(`${n1} + ${n2} = ${result}`);

console.log("");
console.log("EXERCISE #3");
console.log("Print name, city and age of a person");
const na = "Anna";
const age = "30";
const city = "Salerno";
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

console.log("");
console.log("EXERCISE #4");
console.log("Create a HTML list and print the result");
const fruits = ["Apple", "Banana", "Orange"];
let listHTML = "<ul>";
for(let fruit of fruits){
    listHTML += `<li>${fruit}</li>;`
}
listHTML += "</ul>";
console.log(listHTML);

console.log("");
console.log("EXERCISE #5");
console.log("Email message");
const nome = "Anna";
const msg = `
Hi ${nome},

Welcome on our site!

We hope you find everything you need.
  
  Kind regards,
  The support team.
`;
console.log(msg);

console.log("");
console.log("EXERCISE #6");
console.log("Generate an URL");
const baseURL = "https://www.example.com/";
const parametro = "prodotto";
const urlCompleto = `${baseURL}${parametro}`;
console.log(`L'URL completo è: ${urlCompleto}`);

console.log("");
console.log("EXERCISE #7");
console.log("Format a monetary value");
const prezzo = 19.99;
console.log(`Il prezzo del prodotto è: €${prezzo.toFixed(2)}`);

console.log("");
console.log("EXERCISE #8");
console.log("Print a values entered by user");
const n = prompt("Inserisci il tuo nome:");
const eta = prompt("Inserisci la tua età:");
console.log(`Ciao ${n}! Hai ${eta} anni. Benvenuto!`);