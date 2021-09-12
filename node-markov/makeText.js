/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require("axios");
const markov = require("./markov");
const argv = process.argv;

function generateText() {
  if (argv[2] === "file") {
    fs.readFile(argv[3], "utf8", function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      let mm = new markov.MarkovMachine(data);
      console.log(`New generated text : ${mm.makeText(20)}`);
    });
  }
  axios.get(argv[3]).then(function (resp) {
    let mm = new markov.MarkovMachine(resp.data);
    console.log(`New generated text : ${mm.makeText()}`);
  });
}

generateText();
