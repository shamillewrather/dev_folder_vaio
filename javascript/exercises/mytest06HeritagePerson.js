// IIFE with strict mode
"use strict";
(function() {

    //Create a class called "Person"

    class Person {
        constructor(name,lastname) {
            this.name = name;
            this.lastname = lastname;
        }

        // Method added to the Person prototype
        introduceYourself() {
            console.log("Hello there, my name is " + this.name + " " + this.lastname);
        }
    }

    let p1 = new Person("Tim","Berners-Lee");
    p1.introduceYourself();

    //Create a Circusperson sub class with extends
    class Circusperson extends Person {
        constructor(name,lastname,discipline) {
            super(name,lastname);
            this.discipline = discipline;
        }
        introducePerformance() {
            console.log("Today, I am going to perform my discipline which is " + this.discipline);
        }
    }
    let c1 = new Circusperson("Bozo", "the Clown", "juggling");
    c1.introduceYourself();
    c1.introducePerformance();
    

})();