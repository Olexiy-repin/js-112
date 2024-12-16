/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parentEl = document.querySelector('.js-parent');
const childEl = document.querySelector('.js-child');
const innerChildEl = document.querySelector('.js-inner-child');

parentEl.addEventListener('click', event => {
  console.group('Execution parent handler function!');
  console.log(`event.target: `, event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});

childEl.addEventListener('click', event => {
  console.group('Execution child handler function!');
  console.log(`event.target: `, event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});

innerChildEl.addEventListener('click', event => {
  console.group('Execution inner child handler function!');
  console.log(`event.target: `, event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});
