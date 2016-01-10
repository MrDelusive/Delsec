$(document).ready(function () {

    $('#CANVStockDisplayCost').html('$' + CANVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#CANVCurrentPrice').html('$' + CANVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#CANVStockSellPrice').html('$' + (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
    $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - (CANVCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyCANVStocks').click(function () {

        if (money >= CANVCurrentStockPrice) {
            money -= CANVCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedCANVStocks++;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            CANVSpentAmt += CANVCurrentStockPrice;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyCANVStocks10').click(function () {

        if (money >= CANVCurrentStockPrice * 10) {
            money -= CANVCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedCANVStocks += 10;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            CANVSpentAmt += CANVCurrentStockPrice * 10;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyCANVStocks100').click(function () {

        if (money >= CANVCurrentStockPrice * 100) {
            money -= CANVCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedCANVStocks += 100;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            CANVSpentAmt += CANVCurrentStockPrice * 100;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyCANVStocksAll').click(function () {
        var CANVBuyAmt = Math.floor(money / CANVCurrentStockPrice);
        if (CANVBuyAmt >= 1) {
            money -= CANVCurrentStockPrice * CANVBuyAmt;
            localStorage.setItem("money", money);
            ownedCANVStocks += CANVBuyAmt;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            CANVSpentAmt += CANVCurrentStockPrice * CANVBuyAmt;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellCANVStocks').click(function () {
        if (ownedCANVStocks > 0) {
            money += CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = CANVSpentAmt / ownedCANVStocks;
            CANVSpentAmt -= average;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedCANVStocks--;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellCANVStocks10').click(function () {
        if (ownedCANVStocks > 9) {
            money += (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = CANVSpentAmt / ownedCANVStocks;
            CANVSpentAmt -= average * 10;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedCANVStocks -= 10;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellCANVStocks100').click(function () {
        if (ownedCANVStocks > 99) {
            money += (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = CANVSpentAmt / ownedCANVStocks;
            CANVSpentAmt -= average * 100;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedCANVStocks -= 100;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellCANVStocksAll').click(function () {
        if (ownedCANVStocks > 0) {
            money += (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider) * ownedCANVStocks;
            localStorage.setItem("money", money);
            CANVSpentAmt = 0;
            localStorage.setItem("CANVSpentAmt", CANVSpentAmt);
            $('#CANVMoneySpent').html('$' + CANVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedCANVStocks = 0;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            $('#CANVOwnedStocks').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#CANVSellEstimate').html('$0.00');
        }
        return false;
    });
});