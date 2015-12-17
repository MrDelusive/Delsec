$(window).load(function () {

    // the default one
    $('#btnIncrement').click(function () {

        // random increments instead of a fixed value. (rdms between 0.00 - 0.08)               
        increment = Math.round(100 * Math.random() / 12.5) / 100;
        money = money + increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
        $('#manualIncrementAmtDisplay').html('Last Chunk of Data retrieved: + $' + increment.toFixed(2));

        // the initial fade in of the shop
        if (money >= 1) {
            $("#btnShop").fadeIn(1000);
            $("#btnEmails").fadeIn(1000);
            $("#btnInvestments").fadeIn(1000);
            $("#btnStockMarket").fadeIn(1000);
            $("#btnAbilities").fadeIn(1000);
            //shopDisplayed = true;
        }
        return false;
    });

    // the warrior one is stronger generates random number btwn 0 to 0.32 initially then plus coding power ( more amt clicked = higher gen every 100 clicks = 1dol.
    $('#btnWarriorIncrement').click(function () {
        warriorClicks++;
        increment = Math.round(100 * (Math.random() / 3.125 + warriorClicks / 100)) / 100;
        money = money + increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
        $('#warriorGenerateAmt').html('Last Chunk of Data retrieved: + $' + increment.toFixed(2));

        return false;
    });


    // The wizard button should do nothing (click has been disabled as well). Uses a tick to generate instead
    $('#btnWizardIncrement').click(function () {
        return false;
    });

    // generates stocks
    $('#btnRogueIncrement').click(function () {
        return false;
    });

    // generates interest
    $('#btnHealerIncrement').click(function () {
        return false;
    });

})(jQuery);