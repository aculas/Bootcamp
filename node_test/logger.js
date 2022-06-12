// This is a url that does not not exist
let url = "htt://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

// This is how you allow modules to be added to your app.js file
// This is an older way of exporting
// module.exports.log = log;
// module.exports.url = url;

module.exports.log = log;
