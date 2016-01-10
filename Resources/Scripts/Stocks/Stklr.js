$(document).ready(function () {

    $('#stklrStockDisplayCost').html('$' + stklrCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stklrCurrentPrice').html('$' + stklrCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stklrStockSellPrice').html('$' + (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
    $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - (stklrCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyStklrStocks').click(function () {

        if (money >= stklrCurrentStockPrice) {
            money -= stklrCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedStklrStocks++;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            stklrSpentAmt += stklrCurrentStockPrice;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyStklrStocks10').click(function () {

        if (money >= stklrCurrentStockPrice * 10) {
            money -= stklrCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedStklrStocks += 10;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            stklrSpentAmt += stklrCurrentStockPrice * 10;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyStklrStocks100').click(function () {

        if (money >= stklrCurrentStockPrice * 100) {
            money -= stklrCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedStklrStocks += 100;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            stklrSpentAmt += stklrCurrentStockPrice * 100;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyStklrStocksAll').click(function () {
        var stklrBuyAmt = Math.floor(money / stklrCurrentStockPrice);
        if (stklrBuyAmt >= 1) {
            money -= stklrCurrentStockPrice * stklrBuyAmt;
            localStorage.setItem("money", money);
            ownedStklrStocks += stklrBuyAmt;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            stklrSpentAmt += stklrCurrentStockPrice * stklrBuyAmt;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellStklrStocks').click(function () {
        if (ownedStklrStocks > 0) {
            money += stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = stklrSpentAmt / ownedStklrStocks;
            stklrSpentAmt -= average;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStklrStocks--;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellStklrStocks10').click(function () {
        if (ownedStklrStocks > 9) {
            money += (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = stklrSpentAmt / ownedStklrStocks;
            stklrSpentAmt -= average * 10;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStklrStocks -= 10;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellStklrStocks100').click(function () {
        if (ownedStklrStocks > 99) {
            money += (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = stklrSpentAmt / ownedStklrStocks;
            stklrSpentAmt -= average * 100;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStklrStocks -= 100;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellStklrStocksAll').click(function () {
        if (ownedStklrStocks > 0) {
            money += (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider) * ownedStklrStocks;
            localStorage.setItem("money", money);
            stklrSpentAmt = 0;
            localStorage.setItem("stklrSpentAmt", stklrSpentAmt);
            $('#stklrMoneySpent').html('$' + stklrSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStklrStocks = 0;
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            $('#stklrOwnedStocksDisplay').html(ownedStklrStocks);
            $('#stklrOwnedStocks').html(ownedStklrStocks);
            if (ownedStklrStocks > 0)
                $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stklrSellEstimate').html('$0.00');
        }
        return false;
    });
});