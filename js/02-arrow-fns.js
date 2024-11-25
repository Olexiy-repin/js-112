/*
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//* Два і більше параметрів
// const sum = (numA, numB) => {
//   return numA + numB;
// };

// console.log(sum(10, 20));

//* Один параметр
// const greet = firstName => {
//   console.log(`Hello ${firstName}`);
// };

// greet('Oleksii');

//* Без параметрів
// const greet = () => {
//   console.log('Welcome user!');
// };

// greet();

//* arguments
// const sum = (...args) => {
//   let total = 0;

//   for (const el of args) {
//     total += el;
//   }

//   return total;
// };

// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 30, 40, 50));

//* Неявне повернення
// const sum = (numA, numB) => numA + numB;

// console.log(sum(10, 20));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log([64, 49, 36, 25, 16]);

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], arrayEl => {
//     return arrayEl * 2;
//   })
// );

// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], arrayEl => arrayEl * 2));

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], arrayEl => {
//     return arrayEl - 10;
//   })
// );

// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], arrayEl => arrayEl - 10));

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], arrayEl => {
//     return Math.sqrt(arrayEl);
//   })
// );

// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], arrayEl => Math.sqrt(arrayEl)));
