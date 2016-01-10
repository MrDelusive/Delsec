$(document).ready(function () {

    $('#exodmptStockDisplayCost').html('$' + exodmptCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exodmptCurrentPrice').html('$' + exodmptCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exodmptStockSellPrice').html('$' + (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
    $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - (exodmptCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyExodmptStocks').click(function () {

        if (money >= exodmptCurrentStockPrice) {
            money -= exodmptCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedExodmptStocks++;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            exodmptSpentAmt += exodmptCurrentStockPrice;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyExodmptStocks10').click(function () {

        if (money >= exodmptCurrentStockPrice * 10) {
            money -= exodmptCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedExodmptStocks += 10;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            exodmptSpentAmt += exodmptCurrentStockPrice * 10;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyExodmptStocks100').click(function () {

        if (money >= exodmptCurrentStockPrice * 100) {
            money -= exodmptCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedExodmptStocks += 100;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            exodmptSpentAmt += exodmptCurrentStockPrice * 100;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyExodmptStocksAll').click(function () {
        var exodmptBuyAmt = Math.floor(money / exodmptCurrentStockPrice);
        if (exodmptBuyAmt >= 1) {
            money -= exodmptCurrentStockPrice * exodmptBuyAmt;
            localStorage.setItem("money", money);
            ownedExodmptStocks += exodmptBuyAmt;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            exodmptSpentAmt += exodmptCurrentStockPrice * exodmptBuyAmt;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellExodmptStocks').click(function () {
        if (ownedExodmptStocks > 0) {
            money += exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = exodmptSpentAmt / ownedExodmptStocks;
            exodmptSpentAmt -= average;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExodmptStocks--;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellExodmptStocks10').click(function () {
        if (ownedExodmptStocks > 9) {
            money += (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = exodmptSpentAmt / ownedExodmptStocks;
            exodmptSpentAmt -= average * 10;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExodmptStocks -= 10;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellExodmptStocks100').click(function () {
        if (ownedExodmptStocks > 99) {
            money += (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = exodmptSpentAmt / ownedExodmptStocks;
            exodmptSpentAmt -= average * 100;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExodmptStocks -= 100;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellExodmptStocksAll').click(function () {
        if (ownedExodmptStocks > 0) {
            money += (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider) * ownedExodmptStocks;
            localStorage.setItem("money", money);
            exodmptSpentAmt = 0;
            localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);
            $('#exodmptMoneySpent').html('$' + exodmptSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExodmptStocks = 0;
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            $('#exodmptOwnedStocksDisplay').html(ownedExodmptStocks);
            $('#exodmptOwnedStocks').html(ownedExodmptStocks);
            if (ownedExodmptStocks > 0)
                $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exodmptSellEstimate').html('$0.00');
        }
        return false;
    });
});