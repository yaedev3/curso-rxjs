const url = 'https://api.github.com/userXXXs?per_page=5'

const fetchPromise = fetch(url)

fetchPromise
  .then((resp) => resp.json())
  .then((data) => console.log('data:', data))
  .catch((err) => console.warn('error en usuarios', err))
