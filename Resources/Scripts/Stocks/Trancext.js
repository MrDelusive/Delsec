$(document).ready(function () {

    $('#trancextStockDisplayCost').html('$' + trancextCurrentStockPrice.toFixed(2));
    $('#trancextStockSellPrice').html('$' + (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider).toFixed(2));
    $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
    $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - (trancextCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyTrancextStocks').click(function () {

        if (money >= trancextCurrentStockPrice) {
            money -= trancextCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedTrancextStocks++;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyTrancextStocks10').click(function () {

        if (money >= trancextCurrentStockPrice * 10) {
            money -= trancextCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedTrancextStocks += 10;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyTrancextStocks100').click(function () {

        if (money >= trancextCurrentStockPrice * 100) {
            money -= trancextCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedTrancextStocks += 100;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyTrancextStocksAll').click(function () {
        var trancextBuyAmt = Math.floor(money / trancextCurrentStockPrice);
        if (trancextBuyAmt >= 1) {
            money -= trancextCurrentStockPrice * trancextBuyAmt;
            localStorage.setItem("money", money);
            ownedTrancextStocks += trancextBuyAmt;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellTrancextStocks').click(function () {
        if (ownedTrancextStocks > 0) {
            money += trancextCurrentStockPrice - trancextCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedTrancextStocks--;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellTrancextStocks10').click(function () {
        if (ownedTrancextStocks > 9) {
            money += (trancextCurrentStockPrice - trancextCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedTrancextStocks -= 10;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellTrancextStocks100').click(function () {
        if (ownedTrancextStocks > 99) {
            money += (trancextCurrentStockPrice - trancextCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedTrancextStocks -= 100;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellTrancextStocksAll').click(function () {
        if (ownedTrancextStocks > 0) {
            money += (trancextCurrentStockPrice - trancextCurrentStockPrice / 10) * ownedTrancextStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTrancextStocks = 0;
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            $('#trancextOwnedStocksDisplay').html(ownedTrancextStocks);
            if (ownedTrancextStocks > 0)
                $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#trancextSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);