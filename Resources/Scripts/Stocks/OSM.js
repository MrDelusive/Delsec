$(window).load(function () {

    $('#OSMStockDisplayCost').html('$' + OSMCurrentStockPrice.toFixed(2));
    $('#OSMStockSellPrice').html('$' + (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider).toFixed(2));
    $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
    $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - (OSMCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyOSMStocks').click(function () {

        if (money >= OSMCurrentStockPrice) {
            money -= OSMCurrentStockPrice;
            ownedOSMStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyOSMStocks10').click(function () {

        if (money >= OSMCurrentStockPrice * 10) {
            money -= OSMCurrentStockPrice * 10;
            ownedOSMStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyOSMStocks100').click(function () {

        if (money >= OSMCurrentStockPrice * 100) {
            money -= OSMCurrentStockPrice * 100;
            ownedOSMStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyOSMStocksAll').click(function () {
        var OSMBuyAmt = Math.floor(money / OSMCurrentStockPrice);
        if (OSMBuyAmt >= 1) {
            money -= OSMCurrentStockPrice * OSMBuyAmt;
            ownedOSMStocks += OSMBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellOSMStocks').click(function () {
        if (ownedOSMStocks > 0) {
            money += OSMCurrentStockPrice - OSMCurrentStockPrice / 10;
            ownedOSMStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellOSMStocks10').click(function () {
        if (ownedOSMStocks > 9) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / 10) * 10;
            ownedOSMStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellOSMStocks100').click(function () {
        if (ownedOSMStocks > 99) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / 10) * 100;
            ownedOSMStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellOSMStocksAll').click(function () {
        if (ownedOSMStocks > 0) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / 10) * ownedOSMStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedOSMStocks = 0;
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);