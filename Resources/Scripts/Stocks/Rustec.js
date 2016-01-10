$(document).ready(function () {

    $('#rustecStockDisplayCost').html('$' + rustecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#rustecCurrentPrice').html('$' + rustecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#rustecStockSellPrice').html('$' + (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
    $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - (rustecCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyRustecStocks').click(function () {

        if (money >= rustecCurrentStockPrice) {
            money -= rustecCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedRustecStocks++;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            rustecSpentAmt += rustecCurrentStockPrice;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyRustecStocks10').click(function () {

        if (money >= rustecCurrentStockPrice * 10) {
            money -= rustecCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedRustecStocks += 10;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            rustecSpentAmt += rustecCurrentStockPrice * 10;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyRustecStocks100').click(function () {

        if (money >= rustecCurrentStockPrice * 100) {
            money -= rustecCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedRustecStocks += 100;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            rustecSpentAmt += rustecCurrentStockPrice * 100;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyRustecStocksAll').click(function () {
        var rustecBuyAmt = Math.floor(money / rustecCurrentStockPrice);
        if (rustecBuyAmt >= 1) {
            money -= rustecCurrentStockPrice * rustecBuyAmt;
            localStorage.setItem("money", money);
            ownedRustecStocks += rustecBuyAmt;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            rustecSpentAmt += rustecCurrentStockPrice * rustecBuyAmt;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellRustecStocks').click(function () {
        if (ownedRustecStocks > 0) {
            money += rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = rustecSpentAmt / ownedRustecStocks;
            rustecSpentAmt -= average;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRustecStocks--;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellRustecStocks10').click(function () {
        if (ownedRustecStocks > 9) {
            money += (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = rustecSpentAmt / ownedRustecStocks;
            rustecSpentAmt -= average * 10;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRustecStocks -= 10;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellRustecStocks100').click(function () {
        if (ownedRustecStocks > 99) {
            money += (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = rustecSpentAmt / ownedRustecStocks;
            rustecSpentAmt -= average * 100;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRustecStocks -= 100;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellRustecStocksAll').click(function () {
        if (ownedRustecStocks > 0) {
            money += (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider) * ownedRustecStocks;
            localStorage.setItem("money", money);
            rustecSpentAmt = 0;
            localStorage.setItem("rustecSpentAmt", rustecSpentAmt);
            $('#rustecMoneySpent').html('$' + rustecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRustecStocks = 0;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            $('#rustecOwnedStocks').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#rustecSellEstimate').html('$0.00');
        }
        return false;
    });
});