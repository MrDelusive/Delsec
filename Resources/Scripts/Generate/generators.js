$(window).load(function () {

    // the default one
    $('#btnIncrement').click(function () {
            
        increment = Math.round(100 * Math.random() / 12.5) / 100;
        money += increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
        $('#manualIncrementAmtDisplay').html('Last Chunk of Data retrieved: + $' + increment.toFixed(2));

        // the initial fade in of the shop
        if (money >= 1) {
            $("#btnShop").fadeIn(500);
            $("#btnEmails").fadeIn(500);
            $("#btnInvestments").fadeIn(500);
            $("#btnStockMarket").fadeIn(500);
            $("#btnAbilities").fadeIn(500);
            //shopDisplayed = true;
        }
        return false;
    });

    // the warrior one is stronger generates random number btwn 0 to 0.32 initially then plus coding power ( more amt clicked = higher gen every 100 clicks = 1dol.
    $('#btnWarriorIncrement').click(function () {
        warriorClicks++;
        increment = Math.round(100 * (Math.random() / 3.125 + warriorClicks / 100)) / 100;
        money += increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
        $('#warriorGenerateAmt').html('Last Chunk of Data retrieved: + $' + increment.toFixed(2));

        return false;
    });


    // The wizard button should do nothing (click has been disabled as well). Uses a tick to generate instead
    $('#btnWizardIncrement').click(function () {
        return false;
    });

    // generates interest based on current money 0.1% of total
    $('#btnHealerIncrement').click(function () {
        increment = Math.round(100 * money / 1000) / 100;
        money += increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
        $('#healerGenerateAmt').html("You have added 0.1% interest to your account for: $" + increment.toFixed(2));
        return false;
    });

    // generates stocks
    $('#btnRogueIncrement').click(function () {
        return false;
    });

    

})(jQuery);