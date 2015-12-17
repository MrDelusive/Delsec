$(window).load(function () {
    $('#btnBuyDelsecStocks').click(function () {

        if (money >= delsecCurrentStockPrice) {
            money = money - delsecCurrentStockPrice;
            ownedDelsecStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / 10)).toFixed(2));
            else
                $('#delsecSellEstimate').html('$0');         
        }
        
        return false;
    });
    $('#btnBuyDelsecStocks10').click(function () {

        if (money >= delsecCurrentStockPrice * 10) {
            money = money - delsecCurrentStockPrice * 10;
            ownedDelsecStocks = ownedDelsecStocks + 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / 10)).toFixed(2));
            else
                $('#delsecSellEstimate').html('$0');          
        }      
        return false;
    });
    $('#btnBuyDelsecStocks100').click(function () {

        if (money >= delsecCurrentStockPrice * 100) {
            money = money - delsecCurrentStockPrice * 100;
            ownedDelsecStocks = ownedDelsecStocks + 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / 10)).toFixed(2));
            else
                $('#delsecSellEstimate').html('$0');
        }
        return false;
    });
    // Always sell amt at 10% lower
    $('#btnSellDelsecStocks').click(function () {
        if (ownedDelsecStocks > 0) {
            money = money + delsecCurrentStockPrice - delsecCurrentStockPrice / 10;
            ownedDelsecStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / 10)).toFixed(2));
            else
                $('#delsecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDelsecStocks10').click(function () {
        if (ownedDelsecStocks > 9) {
            money = money + (delsecCurrentStockPrice - delsecCurrentStockPrice / 10) * 10;
            ownedDelsecStocks = ownedDelsecStocks - 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / 10)).toFixed(2));
            else
                $('#delsecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDelsecStocks100').click(function () {
        if (ownedDelsecStocks > 99) {
            money = money + (delsecCurrentStockPrice - delsecCurrentStockPrice / 10) * 100;
            ownedDelsecStocks = ownedDelsecStocks - 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / 10)).toFixed(2));
            else
                $('#delsecSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellDelsecStocksAll').click(function () {
        if (ownedDelsecStocks > 0) {
            money = money + (delsecCurrentStockPrice - delsecCurrentStockPrice / 10) * ownedDelsecStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));

            ownedDelsecStocks = 0;
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / 10)).toFixed(2));
            else
                $('#delsecSellEstimate').html('$0');
        }
        return false;
    });

})(jQuery);