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
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
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
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: "median",
    result: findMedian(nums),
  };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: findMode(nums),
  };

  return res.send(result);
});

/** general error handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
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
