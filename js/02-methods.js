/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },
};

playlist.changeRating(3);

console.log(playlist);
