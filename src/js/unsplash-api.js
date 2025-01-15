export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    query: searchedQuery,
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  });

  return fetch(`https://api.unsplash.com/search/photos?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
