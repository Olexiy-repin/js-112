/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
? Оброби форму та збережи відгук користувача в об'єкт
*/
const formEl = document.querySelector('.js-feedback-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  // const { email: emailEl, password: passwordEl, comment: commentEl } = formEl.elements;

  // console.log(emailEl);
  // console.log(passwordEl);
  // console.log(commentEl);

  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
    [formEl.elements.comment.name]: formEl.elements.comment.value,
  };

  console.log(formData);

  formEl.reset();
});
