
$(document).ready(function(){

    $("form").submit(function( event ) {

        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: new FormData($(this)),
            contentType: false,

            success : function (result) {
                alert('ssjjssj');
                alert(result);
            },
            error: function(){
                console.log('Ошибка! Данные не отправлены');
            },
            dataType: 'text',
            timeout: 1000

        });        
    event.preventDefault();

    });  
    
});

