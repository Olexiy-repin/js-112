/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class User {
  #password;
  #login;

  static test = 10;

  constructor(firstName, lastName, login, password) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.#login = login;
    this.#password = password;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getPassword() {
    return this.#password;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
}

const user = new User('Josephine', 'Arnold', 'test@gmail.com', 'qwerty123');

console.log(user);
console.dir(User);

// console.log(user.getFullName());

// console.log(user.getPassword());
// user.setPassword('newpassword');
// console.log(user.getPassword());

// console.log(user.login);
// user.login = 'newLogin@gmail.com';
// console.log(user.login);

// const anotherUser = new User('Harold', 'McBride', 'test2@gmail.com', 'qwerty123321');

// console.log(anotherUser);
// console.log(anotherUser.getFullName());
