//Function IIFE with strict mode 

"use strict";

(function() {
    //create a Person constructor
    function Person(fn,ln) {
        // properties of the string type
        this.name = fn;
        this.lastname = ln;

        // properties of the method type
        this.introduceYourself = function() {
            console.log("Hello, my name is " + this.name + " " + this.lastname);
            console.log("this in the method introduceYourself  ", this); // Tanisha Wrather is the object because she is the one that was used in the introduceYourself method
        }
        console.log("this in the constructor : ", this); // all of the objects constructed by the new Person function
    }
    let sham = new Person("Shamille", "Wrather");
    let tan = new Person("Tanisha", "Wrather");
    let tris = new Person("Tristan", "Auffray");
    console.log(sham);
    console.log(tris);
    tan.introduceYourself();
    
})();

console.log("this in the global context execution: ", this); // window is the object
// this.alert("HEY");


// There are a lot of errors that come from programmers believing that they're executing the "this" of a particular object, but really they're calling into action the "this" of the window
