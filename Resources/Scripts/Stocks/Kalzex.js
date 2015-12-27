$(window).load(function () {

    $('#kalzexStockDisplayCost').html('$' + kalzexCurrentStockPrice.toFixed(2));
    $('#kalzexStockSellPrice').html('$' + (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider).toFixed(2));
    $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
    $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - (kalzexCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyKalzexStocks').click(function () {

        if (money >= kalzexCurrentStockPrice) {
            money -= kalzexCurrentStockPrice;
            ownedKalzexStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyKalzexStocks10').click(function () {

        if (money >= kalzexCurrentStockPrice * 10) {
            money -= kalzexCurrentStockPrice * 10;
            ownedKalzexStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyKalzexStocks100').click(function () {

        if (money >= kalzexCurrentStockPrice * 100) {
            money -= kalzexCurrentStockPrice * 100;
            ownedKalzexStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyKalzexStocksAll').click(function () {
        var kalzexBuyAmt = Math.floor(money / kalzexCurrentStockPrice);
        if (kalzexBuyAmt >= 1) {
            money -= kalzexCurrentStockPrice * kalzexBuyAmt;
            ownedKalzexStocks += kalzexBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellKalzexStocks').click(function () {
        if (ownedKalzexStocks > 0) {
            money += kalzexCurrentStockPrice - kalzexCurrentStockPrice / 10;
            ownedKalzexStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellKalzexStocks10').click(function () {
        if (ownedKalzexStocks > 9) {
            money += (kalzexCurrentStockPrice - kalzexCurrentStockPrice / 10) * 10;
            ownedKalzexStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellKalzexStocks100').click(function () {
        if (ownedKalzexStocks > 99) {
            money += (kalzexCurrentStockPrice - kalzexCurrentStockPrice / 10) * 100;
            ownedKalzexStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellKalzexStocksAll').click(function () {
        if (ownedKalzexStocks > 0) {
            money += (kalzexCurrentStockPrice - kalzexCurrentStockPrice / 10) * ownedKalzexStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKalzexStocks = 0;
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#kalzexSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);