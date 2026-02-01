// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

export function createGallery(images) {
    const markup = images.map(image => `
        <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
        <img 
        class="gallery-image" 
        src="${image.webformatURL}" 
        alt="${image.tags}" 
        loading="lazy"
        />
        </a>
        <div class="info">
        <p class="text-info"><b>Likes:</b>${image.likes}</p>
        <p class="text-info"><b>Views:</b>${image.views}</p>
        <p class="text-info"><b>Comments:</b>${image.comments}</p>
        <p class="text-info"><b>Downloads:</b>${image.downloads}</p>
        </div>
        </li>
`).join('');

galleryList.insertAdjacentHTML('beforeend', markup);
lightbox.refresh();
}

export function showLoader() {
    loaderContainer.classList.remove('is-hidden');
}

export function hideLoader() {
    loaderContainer.classList.add('is-hidden');
}

export function clearGallery() {
    galleryList.innerHTML = '';
}