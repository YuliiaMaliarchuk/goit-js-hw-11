import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'loaders.css/loaders.min.css';

const iconSvgUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path fill="#FAFAFB" d="M6.81.219A.75.75 0 0 1 7.34 0h9.32a.75.75 0 0 1 .53.219l6.591 6.591a.75.75 0 0 1 .219.53v9.32a.75.75 0 0 1-.219.53l-6.591 6.591a.75.75 0 0 1-.53.219H7.34a.75.75 0 0 1-.53-.219L.219 17.19A.75.75 0 0 1 0 16.66V7.34a.75.75 0 0 1 .219-.53L6.81.219ZM7.65 1.5 1.5 7.65v8.7l6.15 6.15h8.7l6.15-6.15v-8.7L16.35 1.5h-8.7Z"/>
      <path fill="#FAFAFB" d="M6.969 6.969a.75.75 0 0 1 1.062 0L12 10.939l3.969-3.97a.75.75 0 1 1 1.062 1.062L13.061 12l3.97 3.969a.752.752 0 0 1-1.062 1.062L12 13.061l-3.969 3.97a.752.752 0 0 1-1.282-.531.751.751 0 0 1 .22-.531L10.939 12 6.97 8.031a.75.75 0 0 1 0-1.062Z"/>
    </svg>
    `);

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({ message: 'Enter a search query!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
        iziToast.error({
            theme: 'dark',
            title: '',
            message:
    'Sorry, there are no images matching<br>your search query.Please, try again!',
            position: 'topRight',
            timeout: 5000,
            backgroundColor: '#ef4040', 
            сolor: '#fafafb',
            iconUrl: iconSvgUrl,
            icon: '',
        });
    } else {
        createGallery(data.hits);
        e.target.elements['search-text'].value = '';
    }
  } catch (error) {
    iziToast.error({ message: 'An error occurred while loading images.' });
    console.error(error);
  } finally {
    hideLoader();
  }
});