const express = require("express");
const ExpressError = require("./expressError");
const app = express();
// Array ofnumbers
const nums = [2, 10, 9, 6, 12, 3];

//Sum of the numbers in array
let totalSum = 0;
for (let i in nums) {
  totalSum += nums[i];
}

//How many numbers are in our array.
let numsCnt = nums.length;

//Get the average.
let average = totalSum / numsCnt;

//This will Print the median / average to the console.
app.get("/mean", function (req, res, next) {
  if (average != NAN) throw new ExpressError("that is not a valid number", 400);
  return res.send("Average is: " + average);
});

app.get("/median", (req, res, next) => {
  return res.send("Median is: " + median);
});

app.get("/mode", (req, res, next) => {
  return res.send("Mode is: " + mode);
});

// Error handler(middleware) this needs to be at the end so the above routes run first
app.use(function (err, req, res, next) {
  let status = err.status || 400;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
