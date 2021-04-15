$(function() {
    $(".navbar a").on('click', function() {
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    });
    
    
    $('#form').on('submit', function(e) {
        var data = $("#form:input").serialize();
        $.ajax({
            type: "GET",
            url: "../pages/handler.php",
            data: data,
            success: function(msg) {
                alert('Отправлено');
            },
            error: function(msg) {
                alert('Ошибка');
            }, 
        });
        e.preventDefault();
    });
});


let elem = document.querySelector('input[type=tel]');
let maskOptions = {
    mask: '+{7(000)}000-00-00'
};
let tel = new IMask(elem, maskOptions);








