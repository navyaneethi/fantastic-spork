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