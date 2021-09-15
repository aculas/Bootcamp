const express = require("express");
const ExpressError = require("./expressError");
const app = express();

const {
  convertAndValidateNumsArray,
  findMode,
  findMean,
  findMedian,
} = require("./helpers");

//This will Print the median / average to the console.
app.get("/mean", function (req, res, next) {
  if (!req.query.num) {
    throw new ExpressError("That is not a valid number", 400);
  }
  let numsAsString = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsString);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: findMean(nums),
  };

  return res.send(result);
});
app.get("/median", (req, res, next) => {
  return res.send(result);
});

app.get("/mode", (req, res, next) => {
  return res.send("Mode is: " + mode);
});

// Error handler
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
