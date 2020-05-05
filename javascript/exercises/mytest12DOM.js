"use strict";
(function () {

    //console.log(window.document);
    //console.log(window.document.all);

    //The DOM can't be viewed if the html hasn't been completely uploaded. So the script to view different parts of the html have to be put at the bottom
    //console.log(window.document.body);

    //façon historique to get to an element by using its ID
    const stockPara = document.getElementById("intro");
    console.log(stockPara);

    //create a DOM element
    const section = document.createElement("section");
    //add text
    section.textContent = "This is some text added by javascript";
    //add an attribute
    section.setAttribute("id", "first-section");
    //place element into the page's DOM
    window.document.body.appendChild(section);


    //QuerySelector
    /* const bob = document.querySelector(".sentence");
    console.log("sentences: ", sentence); */

    //const next = intro.nextElementSibling;

})();