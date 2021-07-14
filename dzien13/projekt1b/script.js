let menu = document.querySelector('aside')
let btn = document.querySelector('.burger')

btn.addEventListener('click', function(){
    menu.classList.toggle('loaded');
    btn.classList.toggle('active');
})