$(window).load(function () {

    $('#KELVStockDisplayCost').html('$' + KELVCurrentStockPrice.toFixed(2));
    $('#KELVStockSellPrice').html('$' + (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider).toFixed(2));
    $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
    $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - (KELVCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyKELVStocks').click(function () {

        if (money >= KELVCurrentStockPrice) {
            money -= KELVCurrentStockPrice;
            ownedKELVStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyKELVStocks10').click(function () {

        if (money >= KELVCurrentStockPrice * 10) {
            money -= KELVCurrentStockPrice * 10;
            ownedKELVStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyKELVStocks100').click(function () {

        if (money >= KELVCurrentStockPrice * 100) {
            money -= KELVCurrentStockPrice * 100;
            ownedKELVStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyKELVStocksAll').click(function () {
        var KELVBuyAmt = Math.floor(money / KELVCurrentStockPrice);
        if (KELVBuyAmt >= 1) {
            money -= KELVCurrentStockPrice * KELVBuyAmt;
            ownedKELVStocks += KELVBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellKELVStocks').click(function () {
        if (ownedKELVStocks > 0) {
            money += KELVCurrentStockPrice - KELVCurrentStockPrice / 10;
            ownedKELVStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellKELVStocks10').click(function () {
        if (ownedKELVStocks > 9) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / 10) * 10;
            ownedKELVStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellKELVStocks100').click(function () {
        if (ownedKELVStocks > 99) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / 10) * 100;
            ownedKELVStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellKELVStocksAll').click(function () {
        if (ownedKELVStocks > 0) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / 10) * ownedKELVStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKELVStocks = 0;
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);