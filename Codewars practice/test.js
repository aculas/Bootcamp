function calculate(arr, msg) {
  arr[1] = 150;
  msg = "inside";
  console.log(arr[0] + arr[1]);
  console.log(msg);
}

const arr = [100];
let msg = "outside";

calculate(arr, msg);

console.log(arr[0] + arr[1]);
console.log(msg);

const x = {};
x["foo"] = "bar";
x.bar = {
  first: 100,
  second: 200,
};

console.log(x.bar["first"] + x["bar"].second);

function prefix(str) {
  try {
    return str.substring(0, 3);
  } catch (err) {
    throw err;
    return "catch";
  }
}

try {
  console.log(prefix(5));
} catch (err) {
  console.log("error");
}

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("prom");
  }, 1000);
  setTimeout(() => {
    reject(new Error("!prom"));
  }, 5000);
});

prom.then(function (arg) {
  console.log(arg);
  return new Promise((resolve, reject) => {
    reject(new Error("!arg"));
  })
    .catch((err) => {
      console.log(err.mesage());
    })
    .catch((err) => {
      console.log(err.message);
    });
});
