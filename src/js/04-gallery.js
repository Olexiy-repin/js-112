// https://unsplash.com/documentation
import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const searchedQuery = event.currentTarget.elements.user_query.value.trim();

    if (searchedQuery === '') {
      alert('Поле має бути заповнено!');

      return;
    }

    const { data } = await fetchPhotosByQuery(searchedQuery);

    if (data.total === 0) {
      alert('За таким ключовим словом зображень не знайдено!');

      galleryEl.innerHTML = '';

      searchFormEl.reset();

      return;
    }

    const galleryTemplate = data.results.map(el => createGalleryCardTemplate(el)).join('');

    galleryEl.innerHTML = galleryTemplate;
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
