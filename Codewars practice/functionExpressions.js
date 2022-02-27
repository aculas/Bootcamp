// standard function expression

function holler() {
  console.log("HEY YOU");
}

// this function is an anonymous callback function

const whisper = function () {
  // this function has no name and is stored in a variable
  console.log("shh, they are watching");


//   functions in an array
const greetings = [holler, whisper];

// callback function

setTimeout(greetings,  4000);

function doGreet(a,b, greetings) {
    return greetings(a, b)
}