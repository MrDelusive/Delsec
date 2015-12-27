$(window).load(function () {

    $('#scatterStockDisplayCost').html('$' + scatterCurrentStockPrice.toFixed(2));
    $('#scatterStockSellPrice').html('$' + (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider).toFixed(2));
    $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
    $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - (scatterCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyScatterStocks').click(function () {

        if (money >= scatterCurrentStockPrice) {
            money -= scatterCurrentStockPrice;
            ownedScatterStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyScatterStocks10').click(function () {

        if (money >= scatterCurrentStockPrice * 10) {
            money -= scatterCurrentStockPrice * 10;
            ownedScatterStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyScatterStocks100').click(function () {

        if (money >= scatterCurrentStockPrice * 100) {
            money -= scatterCurrentStockPrice * 100;
            ownedScatterStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyScatterStocksAll').click(function () {
        var scatterBuyAmt = Math.floor(money / scatterCurrentStockPrice);
        if (scatterBuyAmt >= 1) {
            money -= scatterCurrentStockPrice * scatterBuyAmt;
            ownedScatterStocks += scatterBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellScatterStocks').click(function () {
        if (ownedScatterStocks > 0) {
            money += scatterCurrentStockPrice - scatterCurrentStockPrice / 10;
            ownedScatterStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellScatterStocks10').click(function () {
        if (ownedScatterStocks > 9) {
            money += (scatterCurrentStockPrice - scatterCurrentStockPrice / 10) * 10;
            ownedScatterStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellScatterStocks100').click(function () {
        if (ownedScatterStocks > 99) {
            money += (scatterCurrentStockPrice - scatterCurrentStockPrice / 10) * 100;
            ownedScatterStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellScatterStocksAll').click(function () {
        if (ownedScatterStocks > 0) {
            money += (scatterCurrentStockPrice - scatterCurrentStockPrice / 10) * ownedScatterStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedScatterStocks = 0;
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#scatterSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);