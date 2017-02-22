export const movieItem = source => ({
  id: source.id,
  title: source.title,
  originalTitle: source.originalTitle,
  rating: source.rating.average,
  genres: source.genres,
  cover: source.images.large,
});
