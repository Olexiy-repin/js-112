import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');

let page = 1;
let searchedQuery = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements.user_query.value.trim();

    if (searchedQuery === '') {
      alert('Поле має бути заповнено!');

      return;
    }

    page = 1;

    loadMoreBtnEl.classList.add('is-hidden');

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    if (data.total === 0) {
      alert('За таким ключовим словом зображень не знайдено!');

      galleryEl.innerHTML = '';

      searchFormEl.reset();

      return;
    }

    if (data.total_pages > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');

      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryTemplate = data.results.map(el => createGalleryCardTemplate(el)).join('');

    galleryEl.innerHTML = galleryTemplate;
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    const galleryTemplate = data.results.map(el => createGalleryCardTemplate(el)).join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    if (page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');

      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    console.log(err);
  }
};
