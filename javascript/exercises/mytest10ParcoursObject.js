"use strict";
(function () {
    
    //Create "objet littéral"
    const jc = {
        nom: "Dusse",
        prenom: "Jean-Claude",

        sePresenter: function() {
            console.log("Hi, my name is " + this.prenom);
        }
    }

    //for in loop - find all of the parts/properties of the object jc by looping through."key" means label of all of the properties/elements of the object jc
    for(let key in jc) {
        console.log(key, ": ", jc[key], typeof(jc[key]));
        if(typeof(jc[key]) == "function") {
            jc[key](); // parentheses mean that I am calling a function, without the parentheses, it isn't a function
        }
        
    }


})();