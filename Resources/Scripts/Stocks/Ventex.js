$(document).ready(function () {

    $('#ventexStockDisplayCost').html('$' + ventexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ventexCurrentPrice').html('$' + ventexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ventexStockSellPrice').html('$' + (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
    $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - (ventexCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyVentexStocks').click(function () {

        if (money >= ventexCurrentStockPrice) {
            money -= ventexCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedVentexStocks++;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            ventexSpentAmt += ventexCurrentStockPrice;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyVentexStocks10').click(function () {

        if (money >= ventexCurrentStockPrice * 10) {
            money -= ventexCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedVentexStocks += 10;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            ventexSpentAmt += ventexCurrentStockPrice * 10;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyVentexStocks100').click(function () {

        if (money >= ventexCurrentStockPrice * 100) {
            money -= ventexCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedVentexStocks += 100;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            ventexSpentAmt += ventexCurrentStockPrice * 100;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyVentexStocksAll').click(function () {
        var ventexBuyAmt = Math.floor(money / ventexCurrentStockPrice);
        if (ventexBuyAmt >= 1) {
            money -= ventexCurrentStockPrice * ventexBuyAmt;
            localStorage.setItem("money", money);
            ownedVentexStocks += ventexBuyAmt;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            ventexSpentAmt += ventexCurrentStockPrice * ventexBuyAmt;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellVentexStocks').click(function () {
        if (ownedVentexStocks > 0) {
            money += ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = ventexSpentAmt / ownedVentexStocks;
            ventexSpentAmt -= average;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedVentexStocks--;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellVentexStocks10').click(function () {
        if (ownedVentexStocks > 9) {
            money += (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = ventexSpentAmt / ownedVentexStocks;
            ventexSpentAmt -= average * 10;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedVentexStocks -= 10;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellVentexStocks100').click(function () {
        if (ownedVentexStocks > 99) {
            money += (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = ventexSpentAmt / ownedVentexStocks;
            ventexSpentAmt -= average * 100;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedVentexStocks -= 100;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellVentexStocksAll').click(function () {
        if (ownedVentexStocks > 0) {
            money += (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider) * ownedVentexStocks;
            localStorage.setItem("money", money);
            ventexSpentAmt = 0;
            localStorage.setItem("ventexSpentAmt", ventexSpentAmt);
            $('#ventexMoneySpent').html('$' + ventexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedVentexStocks = 0;
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
            if (ownedVentexStocks > 0)
                $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ventexSellEstimate').html('$0.00');
        }
        return false;
    });
});