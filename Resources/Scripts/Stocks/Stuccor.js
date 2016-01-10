$(document).ready(function () {

    $('#stuccorStockDisplayCost').html('$' + stuccorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stuccorCurrentPrice').html('$' + stuccorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stuccorStockSellPrice').html('$' + (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
    $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - (stuccorCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyStuccorStocks').click(function () {

        if (money >= stuccorCurrentStockPrice) {
            money -= stuccorCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedStuccorStocks++;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            stuccorSpentAmt += stuccorCurrentStockPrice;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyStuccorStocks10').click(function () {

        if (money >= stuccorCurrentStockPrice * 10) {
            money -= stuccorCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedStuccorStocks += 10;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            stuccorSpentAmt += stuccorCurrentStockPrice * 10;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyStuccorStocks100').click(function () {

        if (money >= stuccorCurrentStockPrice * 100) {
            money -= stuccorCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedStuccorStocks += 100;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            stuccorSpentAmt += stuccorCurrentStockPrice * 100;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyStuccorStocksAll').click(function () {
        var stuccorBuyAmt = Math.floor(money / stuccorCurrentStockPrice);
        if (stuccorBuyAmt >= 1) {
            money -= stuccorCurrentStockPrice * stuccorBuyAmt;
            localStorage.setItem("money", money);
            ownedStuccorStocks += stuccorBuyAmt;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            stuccorSpentAmt += stuccorCurrentStockPrice * stuccorBuyAmt;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellStuccorStocks').click(function () {
        if (ownedStuccorStocks > 0) {
            money += stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = stuccorSpentAmt / ownedStuccorStocks;
            stuccorSpentAmt -= average;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStuccorStocks--;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellStuccorStocks10').click(function () {
        if (ownedStuccorStocks > 9) {
            money += (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = stuccorSpentAmt / ownedStuccorStocks;
            stuccorSpentAmt -= average * 10;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStuccorStocks -= 10;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellStuccorStocks100').click(function () {
        if (ownedStuccorStocks > 99) {
            money += (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = stuccorSpentAmt / ownedStuccorStocks;
            stuccorSpentAmt -= average * 100;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStuccorStocks -= 100;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellStuccorStocksAll').click(function () {
        if (ownedStuccorStocks > 0) {
            money += (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider) * ownedStuccorStocks;
            localStorage.setItem("money", money);
            stuccorSpentAmt = 0;
            localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);
            $('#stuccorMoneySpent').html('$' + stuccorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedStuccorStocks = 0;
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
            if (ownedStuccorStocks > 0)
                $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#stuccorSellEstimate').html('$0.00');
        }
        return false;
    });
});