$(window).load(function () {
    $('#btnBuyEntaqStocks').click(function () {

        if (money >= entaqCurrentStockPrice) {
            money -= entaqCurrentStockPrice;
            ownedEntaqStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyEntaqStocks10').click(function () {

        if (money >= entaqCurrentStockPrice * 10) {
            money -= entaqCurrentStockPrice * 10;
            ownedEntaqStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyEntaqStocks100').click(function () {

        if (money >= entaqCurrentStockPrice * 100) {
            money -= entaqCurrentStockPrice * 100;
            ownedEntaqStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyEntaqStocksAll').click(function () {
        var entaqBuyAmt = Math.floor(money / entaqCurrentStockPrice);
        if (entaqBuyAmt >= 1) {
            money -= entaqCurrentStockPrice * entaqBuyAmt;
            ownedEntaqStocks += entaqBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellEntaqStocks').click(function () {
        if (ownedEntaqStocks > 0) {
            money += entaqCurrentStockPrice - entaqCurrentStockPrice / 10;
            ownedEntaqStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellEntaqStocks10').click(function () {
        if (ownedEntaqStocks > 9) {
            money += (entaqCurrentStockPrice - entaqCurrentStockPrice / 10) * 10;
            ownedEntaqStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellEntaqStocks100').click(function () {
        if (ownedEntaqStocks > 99) {
            money += (entaqCurrentStockPrice - entaqCurrentStockPrice / 10) * 100;
            ownedEntaqStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellEntaqStocksAll').click(function () {
        if (ownedEntaqStocks > 0) {
            money += (entaqCurrentStockPrice - entaqCurrentStockPrice / 10) * ownedEntaqStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));

            ownedEntaqStocks = 0;
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / 10)).toFixed(2));
            else
                $('#entaqSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);