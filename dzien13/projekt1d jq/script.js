$('.burger').on('click', function(){
    $('.fas, .wrapper').toggleClass('show');
    $('aside').toggleClass('loaded');

})


// let menu = document.querySelector('aside')
// let btn = document.querySelector('.burger')

// btn.addEventListener('click', function(){
//     menu.classList.toggle('loaded');

//     if(menu.className == 'loaded'){
//         btn.innerHTML = '<i class="fas fa-times"></i>'
//     }else{
//         btn.innerHTML = '<i class="fas fa-bars"></i>'
//     }
// })