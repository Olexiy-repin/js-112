/*
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.log(friends);

/*
? Пошук друга за іменем
*/
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name.toLowerCase() === friendName.toLowerCase()) {
//       return friend;
//     }
//   }
//   return `${friendName} не знайдено!`;
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
? Отримуємо імена всіх друзів
*/
// const getAllNames = function (allFriends) {
//   const allNames = [];

//   for (const friend of allFriends) {
//     allNames.push(friend.name);
//   }

//   return allNames;
// };

// console.log(getAllNames(friends));

/*
? Отримуємо імена тільки тих друзів, які зараз онлайн
*/
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend.name);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

/*
? Напишіть функцію calcTotalPrice(stones, stoneName),
? яка приймає масив об'єктів та рядок з назвою каменю.
? Функція рахує і повертає загальну вартість каміння з
? таким ім'ям, ціною та кількістю з об'єкта
*/
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Аконіт', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (allStones, stoneName) {
//   console.log(allStones);

//   for (const stone of allStones) {
//     if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return `${stoneName} не знайдено!`;
// };

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Аметист'));
