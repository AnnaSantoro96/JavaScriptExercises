console.log("EXERCISE #1");
console.log("Print the String's lenght");
const str = "Hello World!";
console.log("Lenght: " + str.length);

console.log(" ");

console.log("EXERCISE #2");
console.log("Concat two strings");
const str1 = "Hello ";
const str2 = "World";
console.log(str1.concat(str2));

console.log(" ");

console.log("EXERCISE #3");
console.log("Check if the strings are the same");
const str3 = "Hello";
const st4 = "World";
console.log("The strings are the same? " + str3 === st4);
console.log("The strings are not the same? " + str3 !== st4);

console.log(" ");

console.log("EXERCISE #4");
console.log("Conversion from string to number");
const str5 = "123";
const conversion = parseInt(str5);
console.log("Conversion: " + conversion);

console.log(" ");

console.log("EXERCISE #5");
console.log("Find the substring");
const string = "Hello Word";
const substring = "el";
const result = string.includes(substring);
console.log("The substring is included? " + result);

console.log(" ");

console.log("EXERCISE #6");
console.log("Substring extraction");
const fullStr = "HelloWorld";
const subStr = fullStr.slice(1, 5);
console.log("Extracted string " + subStr);

console.log(" ");

console.log("EXERCISE #7");
console.log("Convert a string to uppercase")
const lowerStr = "hello world";
const upperStr = lowerStr.toUpperCase(lowerStr);
console.log("UpperCase string: " + upperStr);

console.log(" ");

console.log("EXERCISE #8");
console.log("Convert a string to lowercase");
const uppercaseStr = "HELLO WORLD";
const lowercaseStr = uppercaseStr.toLowerCase(uppercaseStr);
console.log("Lowecase string: " + lowercaseStr);

console.log(" ");

console.log("EXERCISE #9");
console.log("Find a substring and replace it");
const full = "Hello World";
const sub = full.slice(1, 5);
console.log("Substring: " + sub);
const rep = full.replace(sub, "aaaa");
console.log("String with replace: " + rep);

console.log(" ");

console.log("EXERCISE #10");
console.log("Remove white space");
const strWhitSpace = "  Hello   ";
console.log("String with space: " + strWhitSpace);
const strWithoutSpace = strWhitSpace.trim();
console.log("String without space: " + strWithoutSpace);