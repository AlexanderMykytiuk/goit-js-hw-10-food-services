import templateItem from '../templates/dish.hbs';
import menu from '../menu.json';

const markup = templateItem(menu);
const toolbarRef = document.querySelector('.js-menu');

toolbarRef.insertAdjacentHTML('beforeend', markup);