
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

listPrinter(picturesContainer, images);

const itemsCollection = document.getElementsByClassName('item');
const maskCollection = document.getElementsByClassName('mask');
const smallImgCollection = document.getElementsByClassName('img-small');

showNext();

//BOTTONE BOTTOM/////////////////////////////////////////////
btnBot.addEventListener('click', function(){
  
  if(counterImg === images.length - 1){
  
  hidePrev();
  
  counterImg = 0;
  
  showNext();    
    
  }else{
  
  hidePrev(); 
  
  counterImg ++;
  
  showNext();  

  }
});

////////////////////////////////////////////////////////////

//BOTTONE TOP //////////////////////////////////////////////

btnTop.addEventListener('click', function(){
  
  if(counterImg === 0){
  
  hidePrev(); 

  counterImg = 4;
  
  showNext();  
    
  }else{
  
  btnBot.classList.remove('d-none');
  
  hidePrev(); 
  
  counterImg--;

  showNext(); 
 
  }
});


//FUNZIONI////////


/**
 * Mostra/nasconde o evidenzia/disevidenzia un elemento con il comando apposito.
 * @param {elementToShow} what 
 * @param {show/hide/active/inactive} show 
 */
function toggler(what, show){

  let pippo = show;
  
  if(pippo === 'show'){
    what.classList.remove('d-none');
  }else if(pippo === 'hide'){
    what.classList.add('d-none');
  }else if(pippo === 'active'){
    what.classList.add('selected')
  }else if(pippo === 'inactive'){
    what.classList.remove('selected')
  }else{
    console.log('ERROR ERROR insert show or hide')
  };

}

/**
 * stampa tutti gli elementi di una lista all'interno di un div
 * @param {whereToPrintInside} whereToPrint 
 * @param {nameOfTheListToPrint} arrayName 
 */
function listPrinter(whereToPrint, arrayName){
  
  for(let c = 0; c < arrayName.length; c++){
    whereToPrint.innerHTML += `<img src="${arrayName[c]}" class="item d-none" alt="">`
    console.log(c)
  }

}


function hidePrev(){
  toggler(itemsCollection[counterImg], 'hide');
  toggler(smallImgCollection[counterImg], 'inactive');
  toggler(maskCollection[counterImg], 'show');
}

function showNext(){
  toggler(itemsCollection[counterImg], 'show');
  toggler(smallImgCollection[counterImg], 'active');
  toggler(maskCollection[counterImg], 'hide'); 
}