export const popularityCalFunction = (popularity, maxPopularity = 3000) => {
  const imdbRating = (popularity / maxPopularity) * 10;
  return imdbRating > 10 ? 10 : imdbRating.toFixed(1);
};
export const formatRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};