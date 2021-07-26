$('.interface').on('click', function(){
  if ($(this).hasClass('orange')){
    $('body').css('background-color', 'orange')
    // $('body').toggleClass('orange')
  }else if($(this).hasClass('green')){
    $('body').css('background-color', 'green')
  }else if($(this).hasClass('increase')){
    $('p').animate({
      'font-size': '+=20'
    }, 500)
  }else if($(this).hasClass('move')){
    $('p').animate({
      'left': '+=10',
      'letter-spacing': '+=1'
    }, 500)
  }
})