// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//ES2015 Version

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


/* Write a function called findMin that accepts a variable number 
of arguments and returns the smallest argument.
Make sure to do this using the rest and spread operator.*/

// const findMin = function() {
// 	const args = Array.from(arguments);
// 	return args.reduce((min, currVal) => {
// 		return currVal < min ? currVal : min;
// 	});
// };

const findMin = (...args) => Math.min(...args)

/*Write a function called mergeObjects that accepts two objects 
and returns a new object which contains all the keys 
and values of the first object and second object.
*/

const mergeObjects = (obj1, obj2) => ({obj1,...obj2})
mergeObjects ({a:1, b:2}, {c:3, d:4})

/* Write a function called doubleAndReturnArgs which accepts an array
 and a variable number of arguments. The function should return a new array 
 with the original array values and all of additional arguments doubled.
*/

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]


//Slice and Dice

/* remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random()*items.length);
    return [...items.slice(0, idx),... items.slice(idx +1)];
}

/** Return a new array with every item in array1 and array2. */
const array3 = (array1, array2) =>{
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>{
    let newObj = {...obj};
    newObj [key] = val;//[key] represents some key in an object
    return newObj;
}

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj [key]
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */ 
//This is the same as the object and keys value from above

const modKey = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;

}
