/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keyup', event => {
//   console.log(`event.code: ${event.code}, event.key: ${event.key}`);
// });

document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.code === 'KeyF') {
    event.preventDefault();

    console.log('Done!');
  }
});
