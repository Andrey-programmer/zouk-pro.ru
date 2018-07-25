import 'jquery';

// При ширине экрана меньше 480px убираем деление по 2 блока в ряду
if ($(window).width() < 480) {
    $('#pricing .wrapper').removeClass('col-6').addClass('col-8');
}

if ($(window).width() < 380) {
    $('#pricing .wrapper').removeClass('col-6').addClass('col-10');
}