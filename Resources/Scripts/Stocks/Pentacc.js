$(document).ready(function () {

    $('#pentaccStockDisplayCost').html('$' + pentaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pentaccCurrentPrice').html('$' + pentaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pentaccStockSellPrice').html('$' + (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
    $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - (pentaccCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyPentaccStocks').click(function () {

        if (money >= pentaccCurrentStockPrice) {
            money -= pentaccCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedPentaccStocks++;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            pentaccSpentAmt += pentaccCurrentStockPrice;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyPentaccStocks10').click(function () {

        if (money >= pentaccCurrentStockPrice * 10) {
            money -= pentaccCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedPentaccStocks += 10;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            pentaccSpentAmt += pentaccCurrentStockPrice * 10;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyPentaccStocks100').click(function () {

        if (money >= pentaccCurrentStockPrice * 100) {
            money -= pentaccCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedPentaccStocks += 100;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            pentaccSpentAmt += pentaccCurrentStockPrice * 100;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyPentaccStocksAll').click(function () {
        var pentaccBuyAmt = Math.floor(money / pentaccCurrentStockPrice);
        if (pentaccBuyAmt >= 1) {
            money -= pentaccCurrentStockPrice * pentaccBuyAmt;
            localStorage.setItem("money", money);
            ownedPentaccStocks += pentaccBuyAmt;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            pentaccSpentAmt += pentaccCurrentStockPrice * pentaccBuyAmt;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellPentaccStocks').click(function () {
        if (ownedPentaccStocks > 0) {
            money += pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = pentaccSpentAmt / ownedPentaccStocks;
            pentaccSpentAmt -= average;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPentaccStocks--;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellPentaccStocks10').click(function () {
        if (ownedPentaccStocks > 9) {
            money += (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = pentaccSpentAmt / ownedPentaccStocks;
            pentaccSpentAmt -= average * 10;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPentaccStocks -= 10;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellPentaccStocks100').click(function () {
        if (ownedPentaccStocks > 99) {
            money += (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = pentaccSpentAmt / ownedPentaccStocks;
            pentaccSpentAmt -= average * 100;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPentaccStocks -= 100;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellPentaccStocksAll').click(function () {
        if (ownedPentaccStocks > 0) {
            money += (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider) * ownedPentaccStocks;
            localStorage.setItem("money", money);
            pentaccSpentAmt = 0;
            localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);
            $('#pentaccMoneySpent').html('$' + pentaccSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPentaccStocks = 0;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            $('#pentaccOwnedStocks').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#pentaccSellEstimate').html('$0.00');
        }
        return false;
    });
});