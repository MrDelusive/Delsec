$(window).load(function () {

    $('#exxocredStockDisplayCost').html('$' + exxocredCurrentStockPrice.toFixed(2));
    $('#exxocredStockSellPrice').html('$' + (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider).toFixed(2));
    $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
    $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - (exxocredCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyExxocredStocks').click(function () {

        if (money >= exxocredCurrentStockPrice) {
            money -= exxocredCurrentStockPrice;
            ownedExxocredStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyExxocredStocks10').click(function () {

        if (money >= exxocredCurrentStockPrice * 10) {
            money -= exxocredCurrentStockPrice * 10;
            ownedExxocredStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyExxocredStocks100').click(function () {

        if (money >= exxocredCurrentStockPrice * 100) {
            money -= exxocredCurrentStockPrice * 100;
            ownedExxocredStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyExxocredStocksAll').click(function () {
        var exxocredBuyAmt = Math.floor(money / exxocredCurrentStockPrice);
        if (exxocredBuyAmt >= 1) {
            money -= exxocredCurrentStockPrice * exxocredBuyAmt;
            ownedExxocredStocks += exxocredBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellExxocredStocks').click(function () {
        if (ownedExxocredStocks > 0) {
            money += exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10;
            ownedExxocredStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExxocredStocks10').click(function () {
        if (ownedExxocredStocks > 9) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10) * 10;
            ownedExxocredStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExxocredStocks100').click(function () {
        if (ownedExxocredStocks > 99) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10) * 100;
            ownedExxocredStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellExxocredStocksAll').click(function () {
        if (ownedExxocredStocks > 0) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10) * ownedExxocredStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExxocredStocks = 0;
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);