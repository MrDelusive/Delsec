$(document).ready(function () {

    $('#PLATStockDisplayCost').html('$' + PLATCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#PLATCurrentPrice').html('$' + PLATCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#PLATStockSellPrice').html('$' + (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
    $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - (PLATCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyPLATStocks').click(function () {

        if (money >= PLATCurrentStockPrice) {
            money -= PLATCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedPLATStocks++;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            PLATSpentAmt += PLATCurrentStockPrice;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyPLATStocks10').click(function () {

        if (money >= PLATCurrentStockPrice * 10) {
            money -= PLATCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedPLATStocks += 10;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            PLATSpentAmt += PLATCurrentStockPrice * 10;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyPLATStocks100').click(function () {

        if (money >= PLATCurrentStockPrice * 100) {
            money -= PLATCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedPLATStocks += 100;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            PLATSpentAmt += PLATCurrentStockPrice * 100;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyPLATStocksAll').click(function () {
        var PLATBuyAmt = Math.floor(money / PLATCurrentStockPrice);
        if (PLATBuyAmt >= 1) {
            money -= PLATCurrentStockPrice * PLATBuyAmt;
            localStorage.setItem("money", money);
            ownedPLATStocks += PLATBuyAmt;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            PLATSpentAmt += PLATCurrentStockPrice * PLATBuyAmt;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellPLATStocks').click(function () {
        if (ownedPLATStocks > 0) {
            money += PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = PLATSpentAmt / ownedPLATStocks;
            PLATSpentAmt -= average;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPLATStocks--;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellPLATStocks10').click(function () {
        if (ownedPLATStocks > 9) {
            money += (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = PLATSpentAmt / ownedPLATStocks;
            PLATSpentAmt -= average * 10;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPLATStocks -= 10;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellPLATStocks100').click(function () {
        if (ownedPLATStocks > 99) {
            money += (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = PLATSpentAmt / ownedPLATStocks;
            PLATSpentAmt -= average * 100;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPLATStocks -= 100;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellPLATStocksAll').click(function () {
        if (ownedPLATStocks > 0) {
            money += (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider) * ownedPLATStocks;
            localStorage.setItem("money", money);
            PLATSpentAmt = 0;
            localStorage.setItem("PLATSpentAmt", PLATSpentAmt);
            $('#PLATMoneySpent').html('$' + PLATSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPLATStocks = 0;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#PLATSellEstimate').html('$0.00');
        }
        return false;
    });
});