// function greeting(name) {
//   console.log("Hello" + " " + name);
// }

// greeting("Jason");

// // Global objects in node
// // setTimeout();
// // clearTimeout();

// // setInterval();
// // clearInterval();

// // Other objects can be called in node using the window.concole.log etc

// let message = "";

// // When defining a function they are added to global scope

// let seyHello = function () {};
// window.sayHello();

// // Avoid defining values in the global scope as they get overwritten when there are multiple
// // Every file is essentially a module. App.js is a module and is not globally scoped

// The require function is how we load a module
const log = require("./logger");

log.log("message");
