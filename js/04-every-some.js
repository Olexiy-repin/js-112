const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

//? Перевірте чи всі гравці онлайн
// Повна версія
// const isAllOnline = players.every((el, idx, arr) => {
//   return el.online;
// });

// console.log('isAllOnline: ', isAllOnline);

// Скорочена версія
// const isAllOnline = players.every(el => el.online);

// console.log('isAllOnline: ', isAllOnline);

/*
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */

//? Перевірте чи є хоч хтось онлайн
// Повна версія
// const isAnyOnline = players.some((el, idx, arr) => {
//   return el.online;
// });

// console.log('isAnyOnline: ', isAnyOnline);

// Скорочена версія
// const isAnyOnline = players.some(el => el.online);

// console.log('isAnyOnline: ', isAnyOnline);
