/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах
const user = {
  name: 'Luis',
  age: 30,

  showThis: function () {
    // let this = user;

    console.log('This --->', this);
  },

  showName: function () {
    // let this = user;

    console.log(this.name);
  },
};

user.showThis();
// user.showName();

//* Розглянемо як this поводиться у звичайних функціях.
//? Function expression
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

//? Function declaration
// function showThis() {
//   console.log('This --->', this);
// }

// showThis();

//* Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,

//   // showUserThis: showThis,
//   showUserName: showName,
// };

// user.showUserThis();
// user.showUserName();

//* Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('This --->', this);
//   },

//   showUserName: function () {
//     console.log(this.name);
//   },
// };

// const showThis = user.showUserThis;

// user.showUserThis();

// showThis();

//* This в callback функціях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showThis);

/*
 * This у стрілочних функціях. Стрілочні функції не мають свого this,
 * this в стрілках завжди посилається на батьківський this.
 */
// const user = {
//   name: 'Luis',
//   age: 30,

//   showName: () => {
//     console.log(this.name);
//   },
// };

// user.showName();
