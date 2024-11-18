/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const film = {
  title: 'Harry Potter',
  description: 'Lorem ipsum dolor sit amet.',
  rating: 10,
  actors: ['Janie Gibbs', 'Rosalie Jensen', 'Carolyn Matthews'],
  isAdult: false,
  translations: {
    ua: 'https://ua',
    en: 'https://en',
  },
};

console.log(film);

// console.log(film.title);
// console.log(film.description);

// console.log(film['rating']);
// console.log(film['actors']);

// const key = 'isAdult';

// console.log(film.key);
// console.log(film[key]);

// film.isAdult = true;
// film.test = 100;

// console.log(film);

// console.log(film.translations.en);
