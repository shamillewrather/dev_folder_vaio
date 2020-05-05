"use strict";
(function () {

    console.log("line 4");

    //no () in hello() means that the function isn't being declenched immediately 
    // so setTimeout is a reference to the function
    setTimeout(function() { hello("Bobby"); }, 5000); // asynchronous (asynchrone)
    console.log("line 6");

    function hello(name) { // hoisting means the function can be created after using it
        console.log("Hello", name);
    }


})();