
$(document).ready(function(){

    $('form').submit(function(event){
        event.preventDefault();
        $.ajax({
        url:  $(this).attr('action'),
        type: $(this).attr('method'),
        data: $(this).serialize(),
        success: function(result) {
        alert('ssjjssj');
        },
        error: function(result) {
        console.log('Ошибка! Данные не отправлены');
        }
        });
        });

    /* $("form").submit(function( event ) {              
       
      
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: new FormData($(this)),
            contentType: false,

            success : function (result) {
                alert('ssjjssj');
                alert(result);
                event.preventDefault();
            },
            error: function(){
                console.log('Ошибка! Данные не отправлены');
            },
            dataType: 'text',
            timeout: 1000

        });     
      
    });   */
    
});

