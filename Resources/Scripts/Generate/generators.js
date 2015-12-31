$(window).load(function () {    
    // the default one
    $('#btnIncrement').click(function () {        
        increment = Math.round(100 * Math.random() / 12.5) / 100;
        money += increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#manualIncrementAmtDisplay').html('Last Chunk of Data retrieved: + $' + increment.toFixed(2));

        // the initial fade in of the shop
        if (money >= 1) {
            $("#btnShop").fadeIn(500);
            $("#btnEmails").fadeIn(500);
            $("#btnInvestments").fadeIn(500);
            $("#btnStockMarket").fadeIn(500);
            $("#btnAbilities").fadeIn(500);
        }
        return false;
    });

    // the warrior one is stronger generates random number btwn 0 to 0.32 initially then plus coding power ( more amt clicked = higher gen every 100 clicks = 1dol.
    $('#btnWarriorIncrement').click(function () {
        warriorClicks++;
        increment = Math.round(100 * (Math.random() / 3.125 + warriorClicks / 100)) / 100;
        money += increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#warriorGenerateAmt').html('Last Chunk of Data retrieved: + $' + increment.toFixed(2));

        return false;
    });

    $('#btnWizardIncrement').prop('disabled', true);
    // The wizard button should do nothing (click has been disabled as well). Uses a tick to generate instead
    $('#btnWizardIncrement').click(function () {
        return false;
    });

    // generates interest based on current money 0.01% of total
    $('#btnHealerIncrement').click(function () {
        increment = Math.round(100 * money / 10000) / 100;
        if (increment > 500)
            increment = 500;
        money += increment;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#healerGenerateAmt').html("You have added 0.01% interest to your account for: $" + increment.toFixed(2));
        return false;
    });

    // generates stocks Astor/Ventex/Entaq/Popbot
    $('#btnRogueIncrement').click(function () {
        var currentStockGen = Math.floor(Math.random() * 4) + 1;
        switch (currentStockGen) {
            case 1:
                ownedEntaqStocks++;
                $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
                $('#rogueGenerateAmt').html("+1 Entaq stock.");
                break;
            case 2:
                ownedVentexStocks++;
                $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / 10)).toFixed(2));
                $('#rogueGenerateAmt').html("+1 Ventex stock.");
                break;
            case 3:
                ownedAstorStocks++;
                $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
                $('#rogueGenerateAmt').html("+1 Astor stock.");
                break;
            case 4:
                ownedPopbotStocks++;
                $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / 10)).toFixed(2));
                $('#rogueGenerateAmt').html("+1 Popbot stock.");
                break;
            default:
                break;
        }
        return false;
    });

    

})(jQuery);
