"use strict";
(function () {

    const allFruit = ["Banana", "Cherry", "Apple"];
    console.log(allFruit);
    console.log("size of the array:", allFruit.length);//3 (items)
    console.log(allFruit[0]); //Banana
    console.log(allFruit[2]); //Apple

    //last item
    console.log(allFruit[allFruit.length - 1]);

    //add an item to the end of the array
    allFruit.push("Pear");

    //delete the second item
    allFruit.splice(1,1);

    //loop of an array
    for(let i = 0; 1 < allFruit.length; i++) {
        console.log(allFruit[i]);
    }
    console.log(allFruit);

    //Method forEach
    allFruit.forEach(function(item, index, array) {
        console.log(item, index, array); //Apple 0 then // Banana 1
    });
    
    //Method forEach with arrow function
    allFruit.forEach => {
        console.log(item, index, array); //no idea if this works, no way to check as of 15:45pm friday
    });

    // Find the index of an item/element
    //let cherry_index = allFruit.indexOf("Cherry");
    //console.log("The index of cherry is: ", cherry_index);

    //


})();