// first attempt
//   function smash (words) {
//     let finalArr = [];
//     while(words.length){
//         finalArr.push(...words.shift());
//         words.map(row => finalArr.push(row.pop()))
//         words.reverse().map(row => row.reverse())
//     }

//      return finalArr;
//   };

function smash(words) {
  return words.join(" ");
}
