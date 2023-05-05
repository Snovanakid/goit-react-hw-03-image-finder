import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '34227694-9569f818613f570b55f9f9223';

export const getSearchedPixabayApi = (q, page = 1) => {
  return axios
    .get('api/', {
      params: {
        q,
        page,
        per_page: 20,
        key: API_KEY,
      },
    })
    .then(res => res.data);
};
