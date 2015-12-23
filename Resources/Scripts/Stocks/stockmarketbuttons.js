$(window).load(function () {

    // Delsec //
    $('#btnBuyDelsecStocks').click(function () {

        if (money >= delsecCurrentStockPrice) {
            money -= delsecCurrentStockPrice;
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
            money -= delsecCurrentStockPrice * 10;
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
            money -= delsecCurrentStockPrice * 100;
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
            money += delsecCurrentStockPrice - delsecCurrentStockPrice / 10;
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
            money += (delsecCurrentStockPrice - delsecCurrentStockPrice / 10) * 10;
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
            money += (delsecCurrentStockPrice - delsecCurrentStockPrice / 10) * 100;
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
            money += (delsecCurrentStockPrice - delsecCurrentStockPrice / 10) * ownedDelsecStocks;
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


    // ENTAQ //

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
            ownedEntaqStocks = ownedEntaqStocks + 10;
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
            ownedEntaqStocks = ownedEntaqStocks + 100;
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
            ownedEntaqStocks = ownedEntaqStocks - 10;
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
            ownedEntaqStocks = ownedEntaqStocks - 100;
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