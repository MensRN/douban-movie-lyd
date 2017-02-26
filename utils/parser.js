export const movieItem = source => ({
  id: source.id,
  title: source.title,
  originalTitle: source.original_title,
  rating: source.rating.average,
  genres: source.genres,
  cover: source.images.large,
});

export const detail = source => ({
  title: source.title,
  cover: source.images.large,
  rating: source.rating.average,
  ratings_count: source.ratings_count,
  year: source.year,
  countries: source.countries,
  genres: source.genres,
  directors: source.directors,
  casts: source.casts,
  summary: source.summary,
});
