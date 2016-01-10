$(document).ready(function () {

    $('#pannamStockDisplayCost').html('$' + pannamCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pannamCurrentPrice').html('$' + pannamCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pannamStockSellPrice').html('$' + (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
    $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - (pannamCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyPannamStocks').click(function () {

        if (money >= pannamCurrentStockPrice) {
            money -= pannamCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedPannamStocks++;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            pannamSpentAmt += pannamCurrentStockPrice;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyPannamStocks10').click(function () {

        if (money >= pannamCurrentStockPrice * 10) {
            money -= pannamCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedPannamStocks += 10;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            pannamSpentAmt += pannamCurrentStockPrice * 10;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyPannamStocks100').click(function () {

        if (money >= pannamCurrentStockPrice * 100) {
            money -= pannamCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedPannamStocks += 100;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            pannamSpentAmt += pannamCurrentStockPrice * 100;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyPannamStocksAll').click(function () {
        var pannamBuyAmt = Math.floor(money / pannamCurrentStockPrice);
        if (pannamBuyAmt >= 1) {
            money -= pannamCurrentStockPrice * pannamBuyAmt;
            localStorage.setItem("money", money);
            ownedPannamStocks += pannamBuyAmt;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            pannamSpentAmt += pannamCurrentStockPrice * pannamBuyAmt;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellPannamStocks').click(function () {
        if (ownedPannamStocks > 0) {
            money += pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = pannamSpentAmt / ownedPannamStocks;
            pannamSpentAmt -= average;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPannamStocks--;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellPannamStocks10').click(function () {
        if (ownedPannamStocks > 9) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = pannamSpentAmt / ownedPannamStocks;
            pannamSpentAmt -= average * 10;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPannamStocks -= 10;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellPannamStocks100').click(function () {
        if (ownedPannamStocks > 99) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = pannamSpentAmt / ownedPannamStocks;
            pannamSpentAmt -= average * 100;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPannamStocks -= 100;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellPannamStocksAll').click(function () {
        if (ownedPannamStocks > 0) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider) * ownedPannamStocks;
            localStorage.setItem("money", money);
            pannamSpentAmt = 0;
            localStorage.setItem("pannamSpentAmt", pannamSpentAmt);
            $('#pannamMoneySpent').html('$' + pannamSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPannamStocks = 0;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            $('#pannamOwnedStocks').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pannamSellEstimate').html('$0.00');
        }
        return false;
    });
});