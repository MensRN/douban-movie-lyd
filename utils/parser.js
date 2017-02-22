export const movieItem = source => ({
  id: source.id,
  title: source.title,
  originalTitle: source.original_title,
  rating: source.rating.average,
  genres: source.genres,
  cover: source.images.large,
});
