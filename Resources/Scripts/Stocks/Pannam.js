$(window).load(function () {

    $('#pannamStockDisplayCost').html('$' + pannamCurrentStockPrice.toFixed(2));
    $('#pannamStockSellPrice').html('$' + (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider).toFixed(2));
    $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
    $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - (pannamCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyPannamStocks').click(function () {

        if (money >= pannamCurrentStockPrice) {
            money -= pannamCurrentStockPrice;
            ownedPannamStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyPannamStocks10').click(function () {

        if (money >= pannamCurrentStockPrice * 10) {
            money -= pannamCurrentStockPrice * 10;
            ownedPannamStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyPannamStocks100').click(function () {

        if (money >= pannamCurrentStockPrice * 100) {
            money -= pannamCurrentStockPrice * 100;
            ownedPannamStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyPannamStocksAll').click(function () {
        var pannamBuyAmt = Math.floor(money / pannamCurrentStockPrice);
        if (pannamBuyAmt >= 1) {
            money -= pannamCurrentStockPrice * pannamBuyAmt;
            ownedPannamStocks += pannamBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellPannamStocks').click(function () {
        if (ownedPannamStocks > 0) {
            money += pannamCurrentStockPrice - pannamCurrentStockPrice / 10;
            ownedPannamStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPannamStocks10').click(function () {
        if (ownedPannamStocks > 9) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / 10) * 10;
            ownedPannamStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPannamStocks100').click(function () {
        if (ownedPannamStocks > 99) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / 10) * 100;
            ownedPannamStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellPannamStocksAll').click(function () {
        if (ownedPannamStocks > 0) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / 10) * ownedPannamStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPannamStocks = 0;
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);