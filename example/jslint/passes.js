(function () {

    "use strict";
    console.log("doing js in head-section");

    function helloWorld() {
        console.log("called function helloWorld()");
        alert("Hello World from a JavaScript function showing an alert.");
    }

    function helloMyNumber() {
        console.log("called function helloMyNumber()");
        var matched;
        var max = 42;
        var yourLuckyNumber = prompt("So, whats your lucky number today (enter a number between 1 and " + max + ")?");
        var myLuckyNumber = Math.floor(Math.random() * (max + 1));
        var paragraph = document.getElementById("luckynumber");

        matched = yourLuckyNumber === myLuckyNumber
            ? "indeed "
            : "NOT ";
        paragraph.innerHTML = paragraph.innerHTML + " Your\"e lucky number is: " + yourLuckyNumber + ". Mine is: " + myLuckyNumber + ". They did " + matched + "match!";
    }

}());
