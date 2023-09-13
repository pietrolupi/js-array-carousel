
const picturesContainer = document.querySelector('.pictures-container');

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
];

const btnTop = document.querySelector('.top');
const btnBot = document.querySelector('.bot');

btnTop.classList.add('d-none');

let counterImg = 0;

for(let i = 0; i < images.length; i++){
  const image = images[i];
  
  picturesContainer.innerHTML += `<img src="${image}" class="item d-none" alt="">`;
};

const itemsCollection = document.getElementsByClassName('item');

itemsCollection[counterImg].classList.remove('d-none');

//BOTTONE BOTTOM/////////////////////////////////////////////
btnBot.addEventListener('click', function(){
  
  btnTop.classList.remove('d-none');

  itemsCollection[counterImg].classList.add('d-none');
  
  counterImg ++;
  
  itemsCollection[counterImg].classList.remove('d-none');

  if(counterImg === images.length - 1){
    btnBot.classList.add('d-none');
  }
});

////////////////////////////////////////////////////////////

//BOTTONE TOP //////////////////////////////////////////////

btnTop.addEventListener('click', function(){
  
  btnBot.classList.remove('d-none');
  
  itemsCollection[counterImg].classList.add('d-none');

  counterImg--;

  itemsCollection[counterImg].classList.remove('d-none');
  
  if(counterImg === 0){
    btnTop.classList.add('d-none');
  }
});
