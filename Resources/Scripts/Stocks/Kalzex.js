$(document).ready(function () {

    $('#kalzexStockDisplayCost').html('$' + kalzexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#kalzexCurrentPrice').html('$' + kalzexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#kalzexStockSellPrice').html('$' + (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
    $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - (kalzexCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyKalzexStocks').click(function () {

        if (money >= kalzexCurrentStockPrice) {
            money -= kalzexCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedKalzexStocks++;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            kalzexSpentAmt += kalzexCurrentStockPrice;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyKalzexStocks10').click(function () {

        if (money >= kalzexCurrentStockPrice * 10) {
            money -= kalzexCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedKalzexStocks += 10;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            kalzexSpentAmt += kalzexCurrentStockPrice * 10;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyKalzexStocks100').click(function () {

        if (money >= kalzexCurrentStockPrice * 100) {
            money -= kalzexCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedKalzexStocks += 100;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            kalzexSpentAmt += kalzexCurrentStockPrice * 100;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyKalzexStocksAll').click(function () {
        var kalzexBuyAmt = Math.floor(money / kalzexCurrentStockPrice);
        if (kalzexBuyAmt >= 1) {
            money -= kalzexCurrentStockPrice * kalzexBuyAmt;
            localStorage.setItem("money", money);
            ownedKalzexStocks += kalzexBuyAmt;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            kalzexSpentAmt += kalzexCurrentStockPrice * kalzexBuyAmt;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellKalzexStocks').click(function () {
        if (ownedKalzexStocks > 0) {
            money += kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = kalzexSpentAmt / ownedKalzexStocks;
            kalzexSpentAmt -= average;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKalzexStocks--;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellKalzexStocks10').click(function () {
        if (ownedKalzexStocks > 9) {
            money += (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = kalzexSpentAmt / ownedKalzexStocks;
            kalzexSpentAmt -= average * 10;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKalzexStocks -= 10;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellKalzexStocks100').click(function () {
        if (ownedKalzexStocks > 99) {
            money += (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = kalzexSpentAmt / ownedKalzexStocks;
            kalzexSpentAmt -= average * 100;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKalzexStocks -= 100;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellKalzexStocksAll').click(function () {
        if (ownedKalzexStocks > 0) {
            money += (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider) * ownedKalzexStocks;
            localStorage.setItem("money", money);
            kalzexSpentAmt = 0;
            localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);
            $('#kalzexMoneySpent').html('$' + kalzexSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKalzexStocks = 0;
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            $('#kalzexOwnedStocksDisplay').html(ownedKalzexStocks);
            $('#kalzexOwnedStocks').html(ownedKalzexStocks);
            if (ownedKalzexStocks > 0)
                $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#kalzexSellEstimate').html('$0.00');
        }
        return false;
    });
});