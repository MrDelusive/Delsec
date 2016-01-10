$(document).ready(function () {

    $('#griffonbankStockDisplayCost').html('$' + griffonbankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#griffonbankCurrentPrice').html('$' + griffonbankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#griffonbankStockSellPrice').html('$' + (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
    $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - (griffonbankCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyGriffonbankStocks').click(function () {

        if (money >= griffonbankCurrentStockPrice) {
            money -= griffonbankCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedGriffonbankStocks++;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            griffonbankSpentAmt += griffonbankCurrentStockPrice;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyGriffonbankStocks10').click(function () {

        if (money >= griffonbankCurrentStockPrice * 10) {
            money -= griffonbankCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedGriffonbankStocks += 10;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            griffonbankSpentAmt += griffonbankCurrentStockPrice * 10;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyGriffonbankStocks100').click(function () {

        if (money >= griffonbankCurrentStockPrice * 100) {
            money -= griffonbankCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedGriffonbankStocks += 100;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            griffonbankSpentAmt += griffonbankCurrentStockPrice * 100;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyGriffonbankStocksAll').click(function () {
        var griffonbankBuyAmt = Math.floor(money / griffonbankCurrentStockPrice);
        if (griffonbankBuyAmt >= 1) {
            money -= griffonbankCurrentStockPrice * griffonbankBuyAmt;
            localStorage.setItem("money", money);
            ownedGriffonbankStocks += griffonbankBuyAmt;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            griffonbankSpentAmt += griffonbankCurrentStockPrice * griffonbankBuyAmt;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellGriffonbankStocks').click(function () {
        if (ownedGriffonbankStocks > 0) {
            money += griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = griffonbankSpentAmt / ownedGriffonbankStocks;
            griffonbankSpentAmt -= average;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedGriffonbankStocks--;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellGriffonbankStocks10').click(function () {
        if (ownedGriffonbankStocks > 9) {
            money += (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = griffonbankSpentAmt / ownedGriffonbankStocks;
            griffonbankSpentAmt -= average * 10;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedGriffonbankStocks -= 10;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellGriffonbankStocks100').click(function () {
        if (ownedGriffonbankStocks > 99) {
            money += (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = griffonbankSpentAmt / ownedGriffonbankStocks;
            griffonbankSpentAmt -= average * 100;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedGriffonbankStocks -= 100;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellGriffonbankStocksAll').click(function () {
        if (ownedGriffonbankStocks > 0) {
            money += (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider) * ownedGriffonbankStocks;
            localStorage.setItem("money", money);
            griffonbankSpentAmt = 0;
            localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);
            $('#griffonbankMoneySpent').html('$' + griffonbankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedGriffonbankStocks = 0;
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            $('#griffonbankOwnedStocksDisplay').html(ownedGriffonbankStocks);
            if (ownedGriffonbankStocks > 0)
                $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#griffonbankSellEstimate').html('$0.00');
        }
        return false;
    });
});