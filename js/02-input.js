/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const fieldEl = document.querySelector('.js-user-name');
const checkboxPolicyEl = document.querySelector('.js-policy-checkbox');

/*
? Виводь в консоль все що користувач вводить в input
*/

// fieldEl.addEventListener('input', () => {
//   console.log(fieldEl.value);
// });

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */

// fieldEl.addEventListener('blur', () => {
//   const fieldValue = fieldEl.value;

//   if (fieldValue === '') {
//     alert('Поле з імʼям має бути заповнено!');

//     return;
//   }

//   alert(`Вітаємо ${fieldValue}`);
// });

// fieldEl.addEventListener('change', () => {
//   const fieldValue = fieldEl.value;

//   if (fieldValue === '') {
//     alert('Поле з імʼям має бути заповнено!');
//     return;
//   }

//   alert(`Вітаємо ${fieldValue}`);
// });

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

checkboxPolicyEl.addEventListener('change', () => {
  if (checkboxPolicyEl.checked) {
    alert('Done!');
  }
});
