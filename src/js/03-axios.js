/*
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

// import axios from 'axios';

/*
 * Read (GET)
 */
// const getBooks = () => {
//   return axios.get('https://6787f4eac4a42c916108e1a3.mockapi.io/books');
// };

// getBooks()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Create (POST)
 */
// const addBook = newBook => {
//   return axios.post('https://6787f4eac4a42c916108e1a3.mockapi.io/books', newBook);
// };

// addBook({
//   title: 'Третя тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Update (PUT/PATCH)
 */
// const updateBookById = (dataForUpdate, bookId) => {
//   return axios.put(`https://6787f4eac4a42c916108e1a3.mockapi.io/books/${bookId}`, dataForUpdate);
// };

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 10)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ rating: 1 }, 11)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Delete (DELETE)
 */
// const removeBook = bookId => {
//   return axios.delete(`https://6787f4eac4a42c916108e1a3.mockapi.io/books/${bookId}`);
// };

// removeBook(12)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });
