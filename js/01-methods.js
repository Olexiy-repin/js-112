/*
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

// const firstName = null;
// const lastName = null;

// const fullName = `${firstName ?? 'Anonymus'} ${lastName ?? 'Anonymus'}`;

// console.log(fullName);

// const fullName = '  Oleksii Repin  ';

// const result = fullName.trim();

// console.log(fullName);
// console.log(result);

/*
? Нормалізація рядка
?
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/
// const answer = 'ECMAScript';
// let userInput = prompt('Яка «офіційна» назва JavaScript?');

// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   // link = link + '/';
//   link += '/';
// }

// console.log(link);

/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

/*
? Пошук у рядку методом includes()
?
? Напиши функцію isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2),
? яка буде перевіряти чи є у рядку заборонені слова.
? Параметри функції:
? string - рядок;
? blacklistedWord1 - перше заборонене слово;
? blacklistedWord2 - друге заборонене слово.
? Функція має повернути true або false.
*/
// Повна версія функції isStrIncludesForbiddenWords
// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   const normalizedStr = string.toLowerCase();

//   const result = normalizedStr.includes(blacklistedWord1) || normalizedStr.includes(blacklistedWord2);

//   return result;
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));

// Скорочена версія функції isStrIncludesForbiddenWords
// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   return string.toLowerCase().includes(blacklistedWord1) || string.toLowerCase().includes(blacklistedWord2);
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));
