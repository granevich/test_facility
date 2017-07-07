/**
 * Created by granevich on 06.05.2016.
 */
$(document).ready(function() {
    var menu = $('menu');
    $("#menu-x").click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
           menu.addClass('active')
        } else {
           menu.removeClass('active');
        }
    });
    $('.button_sing_up').on('click', function () {
        $('.modal').css({
            'display':'flex'
        });
    });
    $('.close_button').on('click', function () {
        $('.modal').css({
            'display':'none'
        });
    });
    $('.uk-input').focus(function () {
        $(this).val('input text')
    });
    $('.uk-input').focusout(function () {
        $(this).val('')
    })

});