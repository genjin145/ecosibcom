// слайдер отзывов
$('.reviews-slider').slick({
  autoplay: true,
  appendArrows: '.reviews__arrows',
  prevArrow: '<button class="reviews__arrows-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></svg></button>',
  nextArrow: '<button class="reviews__arrows-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/></svg></button>',
  dots: true,
  appendDots: '.reviews__dots',
  dotsClass: 'reviews__dots-list'
});


// плавная прокрутка страницы
$("body").on('click', '[href*="#"]', function(evt){
  let fixedOffset = 100;
  $('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 800);
  evt.preventDefault();
});


// позиционирование списка в блоке услуги
$(window).on('load resize', function() {
  $('.services-list__item').each(function() {
    let left = $(this).position().left,
        parentWidth = $(this).parent().parent().outerWidth();
  
    $(this).find('.services-list__content').css('left', -left + 'px');
    $(this).find('.services-list__content').css('width', parentWidth + 'px');
  });
});


// маска для телефона
$('input[name=phone').on('focus', function() {
  $(this).inputmask('+7(999) 999-99-99');
});

$('input[name=phone').on('blur', function() {
  $(this).inputmask('remove');
});

// валидация
$('button[type=submit').on('click', function(evt) {
  evt.preventDefault();

  let form = $(this)[0].form;
  
  $(form).checkValidity;
  console.log($(form).valide);

  for (let i = 0; i < form.length; i++) {
    if (form[i].tagName === 'INPUT') {
      if (form[i].required && form[i].value === '') {
        form[i].classList.add('form__input--error');
      } else {
        form[i].classList.remove('form__input--error');
      }
    }
  }
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

function sendForm() {

}

closePopup();