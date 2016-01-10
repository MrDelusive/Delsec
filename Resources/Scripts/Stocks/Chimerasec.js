$(document).ready(function () {

    $('#chimerasecStockDisplayCost').html('$' + chimerasecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimerasecCurrentPrice').html('$' + chimerasecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimerasecStockSellPrice').html('$' + (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
    $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - (chimerasecCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyChimerasecStocks').click(function () {

        if (money >= chimerasecCurrentStockPrice) {
            money -= chimerasecCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedChimerasecStocks++;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            chimerasecSpentAmt += chimerasecCurrentStockPrice;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyChimerasecStocks10').click(function () {

        if (money >= chimerasecCurrentStockPrice * 10) {
            money -= chimerasecCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedChimerasecStocks += 10;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            chimerasecSpentAmt += chimerasecCurrentStockPrice * 10;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyChimerasecStocks100').click(function () {

        if (money >= chimerasecCurrentStockPrice * 100) {
            money -= chimerasecCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedChimerasecStocks += 100;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            chimerasecSpentAmt += chimerasecCurrentStockPrice * 100;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyChimerasecStocksAll').click(function () {
        var chimerasecBuyAmt = Math.floor(money / chimerasecCurrentStockPrice);
        if (chimerasecBuyAmt >= 1) {
            money -= chimerasecCurrentStockPrice * chimerasecBuyAmt;
            localStorage.setItem("money", money);
            ownedChimerasecStocks += chimerasecBuyAmt;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            chimerasecSpentAmt += chimerasecCurrentStockPrice * chimerasecBuyAmt;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellChimerasecStocks').click(function () {
        if (ownedChimerasecStocks > 0) {
            money += chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = chimerasecSpentAmt / ownedChimerasecStocks;
            chimerasecSpentAmt -= average;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimerasecStocks--;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellChimerasecStocks10').click(function () {
        if (ownedChimerasecStocks > 9) {
            money += (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = chimerasecSpentAmt / ownedChimerasecStocks;
            chimerasecSpentAmt -= average * 10;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimerasecStocks -= 10;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellChimerasecStocks100').click(function () {
        if (ownedChimerasecStocks > 99) {
            money += (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = chimerasecSpentAmt / ownedChimerasecStocks;
            chimerasecSpentAmt -= average * 100;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimerasecStocks -= 100;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellChimerasecStocksAll').click(function () {
        if (ownedChimerasecStocks > 0) {
            money += (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider) * ownedChimerasecStocks;
            localStorage.setItem("money", money);
            chimerasecSpentAmt = 0;
            localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);
            $('#chimerasecMoneySpent').html('$' + chimerasecSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimerasecStocks = 0;
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
            if (ownedChimerasecStocks > 0)
                $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimerasecSellEstimate').html('$0.00');
        }
        return false;
    });
});