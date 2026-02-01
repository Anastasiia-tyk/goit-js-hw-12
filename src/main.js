// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

    const query = event.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.error({
        message: 'Please enter a search query',
        position: 'topRight',
    });
    return;
}

clearGallery();
showLoader();

getImagesByQuery(query)
.then(data => {
    if (data.hits.length === 0) {
        iziToast.error({
        message:
            'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        progressBar:'#B51B1B',
        messageColor: '#FFFFFF',
        });
        return;
    }

createGallery(data.hits);
    })
.catch(() => {
    iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
    });
})
.finally(() => {
    hideLoader();
});
}