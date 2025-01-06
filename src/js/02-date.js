//* Створення нової дати
// const date = new Date();

// console.dir(date.getTime());

// console.dir(Date.now());

//? Створіть об'єкт date для дати: 01 січня 2025 року, 12 годин 10 хвилин.

// const date1 = new Date('2025-01-01T12:10:00');

// console.log(date1);

// const date2 = new Date(2025, 0, 1, 12, 10);

// console.log(date2);

/*
? Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
? 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/

// const getWeekDay = date => {
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return daysArr[date.getDay()];
// };

// const dateNow = new Date('2025-01-05T12:00:00');

// console.log(getWeekDay(dateNow));

/*
? Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
? Параметри:
? year – рік з чотирьох цифр, наприклад, 2012.
? month – місяць від 0 до 11.
? Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2013, 3));

//? Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
// const getSecondsToTomorrow = () => {
//   const dateNow = new Date();
//   const dateTomorrow = new Date(
//     dateNow.getFullYear(),
//     dateNow.getMonth(),
//     dateNow.getDate() + 1
//   );

//   const diff = dateTomorrow.getTime() - dateNow.getTime();

//   return Math.floor(diff / 1000);
// };

// console.log(getSecondsToTomorrow());
