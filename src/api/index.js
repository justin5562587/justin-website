import axios from 'axios';

const urlPrefix = 'http://127.0.0.1:9999';

export async function requestGet(url, params = {}) {
  return axios.get(`${urlPrefix}/url`, {
    params
  })
    .then(res => res)
    .catch(e => e);
}

export async function requestPost(url, params = {}) {
  return axios.post(`${urlPrefix}/url`, {
    params
  })
    .then(res => res)
    .catch(e => e);
}
