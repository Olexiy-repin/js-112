/*
 * Додавання прослуховувача подій на кожен елемент
 */

//? Отримай колір квадрата по якому було здійснено клік

// const boxesElements = document.querySelectorAll('.js-box');

// console.dir(boxesElements[1]);

// boxesElements.forEach(el => {
//   el.addEventListener('click', event => {
//     console.log(event.target.dataset.color);
//   });
// });

/*
 * Дегегування подій
 */

//? Отримай колір квадрата по якому було здійснено клік
const containerEl = document.querySelector('.js-container');

containerEl.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(event.target.dataset.color);
});
