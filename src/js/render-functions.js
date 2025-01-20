export const createGalleryCardTemplate = imgInfo => {
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
