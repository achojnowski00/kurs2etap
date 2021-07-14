//pobieramy elementy z DOM

const btnBig = document.querySelector('.bigger');
const btnSmall = document.querySelector('.smaller');
const paragraph = document.querySelector('p');


let fSize = 16;
paragraph.style.fontSize = fSize + "px"

btnBig.addEventListener('click', plusSize)

btnSmall.addEventListener('click', minusSize)

function minusSize(){
    fSize--;
    paragraph.style.fontSize = fSize + "px"
}

function plusSize(){
    fSize++;
    paragraph.style.fontSize = fSize + "px"
}



