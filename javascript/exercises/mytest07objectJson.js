// IIFE with strict mode
"use strict";
(function () {

    const jc = {
        firstname: "Shamille",
        lastname: "Wrather",
        introduceMyself: function () {
            console.log("Hello, my name is " + this.firstname + " " + this.lastname);
        }

    }
    jc.introduceMyself();
    console.log(jc);
})();