﻿// on enter pressed
$(document).keyup(function (e) {
    if (e.which == 13) {
        $('#mainGameWindow').append('V:/clientData/5184828>' + $('#txtSubmit').val() + '<br />');

        var input = $('#txtSubmit').val();
        if (input == "test")
            $('#mainGameWindow').append('Test string accepted.<br />');
        else if (input == "help")
            $('#mainGameWindow').append('Common commands<br /><br />help<br />test<br />test<br />test<br />test<br />test<br />');
        else if (input == "dsfa") {
            money += 1000;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
        }
        else if (input == "dskfa") {
            money += 10000;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
        }



        else
            $('#mainGameWindow').append('Entry ' + input + ' is not recognised as an internal or external command.<br />');
        $('#txtSubmit').val("");
        $('#txtSubmit').focus();

        //keep the gameWindow always scrolled to bottom.
        $('#mainGameWindow').scrollTop($('#mainGameWindow')[0].scrollHeight);
        return false;
    }
});
// if clicked anywhere, focus the textbox
$(document).click(function () {

    $('#txtSubmit').focus();
});