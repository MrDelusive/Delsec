$(window).load(function () {

    $('#stuccorStockDisplayCost').html('$' + stuccorCurrentStockPrice.toFixed(2));
    $('#stuccorStockSellPrice').html('$' + (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider).toFixed(2));
    $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
    $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - (stuccorCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyStuccorStocks').click(function () {

        if (money >= stuccorCurrentStockPrice) {
            money -= stuccorCurrentStockPrice;
            ownedStuccorStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyStuccorStocks10').click(function () {

        if (money >= stuccorCurrentStockPrice * 10) {
            money -= stuccorCurrentStockPrice * 10;
            ownedStuccorStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyStuccorStocks100').click(function () {

        if (money >= stuccorCurrentStockPrice * 100) {
            money -= stuccorCurrentStockPrice * 100;
            ownedStuccorStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyStuccorStocksAll').click(function () {
        var stuccorBuyAmt = Math.floor(money / stuccorCurrentStockPrice);
        if (stuccorBuyAmt >= 1) {
            money -= stuccorCurrentStockPrice * stuccorBuyAmt;
            ownedStuccorStocks += stuccorBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellStuccorStocks').click(function () {
        if (ownedStuccorStocks > 0) {
            money += stuccorCurrentStockPrice - stuccorCurrentStockPrice / 10;
            ownedStuccorStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellStuccorStocks10').click(function () {
        if (ownedStuccorStocks > 9) {
            money += (stuccorCurrentStockPrice - stuccorCurrentStockPrice / 10) * 10;
            ownedStuccorStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellStuccorStocks100').click(function () {
        if (ownedStuccorStocks > 99) {
            money += (stuccorCurrentStockPrice - stuccorCurrentStockPrice / 10) * 100;
            ownedStuccorStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellStuccorStocksAll').click(function () {
        if (ownedStuccorStocks > 0) {
            money += (stuccorCurrentStockPrice - stuccorCurrentStockPrice / 10) * ownedStuccorStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStuccorStocks = 0;
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#stuccorSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);