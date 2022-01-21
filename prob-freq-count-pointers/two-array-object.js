/* Utilizes the built in reduce method in Javascript and uses a callback function
to set the current value as a key in the acculator object. This will be set to whatever element is at the current
index in the values array.
*/
function twoArrayObject(keys, values) {
  return keys.reduce((obj, cur, idx) => {
    obj[cur] = idx < values.length ? values[idx] : null;
    return obj;
  }, {});
}
