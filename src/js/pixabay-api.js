import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54459012-5e63b86c877094f2e2839be1c'; 

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    return axios.get(BASE_URL, { params })
        .then(response => response.data);
}