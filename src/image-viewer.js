import '../styles/image-viewer.css';
import big from '../assets/1200x1200.jpg';
import small from '../assets/200x200.jpg';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);