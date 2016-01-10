$(document).ready(function () {

    $('#ramnetStockDisplayCost').html('$' + ramnetCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ramnetCurrentPrice').html('$' + ramnetCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ramnetStockSellPrice').html('$' + (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
    $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - (ramnetCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyRamnetStocks').click(function () {

        if (money >= ramnetCurrentStockPrice) {
            money -= ramnetCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedRamnetStocks++;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            ramnetSpentAmt += ramnetCurrentStockPrice;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyRamnetStocks10').click(function () {

        if (money >= ramnetCurrentStockPrice * 10) {
            money -= ramnetCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedRamnetStocks += 10;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            ramnetSpentAmt += ramnetCurrentStockPrice * 10;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyRamnetStocks100').click(function () {

        if (money >= ramnetCurrentStockPrice * 100) {
            money -= ramnetCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedRamnetStocks += 100;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            ramnetSpentAmt += ramnetCurrentStockPrice * 100;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyRamnetStocksAll').click(function () {
        var ramnetBuyAmt = Math.floor(money / ramnetCurrentStockPrice);
        if (ramnetBuyAmt >= 1) {
            money -= ramnetCurrentStockPrice * ramnetBuyAmt;
            localStorage.setItem("money", money);
            ownedRamnetStocks += ramnetBuyAmt;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            ramnetSpentAmt += ramnetCurrentStockPrice * ramnetBuyAmt;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellRamnetStocks').click(function () {
        if (ownedRamnetStocks > 0) {
            money += ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = ramnetSpentAmt / ownedRamnetStocks;
            ramnetSpentAmt -= average;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRamnetStocks--;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellRamnetStocks10').click(function () {
        if (ownedRamnetStocks > 9) {
            money += (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = ramnetSpentAmt / ownedRamnetStocks;
            ramnetSpentAmt -= average * 10;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRamnetStocks -= 10;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellRamnetStocks100').click(function () {
        if (ownedRamnetStocks > 99) {
            money += (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = ramnetSpentAmt / ownedRamnetStocks;
            ramnetSpentAmt -= average * 100;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRamnetStocks -= 100;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellRamnetStocksAll').click(function () {
        if (ownedRamnetStocks > 0) {
            money += (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider) * ownedRamnetStocks;
            localStorage.setItem("money", money);
            ramnetSpentAmt = 0;
            localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);
            $('#ramnetMoneySpent').html('$' + ramnetSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRamnetStocks = 0;
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            $('#ramnetOwnedStocksDisplay').html(ownedRamnetStocks);
            $('#ramnetOwnedStocks').html(ownedRamnetStocks);
            if (ownedRamnetStocks > 0)
                $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#ramnetSellEstimate').html('$0.00');
        }
        return false;
    });
});