"use strict";
(function () {

   const introduction = document.getElementById("intro");

   //attach an ansynchronous event manager "onclick" on the intro element
   // Event managers are naturally asynchronous

   /* introduction.onclick = function(event) { //or function(e)
       console.log("Introduction paragraph has been clicked")
       console.log("Source of the event: ", event.target);
   };
   console.log("line 11"); */

    introduction.onclick = function(e){
        handleClick(e, "toto");
    };
    
    function handleClick(event, toto) {
       console.log("Introduction paragraph has been clicked")
       console.log("event: ", event);
       console.log("toto: ", toto);
       console.log("Source of the event: ", event.target);
   };
   console.log("line 11");
})();