$(document).ready(function () {

    $('#extankStockDisplayCost').html('$' + extankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#extankCurrentPrice').html('$' + extankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#extankStockSellPrice').html('$' + (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
    $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - (extankCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyExtankStocks').click(function () {

        if (money >= extankCurrentStockPrice) {
            money -= extankCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedExtankStocks++;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            extankSpentAmt += extankCurrentStockPrice;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyExtankStocks10').click(function () {

        if (money >= extankCurrentStockPrice * 10) {
            money -= extankCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedExtankStocks += 10;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            extankSpentAmt += extankCurrentStockPrice * 10;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyExtankStocks100').click(function () {

        if (money >= extankCurrentStockPrice * 100) {
            money -= extankCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedExtankStocks += 100;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            extankSpentAmt += extankCurrentStockPrice * 100;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyExtankStocksAll').click(function () {
        var extankBuyAmt = Math.floor(money / extankCurrentStockPrice);
        if (extankBuyAmt >= 1) {
            money -= extankCurrentStockPrice * extankBuyAmt;
            localStorage.setItem("money", money);
            ownedExtankStocks += extankBuyAmt;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            extankSpentAmt += extankCurrentStockPrice * extankBuyAmt;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellExtankStocks').click(function () {
        if (ownedExtankStocks > 0) {
            money += extankCurrentStockPrice - extankCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = extankSpentAmt / ownedExtankStocks;
            extankSpentAmt -= average;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExtankStocks--;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellExtankStocks10').click(function () {
        if (ownedExtankStocks > 9) {
            money += (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = extankSpentAmt / ownedExtankStocks;
            extankSpentAmt -= average * 10;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExtankStocks -= 10;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellExtankStocks100').click(function () {
        if (ownedExtankStocks > 99) {
            money += (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = extankSpentAmt / ownedExtankStocks;
            extankSpentAmt -= average * 100;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExtankStocks -= 100;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellExtankStocksAll').click(function () {
        if (ownedExtankStocks > 0) {
            money += (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider) * ownedExtankStocks;
            localStorage.setItem("money", money);
            extankSpentAmt = 0;
            localStorage.setItem("extankSpentAmt", extankSpentAmt);
            $('#extankMoneySpent').html('$' + extankSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExtankStocks = 0;
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            $('#extankOwnedStocksDisplay').html(ownedExtankStocks);
            $('#extankOwnedStocks').html(ownedExtankStocks);
            if (ownedExtankStocks > 0)
                $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#extankSellEstimate').html('$0.00');
        }
        return false;
    });
});