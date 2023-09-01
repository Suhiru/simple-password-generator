'use strict';

const btn_generation = document.querySelector('#generation');
const btn_copy = document.querySelector('#copy');

window.onload = init;

function init() {
  btn_generation.addEventListener('click', main);
  btn_copy.addEventListener('click', copy);
}

const main = () => {
  console.log('Generated');
};

const copy = () => {
  console.log('copied');
};
