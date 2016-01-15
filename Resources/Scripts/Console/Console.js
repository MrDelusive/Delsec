// on enter pressed
$(document).keydown(function (e) {   
    if (e.which == 13) {
        $('#btnIncrement').prop('disabled', true);
        $('#btnWarriorIncrement').prop('disabled', true);
        $('#btnHealerIncrement').prop('disabled', true);
        $('#btnRogueIncrement').prop('disabled', true);

        $('#mainGameWindow').append('V:/clientData/5184828>' + $('#txtSubmit').val().replace(/</g, "&lt;").replace(/>/g, "&gt;") + '<br />');
        var input = $('#txtSubmit').val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (input == "test")
            $('#mainGameWindow').append('Test string accepted.<br />');
        else if (input == "help")
            $('#mainGameWindow').append('Common commands<br /><br />help<br />about<br />test<br />test<br />test<br />test<br />');     
        else if (input == "about")
            $('#mainGameWindow').append('Delsec created by Luke Parisi<br />I hope you enjoy the game!');

        else if (input == "dsfa") {
            money += 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (input == "dskfa") {
            money += 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (input == "dsdqd") {
            money += 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        else if (input == "dscoder") {
            efficiencyCode = 5;
            efficiency2Code = 10;
            scatterLogicCode = 20;
            localStorage.setItem("efficiencyCode", efficiencyCode);
            localStorage.setItem("efficiency2Code", efficiency2Code);
            localStorage.setItem("scatterLogicCode", scatterLogicCode);
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