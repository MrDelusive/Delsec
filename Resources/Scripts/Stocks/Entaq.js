$(document).ready(function () {

    $('#entaqStockDisplayCost').html('$' + entaqCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#entaqCurrentPrice').html('$' + entaqCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
    $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - (entaqCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyEntaqStocks').click(function () {

        if (money >= entaqCurrentStockPrice) {
            money -= entaqCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedEntaqStocks++;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            entaqSpentAmt += entaqCurrentStockPrice;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyEntaqStocks10').click(function () {

        if (money >= entaqCurrentStockPrice * 10) {
            money -= entaqCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedEntaqStocks += 10;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            entaqSpentAmt += entaqCurrentStockPrice * 10;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyEntaqStocks100').click(function () {

        if (money >= entaqCurrentStockPrice * 100) {
            money -= entaqCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedEntaqStocks += 100;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            entaqSpentAmt += entaqCurrentStockPrice * 100;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyEntaqStocksAll').click(function () {
        var entaqBuyAmt = Math.floor(money / entaqCurrentStockPrice);
        if (entaqBuyAmt >= 1) {
            money -= entaqCurrentStockPrice * entaqBuyAmt;
            localStorage.setItem("money", money);
            ownedEntaqStocks += entaqBuyAmt;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            entaqSpentAmt += entaqCurrentStockPrice * entaqBuyAmt;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellEntaqStocks').click(function () {
        if (ownedEntaqStocks > 0) {
            money += entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = entaqSpentAmt / ownedEntaqStocks;
            entaqSpentAmt -= average;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedEntaqStocks--;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellEntaqStocks10').click(function () {
        if (ownedEntaqStocks > 9) {
            money += (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = entaqSpentAmt / ownedEntaqStocks;
            entaqSpentAmt -= average * 10;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedEntaqStocks -= 10;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellEntaqStocks100').click(function () {
        if (ownedEntaqStocks > 99) {
            money += (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = entaqSpentAmt / ownedEntaqStocks;
            entaqSpentAmt -= average * 100;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedEntaqStocks -= 100;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellEntaqStocksAll').click(function () {
        if (ownedEntaqStocks > 0) {
            money += (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider) * ownedEntaqStocks;
            localStorage.setItem("money", money);
            entaqSpentAmt = 0;
            localStorage.setItem("entaqSpentAmt", entaqSpentAmt);
            $('#entaqMoneySpent').html('$' + entaqSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedEntaqStocks = 0;
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
            if (ownedEntaqStocks > 0)
                $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#entaqSellEstimate').html('$0.00');
        }
        return false;
    });
});