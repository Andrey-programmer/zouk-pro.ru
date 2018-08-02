import 'jquery';

$('.navbar .nav-item').each(function(){    
    $(this).click(()=>{
        if($(window).width() <= 992) {
            $('.navbar-toggler').click();
        }
    });
}); 




$('button.navbar-toggler').click(function (event) {
    $('.nav-menu').toggleClass('show');
    $('.navbar-toggler').find('.line-first, .line-second, .line-third').toggleClass('x');  
});