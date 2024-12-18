/*
 * Деструктуризація об'єкта
 */

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   // isAdmin: true,
// };

// console.log(user);

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName, lastName, age: userAge, isAdmin = false } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('userAge:', userAge);
// console.log('isAdmin:', isAdmin);

/*
 * Глибока деструктуризація об'єкта
 */

//? Без глибокої деструктуризації

// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user);

// const { username, skills } = user;
// const { html, css, js } = skills;

// console.log('username:', username);
// console.log('skills:', skills);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

//? З глибокою деструктуризацією

// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user);

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

/*
 * Деструктуризація масива
 */

//? ====================
// const fullNames = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// console.log(fullNames);

// const fullName1 = fullNames[0];
// const fullName2 = fullNames[1];

// const [fullName1, , fullName3] = fullNames;

// console.log('fullName1:', fullName1);
// console.log('fullName2:', fullName2);
// console.log('fullName3:', fullName3);

//? ====================
// const getUserCoordinate = () => {
//   const longitude = 50.426857;
//   const latitude = 30.56368;

//   return [longitude, latitude];
// };

// console.log(getUserCoordinate());

// const userCoordinate = getUserCoordinate();

// console.log(userCoordinate[0]);
// console.log(userCoordinate[1]);

// const [lon, lat] = getUserCoordinate();

// console.log('lon:', lon);
// console.log('lat:', lat);

//* Операція rest при деструктуризації

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// const { firstName, lastName, ...otherProps } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('otherProps:', otherProps);
