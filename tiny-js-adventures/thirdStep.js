const var1 = 'test';
const var2 = 'test';
console.log(var1 == var2); // true
console.log(var1 === var2);

const var3 = 10;
const var4 = '10';
console.log(var3 == var4); // true
console.log(var3 === var4);

const var5 = null;
const var6 = undefined;
console.log(var5 == var6); //true
console.log(var5 === var6);//false

let letter = "A";
console.log(letter.charCodeAt(0));

let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33

let char = String.fromCharCode(66);
console.log(char);  // "B"

let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true

let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello

let message1 = "Hello, world!";
let world = message.slice(7);

console.log(world);  // world!