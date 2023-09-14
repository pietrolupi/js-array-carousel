
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


let counterImg = 0;

for(let i = 0; i < images.length; i++){
  const image = images[i];
  
  picturesContainer.innerHTML += `<img src="${image}" class="item d-none" alt="">`;
};

const itemsCollection = document.getElementsByClassName('item');
const maskCollection = document.getElementsByClassName('mask');
const smallImgCollection = document.getElementsByClassName('img-small');

itemsCollection[counterImg].classList.remove('d-none');
maskCollection[counterImg].classList.add('d-none');
smallImgCollection[counterImg].classList.add('selected');

//BOTTONE BOTTOM/////////////////////////////////////////////
btnBot.addEventListener('click', function(){
  
  if(counterImg === images.length - 1){
  
  itemsCollection[counterImg].classList.add('d-none');
  smallImgCollection[counterImg].classList.remove('selected');
  maskCollection[counterImg].classList.remove('d-none');
  
  counterImg = 0;
  
  itemsCollection[counterImg].classList.remove('d-none');
  smallImgCollection[counterImg].classList.add('selected');
  maskCollection[counterImg].classList.add('d-none');
    
    
  }else{
    btnTop.classList.remove('d-none');

  itemsCollection[counterImg].classList.add('d-none');
  smallImgCollection[counterImg].classList.remove('selected');
  maskCollection[counterImg].classList.remove('d-none');
  

  counterImg ++;
  
  itemsCollection[counterImg].classList.remove('d-none');
  smallImgCollection[counterImg].classList.add('selected');
  maskCollection[counterImg].classList.add('d-none');
  console.log(counterImg)
  }
});

////////////////////////////////////////////////////////////

//BOTTONE TOP //////////////////////////////////////////////

btnTop.addEventListener('click', function(){
  
  if(counterImg === 0){

  itemsCollection[counterImg].classList.add('d-none');
  smallImgCollection[counterImg].classList.remove('selected');
  maskCollection[counterImg].classList.remove('d-none');

  counterImg = 4;

  itemsCollection[counterImg].classList.remove('d-none');
  smallImgCollection[counterImg].classList.add('selected');
  maskCollection[counterImg].classList.add('d-none');
    
  }else{
  
  btnBot.classList.remove('d-none');
  
  itemsCollection[counterImg].classList.add('d-none');
  smallImgCollection[counterImg].classList.remove('selected');
  maskCollection[counterImg].classList.remove('d-none');

  counterImg--;

  itemsCollection[counterImg].classList.remove('d-none');
  smallImgCollection[counterImg].classList.add('selected');
  maskCollection[counterImg].classList.add('d-none');
  }
});

console.log(itemsCollection[0]);
console.log(itemsCollection[4])
console.log(counterImg)