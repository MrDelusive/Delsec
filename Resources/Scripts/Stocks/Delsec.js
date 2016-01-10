$(document).ready(function () {

    $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delsecCurrentPrice').html('$' + delsecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
    $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyDelsecStocks').click(function () {

        if (money >= delsecCurrentStockPrice) {
            money -= delsecCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedDelsecStocks++;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            delsecSpentAmt += delsecCurrentStockPrice;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyDelsecStocks10').click(function () {

        if (money >= delsecCurrentStockPrice * 10) {
            money -= delsecCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedDelsecStocks += 10;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            delsecSpentAmt += delsecCurrentStockPrice * 10;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyDelsecStocks100').click(function () {

        if (money >= delsecCurrentStockPrice * 100) {
            money -= delsecCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedDelsecStocks += 100;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            delsecSpentAmt += delsecCurrentStockPrice * 100;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyDelsecStocksAll').click(function () {
        var delsecBuyAmt = Math.floor(money / delsecCurrentStockPrice);
        if (delsecBuyAmt >= 1) {
            money -= delsecCurrentStockPrice * delsecBuyAmt;
            localStorage.setItem("money", money);
            ownedDelsecStocks += delsecBuyAmt;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            delsecSpentAmt += delsecCurrentStockPrice * delsecBuyAmt;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellDelsecStocks').click(function () {
        if (ownedDelsecStocks > 0) {
            money += delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = delsecSpentAmt / ownedDelsecStocks;
            delsecSpentAmt -= average;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelsecStocks--;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellDelsecStocks10').click(function () {
        if (ownedDelsecStocks > 9) {
            money += (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = delsecSpentAmt / ownedDelsecStocks;
            delsecSpentAmt -= average * 10;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelsecStocks -= 10;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellDelsecStocks100').click(function () {
        if (ownedDelsecStocks > 99) {
            money += (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = delsecSpentAmt / ownedDelsecStocks;
            delsecSpentAmt -= average * 100;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelsecStocks -= 100;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellDelsecStocksAll').click(function () {
        if (ownedDelsecStocks > 0) {
            money += (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider) * ownedDelsecStocks;
            localStorage.setItem("money", money);
            delsecSpentAmt = 0;
            localStorage.setItem("delsecSpentAmt", delsecSpentAmt);
            $('#delsecMoneySpent').html('$' + delsecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelsecStocks = 0;
            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
            $('#delsecOwnedStocks').html(ownedDelsecStocks);
            if (ownedDelsecStocks > 0)
                $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delsecSellEstimate').html('$0.00');
        }
        return false;
    });
});