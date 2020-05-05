"use strict";

/*Create first function that is looking for a "text" parameter*/
function showInConsole(text) {
    console.log(text);
}

//Calls function with "Hello World" parameter
showInConsole("Hello World!!!");

// Create function that adds two numbers together and then outputs the sum

/* function addition(a, b){

    return a + b;

}

console.log(addition(15, 80));  

// OR stock the result

let result = addition(10, 5);
console.log(result); */


// Another way to do it

function addition(a, b) {

    let r = a + b;
    console.log("a in the addition function: ", a);
    return r;

}

let result = addition(4, 88);
console.log(result);

// console.log("a in the global context: ", a); // error

// Immediately Invoked Function Expressions IIFE
(function () {

    let a = () => {
        console.log("Hello world in the a function");
    }
    a();

})();