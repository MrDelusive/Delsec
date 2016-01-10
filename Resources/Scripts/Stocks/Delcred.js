$(document).ready(function () {

    $('#delcredStockDisplayCost').html('$' + delcredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delcredCurrentPrice').html('$' + delcredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delcredStockSellPrice').html('$' + (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
    $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - (delcredCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyDelcredStocks').click(function () {

        if (money >= delcredCurrentStockPrice) {
            money -= delcredCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedDelcredStocks++;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            delcredSpentAmt += delcredCurrentStockPrice;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyDelcredStocks10').click(function () {

        if (money >= delcredCurrentStockPrice * 10) {
            money -= delcredCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedDelcredStocks += 10;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            delcredSpentAmt += delcredCurrentStockPrice * 10;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyDelcredStocks100').click(function () {

        if (money >= delcredCurrentStockPrice * 100) {
            money -= delcredCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedDelcredStocks += 100;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            delcredSpentAmt += delcredCurrentStockPrice * 100;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyDelcredStocksAll').click(function () {
        var delcredBuyAmt = Math.floor(money / delcredCurrentStockPrice);
        if (delcredBuyAmt >= 1) {
            money -= delcredCurrentStockPrice * delcredBuyAmt;
            localStorage.setItem("money", money);
            ownedDelcredStocks += delcredBuyAmt;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            delcredSpentAmt += delcredCurrentStockPrice * delcredBuyAmt;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellDelcredStocks').click(function () {
        if (ownedDelcredStocks > 0) {
            money += delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = delcredSpentAmt / ownedDelcredStocks;
            delcredSpentAmt -= average;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelcredStocks--;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellDelcredStocks10').click(function () {
        if (ownedDelcredStocks > 9) {
            money += (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = delcredSpentAmt / ownedDelcredStocks;
            delcredSpentAmt -= average * 10;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelcredStocks -= 10;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellDelcredStocks100').click(function () {
        if (ownedDelcredStocks > 99) {
            money += (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = delcredSpentAmt / ownedDelcredStocks;
            delcredSpentAmt -= average * 100;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelcredStocks -= 100;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellDelcredStocksAll').click(function () {
        if (ownedDelcredStocks > 0) {
            money += (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider) * ownedDelcredStocks;
            localStorage.setItem("money", money);
            delcredSpentAmt = 0;
            localStorage.setItem("delcredSpentAmt", delcredSpentAmt);
            $('#delcredMoneySpent').html('$' + delcredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelcredStocks = 0;
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
            if (ownedDelcredStocks > 0)
                $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delcredSellEstimate').html('$0.00');
        }
        return false;
    });
});