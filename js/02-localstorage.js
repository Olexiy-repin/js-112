/*
 * LocalStorage
 */

// console.log(window.localStorage);

/*
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// const product = {
//   title: 'Some title',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, earum.',
//   price: 1000,
// };

// sessionStorage.setItem('test', 'some string');
// sessionStorage.setItem('product-info', JSON.stringify(product));

/*
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// console.log(sessionStorage.getItem('test'));

// const product = JSON.parse(sessionStorage.getItem('product-info'));

// console.log(product);
/*
 * Видалення
 */

// sessionStorage.removeItem('product-info');
// sessionStorage.clear();
