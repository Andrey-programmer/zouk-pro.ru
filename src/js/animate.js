import 'jquery';

$('.animated').css('opacity', 0);

$(window).scroll(function(){   
    $('.animated').each(function(){
        if($(window).scrollTop() + $(window).height() > $(this).offset().top + 50) {
            $(this).addClass($(this).data('animation')); 
        }

        // console.log($(this), $(window).scrollTop() + $(window).height(),  $(this).offset().top)
    });
});

// if($(window))

$(window).scroll(() => {
    $('.navbar').css({"backgroundColor": "white"});  
    if($(window).scrollTop() == 0) {
        $('.navbar').css({"backgroundColor" : "transparent"});   
    }
})
