import bunny from './assets/bunny.jpg';
import './style.css';

const title = document.createElement('h3');

title.textContent = 'Webpack make easy';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = bunny;
page.appendChild(img);