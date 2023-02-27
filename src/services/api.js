import axios from 'axios';
import defaultPoster from 'images/default.jpg';

const API_KEY = '0de3e6e1ea62d4b6eb2e230ef210ae93';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/original';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

 export const fetchTrending = async () => {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get('trending/movie/day', {
    params,
  });

  const results = data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path: getPosterPath(poster_path),
  }));

  return results;
};

export const fetchSearchMovie = async query => {
  const params = {
    api_key: API_KEY,
    query,
  };

  const { data } = await axios.get('search/movie', { params });

  const results = data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path: getPosterPath(poster_path),
  }));

  return results;
};

export const fetchMovieDetails = async movieId => {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`movie/${movieId}`, {
    params,
  });

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    production_countries,
  } = data;

  return {
    poster_path: getPosterPath(poster_path),
    title,
    release_date: new Date(release_date).getFullYear(),
    vote_average: vote_average.toFixed(1),
    overview,
    genres: genres.map(genre => genre.name).join(', '),
    production_countries: production_countries
      .map(country => country.name)
      .join(', '),
  };
};

export const fetchMovieCredits = async movieId => {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`movie/${movieId}/credits`, { params });

  const cast = data.cast.map(({ profile_path, character, name }) => ({
    profile_path: getPosterPath(profile_path),
    character,
    name,
  }));

  return cast;
};

export const fetchMovieReviews = async movieId => {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`movie/${movieId}/reviews`, { params });

  const reviews = data.results.map(({ author, content }) => ({
    author,
    content,
  }));

  return reviews;
};

const getPosterPath = file_path => {
  return file_path ? `${BASE_URL_POSTER}${file_path}` : defaultPoster;
};
