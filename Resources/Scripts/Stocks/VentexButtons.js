$(window).load(function () {
    var sellDivider = 10; // Normal sell price at 10% lower.
    if (userClass == "Rogue")
        sellDivider = 20; // Sell price only 5% lower if rogue.
    $('#btnBuyVentexStocks').click(function () {

        if (money >= ventexCurrentStockPrice) {
            money -= ventexCurrentStockPrice;
            ownedVentexStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyVentexStocks10').click(function () {

        if (money >= ventexCurrentStockPrice * 10) {
            money -= ventexCurrentStockPrice * 10;
            ownedVentexStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyVentexStocks100').click(function () {

        if (money >= ventexCurrentStockPrice * 100) {
            money -= ventexCurrentStockPrice * 100;
            ownedVentexStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyVentexStocksAll').click(function () {
        var ventexBuyAmt = Math.floor(money / ventexCurrentStockPrice);
        if (ventexBuyAmt >= 1) {
            money -= ventexCurrentStockPrice * ventexBuyAmt;
            ownedVentexStocks += ventexBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellVentexStocks').click(function () {
        if (ownedVentexStocks > 0) {
            money += ventexCurrentStockPrice - ventexCurrentStockPrice / 10;
            ownedVentexStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellVentexStocks10').click(function () {
        if (ownedVentexStocks > 9) {
            money += (ventexCurrentStockPrice - ventexCurrentStockPrice / 10) * 10;
            ownedVentexStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellVentexStocks100').click(function () {
        if (ownedVentexStocks > 99) {
            money += (ventexCurrentStockPrice - ventexCurrentStockPrice / 10) * 100;
            ownedVentexStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellVentexStocksAll').click(function () {
        if (ownedVentexStocks > 0) {
            money += (ventexCurrentStockPrice - ventexCurrentStockPrice / 10) * ownedVentexStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedVentexStocks = 0;
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#ventexSellEstimate').html('$0');
        }
        return false;
    });

})(jQuery);