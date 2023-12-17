export const apiKey = "4049ee976eb5145896f574b7279085c0";
export const apiUrl = "https://api.themoviedb.org/3/movie/popular";
export const apiUrlImg = "https://image.tmdb.org/t/p/original/";
export const apiUrlImgSm = "https://image.tmdb.org/t/p/w300/";
export const apiUrlGenre = "https://api.themoviedb.org/3/genre/movie/list";
export const apiUrlFindById = (id) => {
  return `https://api.tmdb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=releases,credits,trailers,external_ids&language=en`;
};
export const apiUrlFindVideoById = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
};
export const devs = [
  { 
    name: "Boy C.S.",
    github: "https://github.com/Boycanss",
  },
  { 
    name: "Flo S.",
    github: "https://github.com/floasebastian",
  }
];
export const favicon = "img/logo.png";