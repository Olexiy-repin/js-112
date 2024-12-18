/*
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

//? Без деструктуризації

// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// getUserName(user);

//? З деструктуризацією

// function getUserName(obj) {
//   const {
//     username,
//     skills: { html, css, js },
//   } = obj;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user);

//? Деструктуризація в параметрах функції

// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function getUserName({ username, skills: { html, css, js } }, num1, num2) {
//   // let { username, skills: { html, css, js } } = user;
//   // let num1 = 10;
//   // let num2 = 20;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
//   console.log(num1);
//   console.log(num2);
// }

// getUserName(user, 10, 20);
