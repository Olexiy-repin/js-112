// https://unsplash.com/documentation
// N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = imgInfo => {
  /*
    <li class="gallery-card">
      <img class="gallery-img" src="" alt="" />
    </li>
  */
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${imgInfo.urls.regular}" alt="${imgInfo.alt_description}" />
    </li>
  `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    alert('Поле має бути заповнено!');

    return;
  }

  console.log(searchedQuery);

  fetch(
    `https://api.unsplash.com/search/photos?query=${searchedQuery}&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        alert('За таким ключовим словом зображень не знайдено!');

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }

      const galleryTemplate = data.results.map(el => createGalleryCardTemplate(el)).join('');

      galleryEl.innerHTML = galleryTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
