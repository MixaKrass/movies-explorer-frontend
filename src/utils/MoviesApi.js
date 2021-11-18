const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';

export function getFirstMovies() {
  return fetch(baseUrl, {
    method: 'GET',
    headers : { "Content-Type": "application/json"},
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
  .catch((err) => {
    console.log(err);
  });
}