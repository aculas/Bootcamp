// Function declaration

function greet(name) {
  return `Hello ${name}!`;
}

// Function expression

const greet = function (name) {
  return `Hello ${name}!`;
};

// Arrow function(cannot be used as a constructor)

const greet = (name) => {
  return `Hello ${name}!`;
};
