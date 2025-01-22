// https://jsonplaceholder.typicode.com/

import { fetchPosts } from './jsonplaceholder-api';
import { createPostCardTemplate } from './render-functions';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let page = 1;

const renederPosts = async () => {
  try {
    const { data } = await fetchPosts(page);

    const postCardsTemplate = data.map(post => createPostCardTemplate(post)).join('');

    postsListEl.innerHTML = postCardsTemplate;

    loadMoreBtnEl.classList.remove('is-hidden');

    loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
  } catch (err) {
    console.log(err);
  }
};

renederPosts();

const onLoadMoreBtnClick = async () => {
  try {
    page++;

    const { data } = await fetchPosts(page);

    if (data.length === 0) {
      loadMoreBtnEl.classList.add('is-hidden');

      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);

      return;
    }

    const postCardsTemplate = data.map(post => createPostCardTemplate(post)).join('');

    postsListEl.insertAdjacentHTML('beforeend', postCardsTemplate);
  } catch (err) {
    console.log(err);
  }
};
