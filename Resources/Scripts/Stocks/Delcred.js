$(window).load(function () {

    $('#delcredStockDisplayCost').html('$' + delcredCurrentStockPrice.toFixed(2));
    $('#delcredStockSellPrice').html('$' + (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider).toFixed(2));
    $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
    $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - (delcredCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyDelcredStocks').click(function () {

        if (money >= delcredCurrentStockPrice) {
            money -= delcredCurrentStockPrice;
            ownedDelcredStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyDelcredStocks10').click(function () {

        if (money >= delcredCurrentStockPrice * 10) {
            money -= delcredCurrentStockPrice * 10;
            ownedDelcredStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyDelcredStocks100').click(function () {

        if (money >= delcredCurrentStockPrice * 100) {
            money -= delcredCurrentStockPrice * 100;
            ownedDelcredStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyDelcredStocksAll').click(function () {
        var delcredBuyAmt = Math.floor(money / delcredCurrentStockPrice);
        if (delcredBuyAmt >= 1) {
            money -= delcredCurrentStockPrice * delcredBuyAmt;
            ownedDelcredStocks += delcredBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellDelcredStocks').click(function () {
        if (ownedDelcredStocks > 0) {
            money += delcredCurrentStockPrice - delcredCurrentStockPrice / 10;
            ownedDelcredStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDelcredStocks10').click(function () {
        if (ownedDelcredStocks > 9) {
            money += (delcredCurrentStockPrice - delcredCurrentStockPrice / 10) * 10;
            ownedDelcredStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDelcredStocks100').click(function () {
        if (ownedDelcredStocks > 99) {
            money += (delcredCurrentStockPrice - delcredCurrentStockPrice / 10) * 100;
            ownedDelcredStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellDelcredStocksAll').click(function () {
        if (ownedDelcredStocks > 0) {
            money += (delcredCurrentStockPrice - delcredCurrentStockPrice / 10) * ownedDelcredStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelcredStocks = 0;
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delcredSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);