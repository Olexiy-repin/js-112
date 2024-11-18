/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

//? Порахуйте загальну кількість відгуків із обʼєкта feedback.

//* Через цикл for...in
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// let totalFeedback = 0;

// for (const key in feedback) {
//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

//* Через метод Object.keys() та for...of
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// let totalFeedback = 0;

// const feedbackKeys = Object.keys(feedback);

// console.log(feedbackKeys);

// for (const key of feedbackKeys) {
//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

//* Через метод Object.values() та for...of
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// let totalFeedback = 0;

// const feedbackValues = Object.values(feedback);

// console.log(feedbackValues);

// for (const value of feedbackValues) {
//   totalFeedback += value;
// }

// console.log(totalFeedback);
