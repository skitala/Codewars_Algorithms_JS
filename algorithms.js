// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// My solution
// function duplicateEncode(word) {
//   let result;
//   word = word.toLowerCase();

//   let moreThanOne = word
//     .split("")
//     .filter(
//       (letter, index) =>
//         word.indexOf(letter) !== index
//     );

//   result = word
//     .split("")
//     .map((letter) => {
//       if (moreThanOne.length > 0) {
//         if (
//           moreThanOne.includes(letter)
//         ) {
//           return ")";
//         } else {
//           return "(";
//         }
//       } else {
//         return "(";
//       }
//     })
//     .join("");
//   //   result = word.replace(/[a-z]/g, "(");
//   console.log(result);
// }

// duplicateEncode("Success");

// Second solution

// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, (m) =>
//     word.indexOf(m) ==
//     word.lastIndexOf(m)
//       ? "("
//       : ")"
//   );
// }

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// function incrementString(str) {
//   const digit = /[0-9]+/;
//   const noDigit =
//     str.match(digit) === null;

//   const indexOfFirstDigit =
//     str.match(digit);

//   let num = indexOfFirstDigit[0];

//   let word = str.slice(
//     0,
//     str.indexOf(indexOfFirstDigit)
//   );
//   console.log(word);
//   console.log(num);

//   let result = "";

//   if (noDigit) {
//     result += `${str}1`;
//     return result;
//   } else if (num.length > 0) {
//     result = word.concat(
//       `${+num + 1}`.slice(-num.length)
//     );
//     return result;
//   }
// }
// console.log(incrementString("foo009"));

// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// My solution

// function tribonacci(signature, n) {
//   let x = 0;

//   function oneUp() {
//     let accSequence = signature.slice(x, signature.length);
//     x++;

//     let sequence = accSequence.reduce((acc, sum) => acc + sum);
//     signature.push(sequence);
//   }
//   while (n > 0) {
//     oneUp();
//     n--;
//   }
//   for (let i = 2; i >= 0; i--) {
//     signature.pop();
//   }
//   return signature;
// }

// console.log(tribonacci([1, 1, 1], 3));

// Second one

// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }
// console.log(tribonacci([1, 1, 1], 10));

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// function wave(str) {
//   let result = [];
//   let realPlace = 0;
//   function waveRecursion() {
//     [...str].forEach((letter) => {
//       realPlace++;
//       let prefix = [...str].slice(0, realPlace - 1);
//       let rest = [...str].slice(realPlace, str.length);
//       if (letter === " ") return;
//       let wave = prefix.concat(letter.toUpperCase(), rest).join("");
//       result.push(wave);
//     });
//   }
//   waveRecursion();
//   console.log(result);
// }

// wave("two worlds");

// Second sulution
// const wave = (str) =>
//   [...str]
//     .map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1))
//     .filter((x) => x != str);

// Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.
// This should only work if the number has 4 digits or more. If not, return "Number is too small".
// Example
// lowestProduct("123456789") --> 24 (1x2x3x4)
// lowestProduct("35") --> "Number is too small"

// function lowestProduct(input) {
//   let inputLength = input.length - 4;
//   let sequences = [];
//   let startingIdx = 0;
//   let endingIdx = 4;
//   if (input.length < 4) {
//     return "Number is too small";
//   }

//   console.log(inputLength);
//   while (inputLength >= 0) {
//     sequences.push([...input].slice(startingIdx, endingIdx));
//     startingIdx++;
//     endingIdx++;
//     inputLength--;
//   }
//   console.log(sequences);
//   const result = sequences.map((sequence) => {
//     return +sequence.reduce((acc, sum) => acc * sum);
//   });
//   return Math.min(...result);
// }
// lowestProduct("123456789");

// // Second solution
// function lowestProduct(input) {
//   let arr = input.split``.map((x,i,a) => a.length - i < 4 ? Infinity : x * a[i+1] * a[i+2] * a[i+3]);
//   return input < 1000 ? "Number is too small" : Math.min(...arr);
// }

// function summation(num) {
//   let sequence = [];
//   for (let i = 1; i <= num; i++) {
//     sequence.push(i);
//   }
//   const result = sequence.reduce((acc, sum) => (acc += sum));
//   console.log(result);
// }
// summation(8);
// console.log("hello");

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// function comp(array1, array2) {
//   if (array1 === null || []) {
//     return false;
//   } else if (array2 === null || []) {
//     return false;
//   } else {
//     const result = array2.map((num) => Math.sqrt(num)).sort();
//     let count = 0;
//     array1.sort().forEach((num, i) => (num === result[i] ? count++ : count));
//     return count === array1.length ? true : false;
//   }
// }

// console.log(comp(null, []));

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {
//   let loop = String(num).split("").length - 1;
//   let divider = 1;
//   let r = [];
//   while (loop >= 0) {
//     divider *= 10;
//     if (num % divider !== 0) {
//       r.push(num % divider);
//     }
//     loop--;
//   }

//   let last = r[0];
//   const result = r.reverse().map((num, i) => {
//     return num - r[i + 1];
//   });

//   return result
//     .slice(0, result.length - 1)
//     .filter((num) => num !== 0)
//     .concat(last)
//     .join(" + ");
// }

// console.log(expandedForm(52686350));

// Second solution
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.
// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
// For example an extract of a stocklist could be:
// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :
// M = {"A", "B", "C", "W"}
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.
// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):
// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// First solution
// function stockList(listOfArt, listOfCat) {
//   // return listOfArt.sort().filter((item) => item.includes("B"));
//   let b = [];
//   const newListOfArt = listOfArt.map((pair) => pair.split(" "));
//   return newListOfArt.filter((i) => i[0][0].includes(listOfCat[3]));
//   // listOfCat.forEach((category) => {
//   //   b.push(newListOfArt.filter((item) => item.includes(category)));
//   // });
//   // // .filter((item) => item[0].includes("B"));
//   // return b;
// }

// console.log(
//   stockList(
//     ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//     ["A", "B", "C", "D"]
//   )
// );

// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// function sortMe(names) {
//   if (names.length === 0) {
//     return [];
//   }
//   // let result = names.sort(
//   //   (a, b) => a.toUpperCase().charCodeAt(0) - b.toUpperCase().charCodeAt(0)
//   // );

//   let result = names.sort((a, b) =>
//     a.toUpperCase().localeCompare(b.toUpperCase())
//   );

//   console.log(result);
//   return result;
// }
// sortMe(["she", "Large", "would", "Hello", "there", "I'm"]);

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// function titleCase(title, minorWords) {
//   if (title === "") {
//     return "";
//   }
//   if (minorWords === undefined) {
//     return title
//       .toLowerCase()
//       .split(" ")
//       .map((word) => word[0]?.toUpperCase() + word.slice(1, word.length))
//       .join(" ");
//   } else {
//     return title
//       .toLowerCase()
//       .split(" ")
//       .map((word, i) =>
//         minorWords.toLowerCase().split(" ").includes(word.toLowerCase()) &&
//         i !== 0
//           ? word.toLowerCase()
//           : word[0].toUpperCase() + word.slice(1, word.length)
//       )
//       .join(" ");
//   }
// }
// titleCase("a clash of KINGS", "a an the of");

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message) {
//   const isCharLetter = (letterCode) => {
//     return (
//       (letterCode >= 65 && letterCode <= 90) ||
//       (letterCode >= 97 && letterCode <= 122)
//     );
//   };
//   const calculatePlace = (letterCode) => {
//     let indexFromStart = letterCode;
//     // calculating reminder if 13 places from selected char is out of scope (uppercase-lowercase letters)
//     if (letterCode > 77 && letterCode <= 90) {
//       indexFromStart = letterCode + 12 - 90;
//       return (indexFromStart += 65);
//     }
//     if (letterCode > 109 && letterCode <= 122) {
//       indexFromStart = letterCode + 12 - 122;
//       return (indexFromStart += 97);
//     }
//     return indexFromStart + 13;
//   };
//   const result = message
//     .split("")
//     .map((l) =>
//       isCharLetter(l.charCodeAt(0))
//         ? String.fromCharCode(calculatePlace(l.charCodeAt(0)))
//         : l
//     )
//     .join("");

//   return result;

//   // Senior solution :D
//   let alphabet =
//     "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
//   return message.replace(
//     /[a-z]/gi,
//     (letter) => alphabet[alphabet.indexOf(letter) + 13]
//   );
// }

// rot13("abcdefghijklmnopqrstuvwxyz");

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: https://leetcode.com/problems/two-sum/
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
// function twoSum(numbers, target) {
//   let indexes = [];
//   numbers.forEach((n, i) => {
//     let firstCheck = target - n;
//     const secondValue = +[
//       ...new Set(numbers.filter((n) => n === target - firstCheck)),
//     ];
//     const secondIndex = numbers.findIndex(
//       (num, idx) => num === firstCheck && idx !== i
//     );

//     if (firstCheck + +secondValue === target && numbers.includes(firstCheck)) {
//       indexes.push(numbers.indexOf(firstCheck), i);
//     }
//   });
//   const result = [...new Set(indexes)];
//   return result;

//   // few more solutions:
//   // for (var i = 0; i < numbers.length - 1; i++) {
//   //   for (var j = i + 1; j < numbers.length; j++) {
//   //     if (numbers[i] + numbers[j] === target) return [i, j];
//   //   }
//   // }
//   // let seen = new Map();
//   // for (let i = 0; i < numbers.length; i++) {
//   //   let x = numbers[i],
//   //     y = target - x;
//   //   if (seen.has(y)) return [seen.get(y), i];
//   //   seen.set(x, i);
//   // }
// }
// twoSum([2, 2, 3], 4);

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input:
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.
// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

// function queueTime(customers, n) {
//   let maxTime = customers.reduce((a, c) => a + c, 0);
//   let remainingTime = maxTime;
//   if (n > 1) {
//     let tills = [];
//     for (let i = 0; i < n; i++) {
//       tills.push(0);
//     }
//     // First 'wave'
//     for (let i = 0; i < n; i++) {
//       tills[i] = customers[i];
//     }
//     let busyTills = tills.slice(0, customers.length);
//     let remainingCustomers = customers.slice(n, customers.length);
//     while (maxTime > 0) {
//       busyTills = busyTills.map((t, i) => {
//         t--;
//         if (t === 0) {
//           let next = remainingCustomers.shift();
//           return next ? (t = next) : true;
//         } else {
//           return (busyTills[i] = t);
//         }
//       });
//       remainingTime--;
//       let areCustomersDone = busyTills.every((t) => t === true);
//       if (areCustomersDone) {
//         console.log(maxTime - remainingTime);
//         return maxTime - remainingTime;
//       }
//     }
//   }
//   console.log(maxTime);
//   return maxTime;

//   // Senior solutions :D
//   // var w = new Array(n).fill(0);
//   // for (let t of customers) {
//   //   let idx = w.indexOf(Math.min(...w));
//   //   w[idx] += t;
//   // }
//   // return Math.max(...w);

//   // or this
//   // if (customers.length == 0) return 0;
//   // if (customers.length <= n) return Math.max(...customers);
//   // if (customers.length > n) {
//   //   let residue = customers.slice(n);
//   //   let firsts = customers.slice(0, n);
//   //   for (let item of residue) {
//   //     firsts.sort((a, b) => b - a);
//   //     firsts[firsts.length - 1] += item;
//   //   }
//   //   return Math.max(...firsts);
//   // }
// }

// queueTime([1, 2, 3, 4], 2);

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// function stray(numbers) {
//   const sorted = numbers.sort();
//   return sorted[numbers.length - 1] === sorted[numbers.length - 2]
//     ? sorted[0]
//     : sorted[numbers.length - 1];
// }
// stray([1, 1, 2]);

// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.
// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

// const makePassword = (phrase) => {
//   const password = phrase
//     .split(" ")
//     .map((c) => {
//       let password = "";
//       let firstChar = c[0];
//       if (firstChar === "i" || firstChar === "I") firstChar = 1;
//       if (firstChar === "o" || firstChar === "O") firstChar = 0;
//       if (firstChar === "s" || firstChar === "S") firstChar = 5;
//       password += firstChar;
//       return password;
//     })
//     .join("");
//   console.log(password);
//   return password;
// };

// const makePassword = (phrase) =>
//   phrase
//     .split(" ")
//     .map((el) => el[0])
//     .join("")
//     .replace(/[iso]/gi, (x) => ({ i: 1, s: 5, o: 0 }[x.toLowerCase()]));

// makePassword("Give me liberty or give me death");

// Create an identity matrix of the specified size ( >= 0 ).
// Some examples:
// (1)  =>  [[1]]
// (2) =>   [[1,0],
//          [0,1] ]
//          [[1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]

// const getMatrix = (number) => {
//   let matrixArray = [];

//   for (let i = 0; i < number; i++) {
//     let matrixRow = [];

//     for (let y = 0; y < number; y++) {
//       matrixRow.push(0);
//     }

//     matrixRow[i] = 1;
//     matrixArray.push(matrixRow);
//   }

//   return matrixArray;
// };

// function getMatrix(number) {
//   const matrix = [];
//   for (let i = 0; i < number; i++) {
//     matrix[i] = Array(number).fill(0);
//     matrix[i][i] = 1;
//   }
//   return matrix;
// }

//getMatrix(5);

// Ready! Set! Fire... but where should you fire?

// The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

// ["top left",    "top middle",    "top right",
//  "middle left", "center",        "middle right",
//  "bottom left", "bottom middle", "bottom right"]
// HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

// Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

// x = 0, y = 0 --> "top left"
// x = 1, y = 2 --> "bottom middle"
// etc

// function fire(x, y) {
//   const grid = [
//     ["top left", "top middle", "top right"],
//     ["middle left", "center", "middle right"],
//     ["bottom left", "bottom middle", "bottom right"],
//   ];

//   const cooredinatesResult = grid[y][x];
//   console.log(cooredinatesResult);

//   return cooredinatesResult;
// }
// fire(1, 2);

// In this kata you are expected to recover a scattered password in a (m x n) grid (you'll be given directions of all password pieces in the array)
// The array will contain pieces of the password to be recovered, you'll get directions on how to get all the the pieces, your initial position in the array will be the character "x".
// Heres what the array looks like
// [
//   ["p", "x", "m"],
//   ["a", "$", "$"],
//   ["k", "i", "t"]
// ]
// The given directions would consist of [left, right, up, down] and [leftT, rightT, upT, downT], the former would be used to move around the grid while the latter would be used when you have a password to that direction of you.( E.g if you are in a position and the move to make is leftT it means theres a password to the left of you, so take the value and move there)
// So in the 2d array example above, you will be given the directions ["lefT", "downT", "rightT", "rightT"], making for the word "pa$$".
// Remember you initial position is the character "x".
// So you write the function getPassword(grid, directions) that uses the directions to get a password in the grid.
// Another example.
// grid = [
//   ["a", "x", "c"],
//   ["g", "l", "t"],
//   ["o", "v", "e"]
// ];
// directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]
// getPassword(grid, directions) // => "lovet"
// Once again, Your initial position is the character "x", so from the position of "x" you follow the directions given and get all pieces in the grid.

function getPassword(grid, directions) {
  let currentRow = 0;
  let currentIndex = 0;
  let positions = [];
  var password = "";

  for (i = 0; i < grid.length; i++) {
    for (y = 0; y < grid[i].length; y++) {
      if (grid[i][y] === "x") {
        currentRow = i;
        currentIndex = y;
      }
    }
  }

  directions.forEach((element) => {
    let row = currentRow;
    let index = currentIndex;
    const direction = processDirection(element, row, index);
    positions.push(direction);
    currentRow = direction[1];
    currentIndex = direction[0];
  });

  if (positions.length > 0) {
    positions.forEach((p) => {
      if (p[2]) {
        const letter = grid[p[1]][p[0]];
        password += letter;
      }
    });
  }

  function processDirection(direction, row, index) {
    let i = index;
    let r = row;
    let take = false;

    switch (direction) {
      case "left":
        i--;
        break;
      case "right":
        i++;
        break;
      case "up":
        r--;
        break;
      case "down":
        r++;
        break;
      case "leftT":
        i--;
        take = true;
        break;
      case "rightT":
        i++;
        take = true;
        break;
      case "upT":
        r--;
        take = true;
        break;
      case "downT":
        r++;
        take = true;
        break;
      default:
        break;
    }
    return [i, r, take];
  }
  console.log(positions);
  console.log(password);
}
const grid = [
  ["x", "l", "m"],
  ["o", "f", "c"],
  ["k", "i", "t"],
];
const directions = [
  "rightT",
  "down",
  "leftT",
  "right",
  "rightT",
  "down",
  "left",
  "leftT",
];
function getPassword(grid, directions) {
  const dir = { right: 1, left: -1, up: -3, down: 3 };
  grid = grid.flat();
  let initPos = grid.indexOf("x");

  return directions.reduce((acc, cur) => {
    if (!cur.includes("T")) {
      initPos += dir[cur];
    } else {
      initPos += dir[cur.slice(0, -1)];
      acc += grid[initPos];
    }
    return acc;
  }, "");
}

getPassword(grid, directions);

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// function multiplicationTable(size) {
//   let firstRow = []
//   let array = []
//   for(let i = 1; i <= size; i++){
//     let range = [];
//     range.push(i);
//     firstRow.push(range);
//   }
//   for(let x = 1; x <= size; x++){
//     let nextRow = firstRow.map(n => n * x)
//     array.push(nextRow);
//   }
//   console.log(array);
//   return array;
// }
