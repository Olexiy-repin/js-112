import axios from 'axios';

export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    query: searchedQuery,
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  });

  return axios.get(`https://api.unsplash.com/search/photos?${searchParams}`);
};
