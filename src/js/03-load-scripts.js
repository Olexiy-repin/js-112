// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */
//? Рішення через колбеки
// const loadScript = (scriptUrl, onSuccess, onError) => {
//   const script = document.createElement('script');

//   script.src = scriptUrl;

//   document.head.append(script);

//   script.addEventListener('load', () => {
//     onSuccess(`${scriptUrl} завантажено успішно!`);
//   });

//   script.addEventListener('error', () => {
//     onError(`${scriptUrl} не завантажився!`);
//   });
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

//? Рішення через проміси
const loadScript = scriptUrl => {
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = scriptUrl;

    document.head.append(script);

    script.addEventListener('load', () => {
      resolve(`${scriptUrl} завантажено успішно!`);
    });

    script.addEventListener('error', () => {
      reject(`${scriptUrl} не завантажився!`);
    });
  });

  return promise;
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

loadScript('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js')
  .then(result => {
    console.log(result);

    return loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
