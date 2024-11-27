/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 25];

/*
1 Ітерація
acc = 0
el = 5
idx = 0
arr = [5, 10, 15]

return 0 + 5;

2 Ітерація
acc = 5
el = 10
idx = 1
arr = [5, 10, 15]

return 5 + 10;

3 Ітерація
acc = 15
el = 25
idx = 2
arr = [5, 10, 15]

return 15 + 25;
*/

// let total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(numbers);
// console.log(total);

/*
? Рахуємо загальну зарплату
 */
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// console.log(salary);

// const salaryValues = Object.values(salary);

// console.log(salaryValues);

// [100, 50, 150]

// const totalSalary = salaryValues.reduce((acc, el) => acc + el, 0);

// console.log(totalSalary);

/*
? Рахуємо загальну кількість годин
*/
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.log(players);

// const totalTimePlayed = players.reduce((acc, el, idx, arr) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log(totalTimePlayed);
