$(document).ready(function () {

    $('#reinaccStockDisplayCost').html('$' + reinaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#reinaccCurrentPrice').html('$' + reinaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#reinaccStockSellPrice').html('$' + (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
    $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - (reinaccCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyReinaccStocks').click(function () {

        if (money >= reinaccCurrentStockPrice) {
            money -= reinaccCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedReinaccStocks++;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            reinaccSpentAmt += reinaccCurrentStockPrice;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyReinaccStocks10').click(function () {

        if (money >= reinaccCurrentStockPrice * 10) {
            money -= reinaccCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedReinaccStocks += 10;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            reinaccSpentAmt += reinaccCurrentStockPrice * 10;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyReinaccStocks100').click(function () {

        if (money >= reinaccCurrentStockPrice * 100) {
            money -= reinaccCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedReinaccStocks += 100;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            reinaccSpentAmt += reinaccCurrentStockPrice * 100;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyReinaccStocksAll').click(function () {
        var reinaccBuyAmt = Math.floor(money / reinaccCurrentStockPrice);
        if (reinaccBuyAmt >= 1) {
            money -= reinaccCurrentStockPrice * reinaccBuyAmt;
            localStorage.setItem("money", money);
            ownedReinaccStocks += reinaccBuyAmt;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            reinaccSpentAmt += reinaccCurrentStockPrice * reinaccBuyAmt;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellReinaccStocks').click(function () {
        if (ownedReinaccStocks > 0) {
            money += reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = reinaccSpentAmt / ownedReinaccStocks;
            reinaccSpentAmt -= average;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedReinaccStocks--;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellReinaccStocks10').click(function () {
        if (ownedReinaccStocks > 9) {
            money += (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = reinaccSpentAmt / ownedReinaccStocks;
            reinaccSpentAmt -= average * 10;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedReinaccStocks -= 10;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellReinaccStocks100').click(function () {
        if (ownedReinaccStocks > 99) {
            money += (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = reinaccSpentAmt / ownedReinaccStocks;
            reinaccSpentAmt -= average * 100;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedReinaccStocks -= 100;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellReinaccStocksAll').click(function () {
        if (ownedReinaccStocks > 0) {
            money += (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider) * ownedReinaccStocks;
            localStorage.setItem("money", money);
            reinaccSpentAmt = 0;
            localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);
            $('#reinaccMoneySpent').html('$' + reinaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedReinaccStocks = 0;
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
            $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
            $('#reinaccOwnedStocks').html(ownedReinaccStocks);
            if (ownedReinaccStocks > 0)
                $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#reinaccSellEstimate').html('$0.00');
        }
        return false;
    });
});