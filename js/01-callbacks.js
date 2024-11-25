/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// const fn1 = function (callBack) {
//   console.log('Execution fn1');

//   callBack();
// };

// const fn2 = function () {
//   console.log('Execution fn2');
// };

// fn1(function () {
//   console.log('Execution fn2');
// });

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив,
? а другим - функцію, яка застосовується до кожного елемента масиву. Функція
? each повинна повернути новий масив, елементами якого будуть
? результати виклику коллбека.
 */
// const each = function (array, callback) {
//   // let array = [64, 49, 36, 25, 16];
//   // let callback = function (arrayEl) {return arrayEl * 2}

//   const newArray = [];

//   for (const el of array) {
//     newArray.push(callback(el));
//   }

//   return newArray;
// };

// console.log([64, 49, 36, 25, 16]);

// console.log(
//   each([64, 49, 36, 25, 16], function (arrayEl) {
//     return arrayEl * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (arrayEl) {
//     return arrayEl - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (arrayEl) {
//     return Math.sqrt(arrayEl);
//   })
// );
