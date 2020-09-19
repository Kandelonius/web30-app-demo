/*
write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.
ex. same([1, 2, 3], [4, 1, 9]) // true
    same([1, 2, 1], [4, 4, 1]) // false must be same frequency

The example below is my solution. Instructor solution looks very similar.
*/

function same(arr1, arr2) {
    let numbers = {}
    let check = {} // could also use splice to remove the values from numbers which would have better space complexity
    if (arr1.length != arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            numbers[arr1[i]] = Math.pow(arr1[i], 2)
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (numbers[Math.sqrt(arr2[i])] && !(check[arr2[i]])) {
            check[arr2[i]] = true
        } else {
            return false;
        }
    }
    return true;
};
arr1 = [1, 2, 3]
arr2 = [4, 1, 9]
arr3 = [1, 2, 1]
arr4 = [4, 4, 1]
arr5 = [1, 2]
console.log(same(arr1, arr2))
console.log(same(arr3, arr4))
console.log(same(arr5, arr4))

/*
naive solution:O(n^2)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] **2) // indexOf is our nexted loop here *****
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

instructor solution: kept for the differences in my solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11]) // false
*/

/**
 * given two seperate words output if they are an anagram of eachother.
 */
console.log("validAnagram")

function validAnagram(word1, word2) {
    // model based on instructor solution for number frequency exercise to practice the concepts.
    if (word1.length !== word2.length) { // I like having this check before declaring the two objects.
        return false;
    }
    let letterFrequency1 = {}
    let letterFrequency2 = {}
    for (let char of word1) { // I haven't used for of loops in js, very similar to the way python handles it's loops
        letterFrequency1[char] = (letterFrequency1[char] || 0) + 1 // setting the value = 0 in case it wasn't previously there or + 1
    }
    for (let char of word2) {
        letterFrequency2[char] = (letterFrequency2[char] || 0) + 1
    }
    for (let key in letterFrequency1) {
        if (!(key in letterFrequency2)) {
            return false;
        }
        if (letterFrequency1[key] !== letterFrequency2[key]) { // checking if the values match up in the two objects.
            return false;
        }
    }
    return true;
}

console.log(validAnagram("", ""))
console.log(validAnagram("aaz", "zza"))
console.log(validAnagram("anagram", "nagaram"))
console.log(validAnagram("gohangasalami", "imalasagnahog"))

/**
 * instructor solution for anagram problem:
 * 
  function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
 */

 // wow I really don't like this solution. I probably should have used arrays. I look forward to seing the instructor solution.
console.log("sameFrequency")

function sameFrequency(num1, num2) {
    // console.log("num 1 " + num1 + " num 2 " + num2);
    // if (num1.length !== num2.length) {
    //     return false;
    // }
    // numObj2 = {};
    // first put the numbers into their own hashmaps
    let numObj1 = loadObject(num1);
    let numObj2 = loadObject(num2);
    // loadObject(num2, numObj2);
    if (Object.keys(numObj1).length != Object.keys(numObj2).length) {
        return false;
    }
    let check1 = checkNumbers(numObj1, numObj2, num1);
    let check2 = checkNumbers(numObj1, numObj2, num2);
    if (check1 === true && check2 === true) {
        return true;
    } else {
        return false;
    }
}

function loadObject(num) {
    // console.log("in load with " + num);
    // create an object to return and our while loop
    let obj = {};
    /*
    while the number is a whole number greater than or equal to 1 we need to break it down and load
    the ones digit into the object. Once the number is less than 10 we will load that number in or increment
    it and return our object.
    */
    while (num >= 0) {
        if (num < 10) {
            if (obj[num]) {
                obj[num] += 1;
                // console.log("obj is " + obj[2]);
                return obj;
            } else {
                obj[num] = 1;
                // console.log("obj is " + obj[2]);
                return obj;
            }
        }
        // if the ones digit is in the object, increment it. Otherwise add it with a value of 1.
        let temp = (num % 10);
        // console.log("temp is " + temp + " num is " + num);
        if (obj[temp]) {
            obj[temp] += 1;
        } else {
            obj[temp] = 1;
        }
        // divide by 10 everytime
        num = Math.floor(num / 10);
    }
    // console.log("obj is at the end " + obj);
    return obj;
}

function checkNumbers(obj1, obj2, num) {
    while (num > 0) {
        let temp = (num % 10);
        if (obj1[temp] !== obj2[temp]) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(341, 14));
console.log(sameFrequency(3598578, 5879385));
console.log(sameFrequency(22, 222));