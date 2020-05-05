//Function IIFE with strict mode
"use strict";
(function () {

    // Create a constructor of a circle
    function Circle(rayon, name) {
        this.rayon = rayon; // recuperate the argument from the parameter set
        this.name = name;
        // this.pi = 3.14; // pi can go here but because it's a constant, we can make a prototype

        // method
        this.findArea = function () {
            console.log("area of this circle: " + this.pi * (this.rayon * this.rayon));
        }
        
    }
    /* A prototype - gives all of the instances created by the constructor Circle a common value - in this case "pi". Prototype is a property of the constructor which is shared by all of the instances that come from the Circle constructor */
    Circle.prototype.pi = 3.14;

    // Create instances of circles

    let litCir = new Circle(10, "Litte Circle"); // passage d'argument
    let medCir = new Circle(25, "Medium Circle");
    let bigCir = new Circle(50, "Big Circle");
    let giaCir = new Circle(100, "Giant Circle");

    console.log(giaCir);
    litCir.findArea(); // parentheses because it's a function
    medCir.findArea();

})();