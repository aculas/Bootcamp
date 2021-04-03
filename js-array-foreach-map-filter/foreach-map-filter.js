/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr) {
    let newArr = [];//Starts off with an empty array
    arr.forEach(function(val) {//uses the forEachMethod and uses a callback function with a val as the parameter
	newArr.push(val * 2);//Pushes val into newArr and multiplies val * 2
    }); 
    return newArr;
}
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    let newArr = [];//Starts off with an empty array
    arr.forEach(function(val){//uses the forEachMethod and uses a callback function with a val as the parameter
       if(val % 2 === 0 ){//Boolean operator that uses modulus/remainder of 2
         newArr.push(val);//Pushes val into newArr
        }
        return newArr;//Returns new array
});
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/
function showFirstAndLast(arr) {
    let newArr = [];//Starts off with an empty array
    arr.forEach(function(val) {//uses the forEachMethod and uses a callback function with a val as the parameter
        newArr.push(val[0] + val[val.length -1]);//Pushes val at index[0] and the end of the array using val.length -1] into newArr
    });
    return newArr;//Returns new array
}
/*

Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {//uses the forEachMethod and uses a callback function with a val as the parameter
        val[key] = value; //Key value form that is used when the name of the property is dynamically determined.
    });
    return arr;//Returns new array
}
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let splitArr = str.toLowerCase().split("");//Sets an array to lowercase values and separates each character, including white-space into an empty string
    let obj = {}; //Sets an empty object

    const vowels = 'aeiou';//Sets a vowel to a constant variable

    splitArr.forEach(function(letter) {
        if (vowels.indexOf(letter) !== -1) {
          if (obj[letter]) {//If statement that checks if letters in the input string belong to vowels.
            obj[letter]++;//Increases object key 
          } else {
            obj[letter] = 1;//Else statement with default value of 1
          }
        }
      });
      return obj; //Returns object
    }
    
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
        return arr.map(function(val) {//creates and returns a new array using the map() method and uses val as a parameter
            return val * 2;//Pushes val into newArr and multiplies val * 2
        }); 

}


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(val, idx) {//creates and returns a new array using the map() method and uses val and ind as parameters
        return val * idx;//Returns a new array using the val and multiplying it times the index
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(val) {//Creates and returns a new array using the map() method and uses val and key as parameters
        return val[key];//Returns a new array using the object key 
    });
    
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(val) {//Creates and returns a new array using the map() method and uses arr as parameters
        return val.first + " " + val.last//Returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object then concatenates with a space. 
    })
    
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) { 
    return arr.filter(function(val) {////This is a callback function that if it returns true, the value will ne pushed to the new array and uses arr and key as parameters
        return val[key] !== undefined;//Returns a new array array of objects and a key and returns a new array with all the objects that contain that key.
});
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/


function find(arr, searchValue){
    return arr.filter(function(val) {//This is a callback function that if it returns true, the value will ne pushed to the new array
        return val === searchValue;//This tales the value entered and determines if it is a strict equality to the search value
      })[0];//This creates an array with 0 which will return undefined

}
  
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) { //This is a callback function that if it returns true, the value will ne pushed to the new array
      return val[key] === searchValue;//This tales the value entered and determines if it is a strict equality to the search value
    })[0]; //This creates an array with 0 which will return undefined

  }

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = "aeiou";// Sets up the starter variables
    return str//Returns the str value and uses 3 separate methods with a callback function to return the index of vowels
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join(""); //The join() method creates and returns a new string by concatenating all of the elements in an array 
  }
  

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {//This is a callback function that if it returns true, the value will ne pushed to the new array
        return val % 2 !== 0;////Boolean operator that uses modulus/remainder of 2 does not equal 0
      })
      .map(function(val) {//used the map() method to transform the array into another array, returns the val assigned and multiplies it by 2
        return val * 2;
      });
    }
