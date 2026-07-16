console.log("EXERCISE #1");
console.log("Sum of value");

const numeri = [1, 2, 3, 4, 5];
let somma = 0;

for (let numero of numeri) {
  somma += numero;
}

console.log("La somma degli elementi è:", somma);

console.log("");
console.log("EXERCISE #2");
console.log("Found the max value");

const num = [1, 2, 3, 4, 5];
let max = 0;
for(let i = 0; i <= num.length; i++){
    if(num[i] > max){
        max = num[i];
    }
}
console.log("Max value: " + max);

console.log("");
console.log("EXERCISE #3");
console.log("Found the min value");
const array = [1, 2, 3, 4, 5];
let min = array[0];
for(let i = 0; i <= array.length; i++){
    if(num[i] < min){
        min = array[i];
    }
}
console.log("Min value: " + min);

console.log("");
console.log("EXERCISE #4");
console.log("New Array with a even value");
const fullArray = [1, 2, 3, 4, 5];
const evenArray = [];
for(let i = 0; i <= fullArray.length; i++){
    if(fullArray[i] % 2 == 0)
        evenArray.push(fullArray[i]);
}
console.log("Array with even values: " + evenArray);

console.log("");
console.log("EXERCISE #5");
console.log("Concat two arrays");
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = array1.concat(array2);
console.log("Concat arrays: " + array3);

console.log("");
console.log("EXERCISE #6");
console.log("Remouve duplicates");
const a1 = [1, 2, 2, 4, 4];
const a2 = [];
for(let i = 0; i <= a1.length; i++){
    if(!a2.includes(a1[i]))
        a2.push(a1[i]);
}
console.log("Array without duplicates: " + a2);

console.log("");
console.log("EXERCISE #7");
console.log("Found first occurence");
const str = ["mango", "mela", "pera", "banana"];
const firstOccurence = "pera";
const index = str.indexOf(firstOccurence);
console.log("First occurence of " + firstOccurence + "is " + index);

console.log("");
console.log("EXERCISE #8");
console.log("Reverse elements");
const el = [1, 2, 3, 4, 5];
const rev = el.reverse();
console.log("Reverse elements: " + rev);

console.log("");
console.log("EXERCISE #9");
console.log("Averege lenght of the strings");
const a = ["ciao", "salve", "buongiorno", "arrivederci"];
let lunghezzaTotale = 0;

for (let stringa of a) {
  lunghezzaTotale += stringa.length;
}

const lunghezzaMedia = lunghezzaTotale / a.length;

console.log("Lunghezza media delle stringhe:", lunghezzaMedia);

console.log("");
console.log("EXERCISE #10");
console.log("Join all elements");
const ar = ["Ciao", "come", "stai?"];
const stringaUnita = ar.join(" ");

console.log("Stringa unita:", stringaUnita);