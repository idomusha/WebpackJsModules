// const sum = require('./sum');
// import sum from './sum';

// let total = sum(10, 5);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Show image'
button.onclick = () => {
    System.import('./image-viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);