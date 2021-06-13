const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2eb432ffbed462250f1e1cfc103ef208&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w400";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=2eb432ffbed462250f1e1cfc103ef208&query=";

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};

export { API_URL, IMG_PATH, SEARCH_API, getMovies };
