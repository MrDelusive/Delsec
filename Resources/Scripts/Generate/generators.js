$(document).ready(function () {
    // the default one

    $('#btnIncrement').keydown(function (e) {
        if (e.which == 13) {
            $('#btnIncrement').prop('disabled', true);
            $('#btnWarriorIncrement').prop('disabled', true);
            $('#btnRogueIncrement').prop('disabled', true);
            return false;
        }
    });

    $('#btnWarriorIncrement').keydown(function (e) {
        if (e.which == 13) {
            $('#btnIncrement').prop('disabled', true);
            $('#btnWarriorIncrement').prop('disabled', true);
            $('#btnRogueIncrement').prop('disabled', true);
            return false;
        }
    });

    $('#btnRogueIncrement').keydown(function (e) {
        if (e.which == 13) {
            $('#btnIncrement').prop('disabled', true);
            $('#btnWarriorIncrement').prop('disabled', true);
            $('#btnRogueIncrement').prop('disabled', true);
            return false;
        }
    });

    $('#btnIncrement').click(function () {        
        increment = Math.round(100 * Math.random() / 12.5) / 100;
        money += increment;
        localStorage.setItem("money", money);
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#manualIncrementAmtDisplay').html('Last Packet of Data retrieved: + $' + increment.toFixed(2));

        return false;
    });

    // the warrior one is stronger generates random number btwn 0 to 0.32 initially then plus coding power which is boosted through the warrior coding segment
    $('#btnWarriorIncrement').click(function () {
        warriorClicks++;
        localStorage.setItem("warriorClicks", warriorClicks);
        $('#totalWarriorClicks').html('Total Warrior Generate Clicks: ' + warriorClicks.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        increment = Math.round(100 * (Math.random() / 3.125)) / 100
            + efficiencyCode * 0.24
            + efficiency2Code * 0.48
        ;

        money += increment;
        localStorage.setItem("money", money);
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#warriorGenerateAmt').html('Last Packet of Data retrieved: + $' + increment.toFixed(2));

        return false;
    });

    $('#btnWizardIncrement').prop('disabled', true);
    // The wizard button should do nothing (click has been disabled as well). Uses a tick to generate instead
    $('#btnWizardIncrement').click(function () {
        return false;
    });

    // investment now ticks every 60 sec for 1% of the amount player has spent investing.
    $('#btnHealerIncrement').prop('disabled', true);
    $('#btnHealerIncrement').click(function () {       
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

    

});
