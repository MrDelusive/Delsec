$(document).ready(function () {

    $('#turborusStockDisplayCost').html('$' + turborusCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#turborusCurrentPrice').html('$' + turborusCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#turborusStockSellPrice').html('$' + (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
    $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - (turborusCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyTurborusStocks').click(function () {

        if (money >= turborusCurrentStockPrice) {
            money -= turborusCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedTurborusStocks++;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            turborusSpentAmt += turborusCurrentStockPrice;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyTurborusStocks10').click(function () {

        if (money >= turborusCurrentStockPrice * 10) {
            money -= turborusCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedTurborusStocks += 10;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            turborusSpentAmt += turborusCurrentStockPrice * 10;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyTurborusStocks100').click(function () {

        if (money >= turborusCurrentStockPrice * 100) {
            money -= turborusCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedTurborusStocks += 100;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            turborusSpentAmt += turborusCurrentStockPrice * 100;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyTurborusStocksAll').click(function () {
        var turborusBuyAmt = Math.floor(money / turborusCurrentStockPrice);
        if (turborusBuyAmt >= 1) {
            money -= turborusCurrentStockPrice * turborusBuyAmt;
            localStorage.setItem("money", money);
            ownedTurborusStocks += turborusBuyAmt;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            turborusSpentAmt += turborusCurrentStockPrice * turborusBuyAmt;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellTurborusStocks').click(function () {
        if (ownedTurborusStocks > 0) {
            money += turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = turborusSpentAmt / ownedTurborusStocks;
            turborusSpentAmt -= average;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTurborusStocks--;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellTurborusStocks10').click(function () {
        if (ownedTurborusStocks > 9) {
            money += (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = turborusSpentAmt / ownedTurborusStocks;
            turborusSpentAmt -= average * 10;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTurborusStocks -= 10;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellTurborusStocks100').click(function () {
        if (ownedTurborusStocks > 99) {
            money += (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = turborusSpentAmt / ownedTurborusStocks;
            turborusSpentAmt -= average * 100;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTurborusStocks -= 100;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellTurborusStocksAll').click(function () {
        if (ownedTurborusStocks > 0) {
            money += (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider) * ownedTurborusStocks;
            localStorage.setItem("money", money);
            turborusSpentAmt = 0;
            localStorage.setItem("turborusSpentAmt", turborusSpentAmt);
            $('#turborusMoneySpent').html('$' + turborusSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTurborusStocks = 0;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            $('#turborusOwnedStocks').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#turborusSellEstimate').html('$0.00');
        }
        return false;
    });
});