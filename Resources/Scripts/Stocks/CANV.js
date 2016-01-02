$(document).ready(function () {

    $('#CANVStockDisplayCost').html('$' + CANVCurrentStockPrice.toFixed(2));
    $('#CANVStockSellPrice').html('$' + (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider).toFixed(2));
    $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
    $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - (CANVCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyCANVStocks').click(function () {

        if (money >= CANVCurrentStockPrice) {
            money -= CANVCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedCANVStocks++;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyCANVStocks10').click(function () {

        if (money >= CANVCurrentStockPrice * 10) {
            money -= CANVCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedCANVStocks += 10;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyCANVStocks100').click(function () {

        if (money >= CANVCurrentStockPrice * 100) {
            money -= CANVCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedCANVStocks += 100;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
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
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellCANVStocks').click(function () {
        if (ownedCANVStocks > 0) {
            money += CANVCurrentStockPrice - CANVCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedCANVStocks--;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellCANVStocks10').click(function () {
        if (ownedCANVStocks > 9) {
            money += (CANVCurrentStockPrice - CANVCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedCANVStocks -= 10;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellCANVStocks100').click(function () {
        if (ownedCANVStocks > 99) {
            money += (CANVCurrentStockPrice - CANVCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedCANVStocks -= 100;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellCANVStocksAll').click(function () {
        if (ownedCANVStocks > 0) {
            money += (CANVCurrentStockPrice - CANVCurrentStockPrice / 10) * ownedCANVStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedCANVStocks = 0;
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
            if (ownedCANVStocks > 0)
                $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#CANVSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);