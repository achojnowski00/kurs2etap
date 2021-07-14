function showScrollSize(){
    console.log(window.scrollY)
}


window.addEventListener('scroll',showScrollSize);


const spanResualt = document.querySelector('span');
window.addEventListener('scroll',function(){
    spanResualt.textContent = window.scrollY;
}) 