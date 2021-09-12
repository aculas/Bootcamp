/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let x = {};
    for (let i = 0; i < this.words.length; i++) {
      if (x[this.words[i]] === undefined) {
        if (this.words[i + 1] !== undefined) {
          x[this.words[i]] = [this.words[i + 1]];
        } else {
          x[this.words[i]] = [null];
        }
      } else {
        if (this.words[i + 1] !== undefined) {
          x[this.words[i]].push(this.words[i + 1]);
        } else {
          x[this.words[i]].push(null);
        }
      }
    }
    return x;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let tWords = this.makeChains();
    let words = [];
    let w;

    let r = Object.keys(tWords).length - 1;
    let x = Math.floor(Math.random() * Math.floor(r));
    let y = Object.keys(tWords)[x];

    for (let i = 0; words.length <= numWords - 1; i++) {
      if (i === 0) {
        r = tWords[y].length;
        x = Math.floor(Math.random() * Math.floor(r));
        w = tWords[y][x];
        words.push(w);
      }
      r = tWords[w].length;
      x = Math.floor(Math.random() * Math.floor(r));

      if (tWords[w][x] !== null) {
        w = tWords[w][x];
        words.push(w);
      } else {
        break;
      }
    }

    return words.join(" ");
  }
}

module.exports = { MarkovMachine };
