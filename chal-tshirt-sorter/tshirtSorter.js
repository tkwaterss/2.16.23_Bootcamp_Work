// Write your solution below:

/*
create two arrays
loop through string and splice out mmmms and lllls
once complete push those arrays back onto the array using the spread operator
can just use ===, or maybe charCodeAt
use .filter?
array.sort 
    + objects for more generalized solution if chars are different
*/


//Solutoin 1 - .sort method
const test1 = 'sssmmmlllllmmmssss'
const test2 = 'smslslmslmslmslmslm'
const test3 = 'lms'
const test4 = 'skdkjhlksdjfsmlskmdf'

const sortLetters = string => string.split('').sort().reverse().join('');

// console.log(sortLetters(test1))
// console.log(sortLetters(test2))
// console.log(sortLetters(test3))
// console.log(sortLetters(test4))

//solution 2 - w/ objects
const shirts = [
    {type: "wolf", size: "s", color: "black"},
    {type: "howl", size: "m", color: "grey"},
    {type: "moon", size: "l", color: "white"},
    {type: "wolf", size: "s", color: "black"},
    {type: "howl", size: "l", color: "white"},
    {type: "howl", size: "m", color: "grey"},
    {type: "moon", size: "s", color: "black"},
    {type: "howl", size: "m", color: "grey"},
    {type: "wolf", size: "s", color: "black"}
]

const sortObjects = objArray => {
    return objArray.sort((a, b) => {
        let sizeA = a.size.toUpperCase();
        let sizeB = b.size.toUpperCase();
        if (sizeA > sizeB) {
            return -1;
        }
        if (sizeA < sizeB) {
            return 1;
        }
        return 0
    })
}

// console.log(sortObjects(shirts));

/*
create two arrays
loop through string and splice out mmmms and lllls
once complete push those arrays back onto the array using the spread operator
can just use ===, or maybe charCodeAt
use .filter?
array.sort 
    + objects for more generalized solution if chars are different
*/

//solution 3

const sorter = string => {
    let array = string.split('');
    lArr = [];
    mArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'l') {
            lArr.push(array.splice(i,1));
            i--;
        } else if (array [i] === 'm') {
            mArr.push(array.splice(i,1))
            i--
        }
    }
    array.push(...mArr)
    array.push(...lArr)
    return array;
}

console.log(sorter(test1))
// console.log(sorter(test2))
// console.log(sorter(test3))
// console.log(sorter(test4))

//instructor solution using objects to sort in any order for any character
const sizeSorter = string => {
    let sizeObj = {
        's': 1,
        'm': 5,
        'l': 3
    }
    string = string.split('');
    string = string.sort((a,b) => {
        return sizeObj[a] - sizeObj[b]
    })
    return string.join('');
}

console.log(sizeSorter(test1))
console.log(sizeSorter(test2))
console.log(sizeSorter(test3))
console.log(sizeSorter(test4))