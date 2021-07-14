$('.article button').on('click', function(){
  $('.modal-wrap').addClass('active');
  $('.article').addClass('blur');
})

$('.popupClose').on('click', function(){
  $('.modal-wrap').removeClass('active');
  $('.article').removeClass('blur');
})

