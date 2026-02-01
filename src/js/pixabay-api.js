import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54459012-5e63b86c877094f2e2839be1c'; 

export async function getImagesByQuery(query, page = 1) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page,
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}