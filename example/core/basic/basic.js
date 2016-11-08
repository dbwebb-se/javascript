/**
 * This is some basics in JavaScript.
 */

// One line comment

var someValue = 42;
var someString = "42";

if (someValue == "42") {
    console.log("Yes, its 42 alright.");
}

if (someString === "42") {
    console.log("Yes, its 42 alright.");
}

// Short syntax for an if statement
var res = someValue === 42 ? 42 : "42";
console.log(res);

var i = 0;
while (i < 42) {
    i++;
}
console.log(i);

for (i = 37; i <= 42; i++) {
    console.log(i);
}

function alpha(x, y) {
    return x + y;
}

console.log(alpha(40, 2));
