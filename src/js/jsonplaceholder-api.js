import axios from 'axios';

export const fetchPosts = currentPage => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`);
};
