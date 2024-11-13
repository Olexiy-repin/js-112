/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 */

// Function declaration
// console.log(sum(10, 20));

// function sum(numA, numB) {
//   return numA + numB;
// }

// Function expression
// const sum = function (numA, numB) {
//   return numA + numB;
// };

// console.log(sum(10, 20));

// const fn = function () {
//   console.log(arguments);

//   console.log(arguments[0]);
//   console.log(arguments[1]);
// };

// fn('Hello', 'world');

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// const add = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     // total = total + arg;

//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/

// const calculateAverage = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
