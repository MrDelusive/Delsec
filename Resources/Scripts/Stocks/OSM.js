$(document).ready(function () {

    $('#OSMStockDisplayCost').html('$' + OSMCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#OSMCurrentPrice').html('$' + OSMCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#OSMStockSellPrice').html('$' + (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
    $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - (OSMCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyOSMStocks').click(function () {

        if (money >= OSMCurrentStockPrice) {
            money -= OSMCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedOSMStocks++;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            OSMSpentAmt += OSMCurrentStockPrice;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyOSMStocks10').click(function () {

        if (money >= OSMCurrentStockPrice * 10) {
            money -= OSMCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedOSMStocks += 10;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            OSMSpentAmt += OSMCurrentStockPrice * 10;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyOSMStocks100').click(function () {

        if (money >= OSMCurrentStockPrice * 100) {
            money -= OSMCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedOSMStocks += 100;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            OSMSpentAmt += OSMCurrentStockPrice * 100;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyOSMStocksAll').click(function () {
        var OSMBuyAmt = Math.floor(money / OSMCurrentStockPrice);
        if (OSMBuyAmt >= 1) {
            money -= OSMCurrentStockPrice * OSMBuyAmt;
            localStorage.setItem("money", money);
            ownedOSMStocks += OSMBuyAmt;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            OSMSpentAmt += OSMCurrentStockPrice * OSMBuyAmt;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellOSMStocks').click(function () {
        if (ownedOSMStocks > 0) {
            money += OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = OSMSpentAmt / ownedOSMStocks;
            OSMSpentAmt -= average;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedOSMStocks--;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellOSMStocks10').click(function () {
        if (ownedOSMStocks > 9) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = OSMSpentAmt / ownedOSMStocks;
            OSMSpentAmt -= average * 10;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedOSMStocks -= 10;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellOSMStocks100').click(function () {
        if (ownedOSMStocks > 99) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = OSMSpentAmt / ownedOSMStocks;
            OSMSpentAmt -= average * 100;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedOSMStocks -= 100;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellOSMStocksAll').click(function () {
        if (ownedOSMStocks > 0) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider) * ownedOSMStocks;
            localStorage.setItem("money", money);
            OSMSpentAmt = 0;
            localStorage.setItem("OSMSpentAmt", OSMSpentAmt);
            $('#OSMMoneySpent').html('$' + OSMSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedOSMStocks = 0;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#OSMSellEstimate').html('$0.00');
        }
        return false;
    });
});