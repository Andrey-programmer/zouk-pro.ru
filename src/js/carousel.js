// import 'jquery';

// Делаем переключение слайдера по клику на сам слайдер
$('#carousel .carousel-item').click(function(){
    $('#carousel .carousel-control-next').click();
});

//Делаем переключение слайдера по клику на части слайдеров крома ссылок (а)
$('#reviews .carousel-item .caption').add('#reviews .carousel-item .face').add('#reviews .carousel-item h3').click(function(){
    $('#reviews .carousel-control-next').click();
});

//Добавляем переключение на первый слайдер по клику на последний
$('#reviews_carousel .carousel-item:last .caption').add('#reviews_carousel .carousel-item:last .face').add('#review_carousel .carousel-item:last h3').click(()=>{  
    $('#reviews_carousel .carousel-indicators li:first').click();
});



// Подгоняем высоту картинок под первую
if($(window).width() < 576) {
    $('#carousel #main_carousel .carousel-item').each(function() {
        $(this).find('img').height($('#carousel #main_carousel .carousel-item:first-of-type img').height())
        console.log($(this).find('img').height()); 

    });
}