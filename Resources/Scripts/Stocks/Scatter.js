$(document).ready(function () {

    $('#scatterStockDisplayCost').html('$' + scatterCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#scatterCurrentPrice').html('$' + scatterCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#scatterStockSellPrice').html('$' + (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
    $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - (scatterCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyScatterStocks').click(function () {

        if (money >= scatterCurrentStockPrice) {
            money -= scatterCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedScatterStocks++;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            scatterSpentAmt += scatterCurrentStockPrice;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyScatterStocks10').click(function () {

        if (money >= scatterCurrentStockPrice * 10) {
            money -= scatterCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedScatterStocks += 10;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            scatterSpentAmt += scatterCurrentStockPrice * 10;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyScatterStocks100').click(function () {

        if (money >= scatterCurrentStockPrice * 100) {
            money -= scatterCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedScatterStocks += 100;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            scatterSpentAmt += scatterCurrentStockPrice * 100;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyScatterStocksAll').click(function () {
        var scatterBuyAmt = Math.floor(money / scatterCurrentStockPrice);
        if (scatterBuyAmt >= 1) {
            money -= scatterCurrentStockPrice * scatterBuyAmt;
            localStorage.setItem("money", money);
            ownedScatterStocks += scatterBuyAmt;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            scatterSpentAmt += scatterCurrentStockPrice * scatterBuyAmt;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellScatterStocks').click(function () {
        if (ownedScatterStocks > 0) {
            money += scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = scatterSpentAmt / ownedScatterStocks;
            scatterSpentAmt -= average;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedScatterStocks--;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellScatterStocks10').click(function () {
        if (ownedScatterStocks > 9) {
            money += (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = scatterSpentAmt / ownedScatterStocks;
            scatterSpentAmt -= average * 10;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedScatterStocks -= 10;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellScatterStocks100').click(function () {
        if (ownedScatterStocks > 99) {
            money += (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = scatterSpentAmt / ownedScatterStocks;
            scatterSpentAmt -= average * 100;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedScatterStocks -= 100;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellScatterStocksAll').click(function () {
        if (ownedScatterStocks > 0) {
            money += (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider) * ownedScatterStocks;
            localStorage.setItem("money", money);
            scatterSpentAmt = 0;
            localStorage.setItem("scatterSpentAmt", scatterSpentAmt);
            $('#scatterMoneySpent').html('$' + scatterSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedScatterStocks = 0;
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            $('#scatterOwnedStocksDisplay').html(ownedScatterStocks);
            $('#scatterOwnedStocks').html(ownedScatterStocks);
            if (ownedScatterStocks > 0)
                $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#scatterSellEstimate').html('$0.00');
        }
        return false;
    });
});