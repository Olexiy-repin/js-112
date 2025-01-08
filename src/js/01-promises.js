/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() > 0.5;

//     if (isDone) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// console.log(promise);

// promise
//   .finally(() => {
//     console.log('Preloader stop');
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .then(result => {
//     console.log(result);

//     return 10;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });
