/*
 * Синтаксис async/await
 * try...catch
 */

// const foo = async () => {
//   try {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject('Error!');
//       }, 2000);
//     });

//     console.log(promise);

//     const result = await promise;

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(foo());

//? Запит за книгами і обробка відповіді через async/await
// const fetchBooks = async () => {
// try {
//   const response = await fetch('https://6787f4eac4a42c916108e1a3.mockapi.io/books');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   const data = await response.json();

//   console.log(data);
// } catch (err) {
//   console.log(err);
// }
// };

// fetchBooks();

//? Запит за книгами і обробка відповіді через async/await та then()/catch()
// const fetchBooks = async () => {
//   try {
//     const response = await fetch('https://6787f4eac4a42c916108e1a3.mockapi.io/books');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Є «звичайна» функція foo. Як можна всередині неї отримати результат виконання async-функції без використання оператора await?
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   return response.json();
// };

// const foo = () => {
//   // ...що тут написати?
//   // щоб викликати fetchPosts() і дочекатися результату від async-функції
//   // не забувайте, тут не можна використовувати "await"

//   fetchPosts()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// foo();
