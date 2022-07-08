export const BASE_URL = "https://imdb-api.com/en/API";
export const API_KEY = "/k_9aax4j38";
export const SEARCH_MOVIE_URL = BASE_URL + "/SearchMovie" + API_KEY;
export const GET_MOVIE_BY_ID_URL = (id) => {
  return BASE_URL + "/Title" + API_KEY + '/' + id + "/FullActor,FullCast,Posters,Images,";
};