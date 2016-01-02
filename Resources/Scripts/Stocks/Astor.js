$(document).ready(function () {

    $('#astorStockDisplayCost').html('$' + astorCurrentStockPrice.toFixed(2));
    $('#astorStockSellPrice').html('$' + (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider).toFixed(2));
    $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
    $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - (astorCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyAstorStocks').click(function () {      
        if (money >= astorCurrentStockPrice) {
            money -= astorCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedAstorStocks++;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyAstorStocks10').click(function () {

        if (money >= astorCurrentStockPrice * 10) {
            money -= astorCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedAstorStocks += 10;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyAstorStocks100').click(function () {

        if (money >= astorCurrentStockPrice * 100) {
            money -= astorCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedAstorStocks += 100;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyAstorStocksAll').click(function () {
        var astorBuyAmt = Math.floor(money / astorCurrentStockPrice);
        if (astorBuyAmt >= 1) {
            money -= astorCurrentStockPrice * astorBuyAmt;
            localStorage.setItem("money", money);
            ownedAstorStocks += astorBuyAmt;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellAstorStocks').click(function () {
        if (ownedAstorStocks > 0) {
            money += astorCurrentStockPrice - astorCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedAstorStocks--;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAstorStocks10').click(function () {
        if (ownedAstorStocks > 9) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedAstorStocks -= 10;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAstorStocks100').click(function () {
        if (ownedAstorStocks > 99) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedAstorStocks -= 100;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellAstorStocksAll').click(function () {
        if (ownedAstorStocks > 0) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / 10) * ownedAstorStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAstorStocks = 0;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#astorSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);