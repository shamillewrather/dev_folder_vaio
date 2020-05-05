// IIFE with strict mode
"use strict";
(function() {

    class Circle {
        constructor(name, rayon) {
            this.name = name;
            this.rayon = rayon;
        }
        // outside the constructor, this automatically adds properties to the prototype of Circle
        // function property (method)
        findArea() {
            console.log("The area of this circle is: " + this.pi * (this.rayon * this.rayon));
        }
    }

    // to add a property that isn't a method, use the old system outside the class
    // adding pi to the class Circle

    Circle.prototype.pi = 3.14;

    let litCir =  new Circle("Little Circle", 10);
    litCir.findArea();
    console.log(litCir);

})();