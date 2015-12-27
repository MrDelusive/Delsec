$(window).load(function () {
    $('#btnBuyAstorStocks').click(function () {

        if (money >= astorCurrentStockPrice) {
            money -= astorCurrentStockPrice;
            ownedAstorStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyAstorStocks10').click(function () {

        if (money >= astorCurrentStockPrice * 10) {
            money -= astorCurrentStockPrice * 10;
            ownedAstorStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyAstorStocks100').click(function () {

        if (money >= astorCurrentStockPrice * 100) {
            money -= astorCurrentStockPrice * 100;
            ownedAstorStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyAstorStocksAll').click(function () {
        var astorBuyAmt = Math.floor(money / astorCurrentStockPrice);
        if (astorBuyAmt >= 1) {
            money -= astorCurrentStockPrice * astorBuyAmt;
            ownedAstorStocks += astorBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellAstorStocks').click(function () {
        if (ownedAstorStocks > 0) {
            money += astorCurrentStockPrice - astorCurrentStockPrice / 10;
            ownedAstorStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAstorStocks10').click(function () {
        if (ownedAstorStocks > 9) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / 10) * 10;
            ownedAstorStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAstorStocks100').click(function () {
        if (ownedAstorStocks > 99) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / 10) * 100;
            ownedAstorStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellAstorStocksAll').click(function () {
        if (ownedAstorStocks > 0) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / 10) * ownedAstorStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAstorStocks = 0;
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / 10)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);