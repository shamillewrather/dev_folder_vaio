"use strict";
(function () {
    
    //PRIMITIVE VARIABLES: represents a clone of an instant
    let i = 12;
    let j = i; // passage par valeur (par copie de la valeur)
    i = 30;

    console.log("i equals: " + i);
    console.log("j equals: " + j);


    // OBJECT VARIABLE: represents the same entity wtih different names
    const p = {
        firstname: "John"
    }

    const q = p; // passage par réference
    p.firstname = "Bob";
    q.firstname = "Benny"
    console.log("p equals: ", p);
    console.log("q equals: ", q);
})();