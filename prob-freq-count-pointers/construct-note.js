// add whatever parameters you deem necessary
function constructNote(message, letters) {
  const lettersFreq = {};
  const messageFreq = {};

  // builds counters of letters
  for (let char of letters) {
    lettersFreq[char] = ++lettersFreq[char] || 1;
  }
  // builds counters of message
  for (let char of message) {
    messageFreq[char] = ++messageFreq[char] || 1;
  }
  // Creates a comparison of message frequency with letters sameFrequency
  for (let char of messageFreq) {
    if (!lettersFreq[char]) {
      return false;
    }
    if (messageFreq[char] > lettersFreq[char]) {
      return false;
    }
  }

  return true;
}
