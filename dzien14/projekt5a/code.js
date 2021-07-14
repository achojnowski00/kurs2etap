$(document).on('scroll', function(){
  const windowHeight = $(window).height() + 100
  const scrollValue = $(this).scrollTop()
  // art2
  const $art2 = $('.art2')
  const art2FromTop = $art2.offset().top
  const art2Height = $art2.outerHeight()

  if(scrollValue > art2FromTop + art2Height - windowHeight){
    $art2.addClass('active')
  }else {
    $art2.removeClass('active')
  }

  // art3
  const $art3 = $('.art3')
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  if(scrollValue > art3FromTop + art3Height - windowHeight){
    $art3.addClass('active')
  }else {
    $art3.removeClass('active')
  }

  // art4
  const $art4 = $('.art4')
  const art4FromTop = $art4.offset().top
  const art4Height = $art4.outerHeight()

  if(scrollValue > art4FromTop + art4Height - windowHeight){
    $art4.addClass('active')
  }else {
    $art4.removeClass('active')
  }


  // Sekcja ze zdjęciami
  const $op1 = $('.op1');
  const $op2 = $('.op2');

  const op1FromTop = $op1.offset().top;
  const op2FromTop = $op2.offset().top;

  const op1Height = $op1.height();
  const op2Height = $op2.height();

  if(scrollValue >= op1FromTop + op1Height/4 - windowHeight ){
    $op1.addClass('active');
    console.log('vkhsdfj')
  }else{
    $op1.removeClass('active');
  }
  
  if(scrollValue >= op2FromTop + op2Height/4 - windowHeight){
    $op2.addClass('active');
  }else{
    $op2.removeClass('active');
  }
})