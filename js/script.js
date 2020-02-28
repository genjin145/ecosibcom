// слайдер отзывов
$('.reviews-slider').slick();


// позиционирование списка в блоке услуги
$('.services-list__item').each(function() {
  let left = $(this).position().left,
      parentWidth = $(this).parent().parent().outerWidth();

  $(this).find('.services-list__content').css('left', -left + 'px');
  $(this).find('.services-list__content').css('width', parentWidth + 'px');
});


// валидация
$('form').submit(function(evt) {
  evt.preventDefault();
  console.log($(this));
});


$('form').find('input').each(function() {
  if (!$(this).checkValidity) {
    console.log('err');
  }
});

// $('input[type=text]').each(function() {
//   if (!$(this).checkValidity) {
//     console.log('err');
//   }
// });


// закрыть попап
$(window).on('mousedown keydown', function(evt) {
  if ($(evt.target).hasClass('popup') || evt.originalEvent.key === 'Escape') {
    closePopup();
  }
});

function closePopup() {
  $('.popup').remove();
}

function openPopup() {

}

closePopup();
