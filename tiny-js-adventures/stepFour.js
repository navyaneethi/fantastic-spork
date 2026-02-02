//conditional statements
const num = 9;
if (num > 0){
    console.log("The number is positive");
}else if (num < 0){
    console.log("The number is negative");
}else{
    console.log("The number is zero");
}
//switch statement
const color = "red";
switch (color){
    case "red":
        console.log("The color is red");
        break; 
    case "blue":
        console.log("The color is blue");
        break;
    case "green":
        console.log("The color is green");
        break;
    default:
        console.log("The color is unknown");
}

//looping code
for (let i = 1; i <= 5; i++){
    console.log("Iteration number: " + i);
}

let j =1
while (j <= 5){
    console.log("While loop iteration: " + j);
    j++;
}

let k = 1;  //try i>5
do {
    console.log("Do-while loop iteration: " + k); //execute atleast once
    k++;
} while (k <= 5);
//for ... of loop
const numArray = [1,2,3,4,'5'];
for (const num of numArray){        //for (const variable of iterable)
    console.log("Number from array: " + num);
}