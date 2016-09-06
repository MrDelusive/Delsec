$(document).ready(function () {

    $('#btnScatterLogicBomb').click(function () {
        if (scatterLogicCode > 0) {
            $('#btnScatterLogicBomb').prop('disabled', true);
            scatterLogicCode--;
            $('#warriorCodeScatterLogicResult').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            $('#scatterLogicBombAmt').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            localStorage.setItem("scatterLogicCode", scatterLogicCode);

            $('#main').css("background", "#440000");
            $('#center_Main').css("opacity", "0.5");
            $('#lblMoneyDisplay').html('$NaN');
            $('#lblMoneyDisplayScroll').html('$NaN');
            $(document).prop('title', 'Delsec Account: $NaN');
            window.setTimeout(function () {
                $('#btnScatterLogicBomb').prop('disabled', false);
                $('#main').css("background", "black");
                $('#center_Main').css("opacity", "1");
                money += 400;                
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
            }, 1000);
        }
        return false;
    });
});