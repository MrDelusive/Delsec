$(window).load(function () {

    $('#griffonbankStockDisplayCost').html('$' + griffonbankCurrentStockPrice.toFixed(2));
    $('#griffonbankStockSellPrice').html('$' + (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider).toFixed(2));
    $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
    $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - (griffonbankCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyGriffonbankStocks').click(function () {

        if (money >= griffonbankCurrentStockPrice) {
            money -= griffonbankCurrentStockPrice;
            ownedGriffonbankStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyGriffonbankStocks10').click(function () {

        if (money >= griffonbankCurrentStockPrice * 10) {
            money -= griffonbankCurrentStockPrice * 10;
            ownedGriffonbankStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyGriffonbankStocks100').click(function () {

        if (money >= griffonbankCurrentStockPrice * 100) {
            money -= griffonbankCurrentStockPrice * 100;
            ownedGriffonbankStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyGriffonbankStocksAll').click(function () {
        var griffonbankBuyAmt = Math.floor(money / griffonbankCurrentStockPrice);
        if (griffonbankBuyAmt >= 1) {
            money -= griffonbankCurrentStockPrice * griffonbankBuyAmt;
            ownedGriffonbankStocks += griffonbankBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellGriffonbankStocks').click(function () {
        if (ownedGriffonbankStocks > 0) {
            money += griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / 10;
            ownedGriffonbankStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellGriffonbankStocks10').click(function () {
        if (ownedGriffonbankStocks > 9) {
            money += (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / 10) * 10;
            ownedGriffonbankStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellGriffonbankStocks100').click(function () {
        if (ownedGriffonbankStocks > 99) {
            money += (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / 10) * 100;
            ownedGriffonbankStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellGriffonbankStocksAll').click(function () {
        if (ownedGriffonbankStocks > 0) {
            money += (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / 10) * ownedGriffonbankStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedGriffonbankStocks = 0;
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#griffonbankSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);