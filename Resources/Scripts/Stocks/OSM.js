$(document).ready(function () {

    $('#OSMStockDisplayCost').html('$' + OSMCurrentStockPrice.toFixed(2));
    $('#OSMStockSellPrice').html('$' + (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider).toFixed(2));
    $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
    $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - (OSMCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyOSMStocks').click(function () {

        if (money >= OSMCurrentStockPrice) {
            money -= OSMCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedOSMStocks++;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyOSMStocks10').click(function () {

        if (money >= OSMCurrentStockPrice * 10) {
            money -= OSMCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedOSMStocks += 10;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyOSMStocks100').click(function () {

        if (money >= OSMCurrentStockPrice * 100) {
            money -= OSMCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedOSMStocks += 100;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
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
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellOSMStocks').click(function () {
        if (ownedOSMStocks > 0) {
            money += OSMCurrentStockPrice - OSMCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedOSMStocks--;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellOSMStocks10').click(function () {
        if (ownedOSMStocks > 9) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedOSMStocks -= 10;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellOSMStocks100').click(function () {
        if (ownedOSMStocks > 99) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedOSMStocks -= 100;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellOSMStocksAll').click(function () {
        if (ownedOSMStocks > 0) {
            money += (OSMCurrentStockPrice - OSMCurrentStockPrice / 10) * ownedOSMStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedOSMStocks = 0;
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
            if (ownedOSMStocks > 0)
                $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#OSMSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);