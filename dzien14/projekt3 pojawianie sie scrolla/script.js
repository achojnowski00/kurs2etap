$(document).on('scroll', function(){
  $('div.info').text("Aktualna pozycja scrolla: " + $(window).scrollTop().toFixed(0) + "px")
  if($(document).scrollTop() > 200){
    $('div.info').addClass('active')
  }
  else{
    $('div.info').removeClass('active')
  }
})