let a = 10
function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a,b,c)
    }
    inner()
} 

outer()

//closure
// A closure is a function that remembers and accesses variables from its 
// outer scope even after the outer function has finished executing.
function outerClosure(){
    let counter = 0
    function innerClosure(){
        counter++
        console.log(counter)
    } innerClosure()
}
outerClosure()
outerClosure()
outerClosure()

function outerClosure2(){
    let counter = 0
    function innerClosure2(){
        counter++
        console.log(counter)
    }
    return innerClosure2
}

let fn = outerClosure2()
fn()
fn()
fn()

//Function Currying
//Currying is a functional programming technique that transforms a function 
// taking multiple arguments, f(a,b,c), into a sequence of functions, 
// each taking a single argument, f(a)(b)(c).

function sum(a,b,c){
    return a+b+c
}
console.log(sum(2,3,5)) //10

// sum(2,3,5) sum(2)(3)(5) //10

function currySum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(currySum(2)(3)(5)) //10
