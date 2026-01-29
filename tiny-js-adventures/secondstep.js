// var x
// var y
// var z  cntrl + /

let x = 10
let y = 5
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y) // exponentiation
console.log(++x) // pre-increment
console.log(--y) // pre-decrement

console.log(x == y) // equal to
console.log(x != y) // not equal to
console.log(x === y) //value and type
console.log(x !== y) //value and type not equal to

const isEven = 10%2 === 0 ? true : false
console.log(isEven)

const isEvenMessage = 10%2 === 0 ? 'Number is even' : 'Number is odd'
console.log(isEvenMessage)

console.log('4'+ 4) //44
console.log('4' - '4')

console.log('Bruce' - 'Wayne') //NaN Not a Number
console.log(typeof NaN) //number
console.log(5 - true) //true is 1


console.log(Number('5')) //5
console.log(Number(false)) //0
console.log(Number(true)) //1
console.log(Number('Vishwas')) //NaN