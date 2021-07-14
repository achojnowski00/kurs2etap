const buttonJS = document.querySelector('.js')

function createDiv(){
    const divItem = document.createElement('div');
    // divItem.classList.add('box');
    divItem.setAttribute('class','box');

    document.body.appendChild(divItem);
}

buttonJS.addEventListener('click', createDiv)
