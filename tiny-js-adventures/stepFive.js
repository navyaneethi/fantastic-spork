//Functions

function greet(name ) {     //function with a parameter 'name'
  console.log("Hello, " + name + "!");
}
greet("Alice")  //calling the function with argument "Alice"
greet("Bob")
greet("Charlie")

function add(a, b) {   //function with two parameters 'a' and 'b'
  return a + b;       //returns the sum of a and b
}
const sum1 = add(5, 3);  //calling the function with arguments 5 and 3
console.log("Sum: " + sum1);

const arrowSum = (x, y) => x + y;  //arrow function to add two numbers
const sum2 = arrowSum(10, 15); //calling the arrow function
console.log("Arrow Function Sum: " + sum2);


//Scope
//Block scope
//Function scope
//Global scope

if (true) {
  let blockScoped = "I am block scoped";
    console.log(blockScoped); // Accessible here
}
//console.log(blockScoped); // Error: blockScoped is not defined

function functionScope() {
  var functionScoped = "I am function scoped";
  console.log(functionScoped); // Accessible here
}
functionScope();
//console.log(functionScoped); // Error: functionScoped is not defined

var globalScoped = "I am globally scoped";
function globalScope() {
  console.log(globalScoped); // Accessible here
}
globalScope();
console.log(globalScoped); // Accessible here