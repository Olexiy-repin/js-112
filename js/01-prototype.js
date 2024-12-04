/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const userMethods = {
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const user = Object.create(userMethods);

// user.firstName = 'Nell';
// user.lastName = 'Fitzgerald';
// user.age = 30;

// console.log(user);
// console.log(user.getFullName());

// const anotherUser = Object.create(userMethods);

// anotherUser.firstName = 'Marguerite';
// anotherUser.lastName = 'Jones';
// anotherUser.age = 25;

// console.log(anotherUser);
// console.log(anotherUser.getFullName());

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   c: 'Object c',
// };

// const objB = Object.create(objC);

// objB.b = 'Object b';

// const objA = Object.create(objB);

// objA.a = 'Object a';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(objA.hasOwnProperty);
