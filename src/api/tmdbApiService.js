import axios from 'axios'

const language = navigator.language

export default function fetchTmdbData (resource, params = {}) {
  let url = `https://api.themoviedb.org/3/${resource}?api_key=${process.env.VUE_APP_FETCH_API_KEY}&language=${language}`
  if (params.query) {
    url = url.concat(`&query=${params.query}`)
  }
  if (params.page) {
    url = url.concat(`&page=${params.page}`)
  }

  return axios({
    method: 'get',
    url
  })
}
