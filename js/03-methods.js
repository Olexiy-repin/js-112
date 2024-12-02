/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const fn = function () {};

// fn.test = 10;

// console.dir(fn);

// console.log(fn.test);

//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, num) {
//   // let this = user;

//   console.log(`${message} ${this.firstName} ${this.lastName}`);

//   console.log(num);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 100);
// showFullName.apply(user, ['Hello', 100]);

// const anotherUser = {
//   firstName: 'Sophie',
//   lastName: 'Castro',
//   age: 32,
// };

// showFullName.call(anotherUser, 'Welcome');

//? Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// changeColor.call(hat, 'yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// changeColor.apply(sweater, ['blue']);

// console.log(sweater);

//? Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

/*
function (color) {
  let this = hat;

  this.color = color;
};
*/

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

//? Передайте метод обʼєкта в якості callback функції
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   // let callback = function () {
//   // let this = user;

//   // console.log(this.name);
//   // }

//   callback();
// };

// someFunction(user.showName.bind(user));

//
// const sum = function () {
//   return [].reduce.call(arguments, (acc, el) => acc + el, 0);
// };

// console.log(sum(1, 2, 3, 4));
// console.log(sum(10, 20));
