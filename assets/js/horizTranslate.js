var zoomOne = document.getElementsByClassName('zoomPic')[0],
    zoomOneBGSize = window.getComputedStyle(zoomOne).getPropertyValue('background-size'),
    $zoomTwo = $('.zoomPic:eq(1)'),
    zoomTwoBGSize = $zoomTwo.css('background-size');    

document.getElementsByClassName('zoom')[0].onclick = function() {
  if(!zoomOne.classList.contains('zoom'))
  {
    zoomOne.classList.add('zoom');
  }else{
    zoomOne.classList.remove('zoom');
    zoomOne.style.backgroundSize = zoomOneBGSize;
  } 
}

$('.zoom:eq(1)').on('click', function() { 
  if(!$zoomTwo.hasClass('zoom'))
  {
    $zoomTwo.addClass('zoom');
  } 
});
$('.pause:eq(1)').on('click', function() {
    var backgroundSize = $zoomTwo.css("background-size");
    $zoomTwo.css({'background-size': backgroundSize});
    $zoomTwo.removeClass('zoom');
});
$('.zoomout:eq(1)').on('click', function() {
  $zoomTwo.removeClass('zoom');
  $zoomTwo.css('background-size', zoomTwoBGSize);
});