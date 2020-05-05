"use strict";
(function () {
    // ANSWER FROM CLASS

    console.log("inside the conversion script")

    //Recuperate form elements
    let input_euros = document.getElementById("euros");
    let input_chf = document.getElementById("chf");

    // Recuperate the form itself
    const getForm = document.getElementById("convertForm");

    //Manage the event of submitting the form
    getForm.onsubmit = function (event) {
        //keep form page from refreshing when submitting which is how form pages act by default
        event.preventDefault();
        /*
        //get the value of the Euros field from form
        let euros = input_euros.value;
        console.log("the value of the euros field is: " + euros);

        //use convert function to convert euros to chf
        let chf = convert(euros, "chf");
        console.log("the value (in Swiss Francs) of the euros after conversion is: ", chf);

        //write result in the chf field
        input_chf.value = chf; 
        */

        // Test to see if the euro field is NOT EMPTY
        if (input_euros.value) {
            console.log("input euro not empty");
            input_chf.value = convert(input_euros.value, "chf").toFixed(2);
        }
        // Test to see if the chf field is NOT EMPTY
        if (input_chf.value) {
            console.log("input chf not empty");
            input_euros.value = convert(input_chf.value, "euros").toFixed(2);
        }
    }

    //Manage the event of focusing (focus = clicking into and activating a field) on each form field
    //NOTHING IN THE CHF FIELD ONCE EUROS IS CLICKED ON
    input_euros.onfocus = function (event) {
        console.log("after focus on euros field");
        // put nothing/zero in the chf field
        input_chf.value = "";
    }
    //NOTHING IN THE EUROS FIELD ONCE CHF IS CLICKED ON
    input_chf.onfocus = function (event) {
        console.log("after focus on chf field");
        // put nothing/zero in the euros field
        input_euros.value = "";
    }

    /** 
    * This is how we convert the amount into euros if the second argument is euro or convert into Swiss francs if the second argument is chf;
    * @param {number} amount - montant
    * @param {string} currency - resultat attendu dans la monnaie "currency"
    */

    function convert(amount, currency) {
        let result = 0;
        if (currency == "euros") {
            result = (amount / 1.06);
        }
        else result = (amount * 1.06);

        return result;
    }




    // MY ORIGINAL WORK
    /*function eurosToFrancs(euros) {
        let f = euros * 1.06;
        console.log(f);
        return f;
        
    }
    //eurosToFrancs(100);

    //let myEuros = 100;
    let result = eurosToFrancs(myEuros);
    console.log(result);*/







})();