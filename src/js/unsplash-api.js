import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const axiosOptions = {
    params: {
      query: searchedQuery,
      page: currentPage,
      per_page: 12,
      client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    },
  };

  return axios.get(`https://api.unsplash.com/search/photos`, axiosOptions);
};
