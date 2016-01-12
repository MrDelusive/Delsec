$(document).ready(function () {

    var timer = 60;
    $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
    setInterval(function () {
        if (timer > 1) {
            timer--;
            $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
        }
        else {
            $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
            timer = 60;
        }
    }, 1000);

    setInterval(function () {      
        var generatedAmt = totalInvestment / 200;
        money += generatedAmt;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("money", money);
        $('#healerGenerateAmt').html('Generated Additional: $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, 60000);

    

});