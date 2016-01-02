$(document).ready(function () {

    $('#PLATStockDisplayCost').html('$' + PLATCurrentStockPrice.toFixed(2));
    $('#PLATStockSellPrice').html('$' + (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider).toFixed(2));
    $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
    $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - (PLATCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyPLATStocks').click(function () {

        if (money >= PLATCurrentStockPrice) {
            money -= PLATCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedPLATStocks++;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyPLATStocks10').click(function () {

        if (money >= PLATCurrentStockPrice * 10) {
            money -= PLATCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedPLATStocks += 10;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyPLATStocks100').click(function () {

        if (money >= PLATCurrentStockPrice * 100) {
            money -= PLATCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedPLATStocks += 100;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyPLATStocksAll').click(function () {
        var PLATBuyAmt = Math.floor(money / PLATCurrentStockPrice);
        if (PLATBuyAmt >= 1) {
            money -= PLATCurrentStockPrice * PLATBuyAmt;
            localStorage.setItem("money", money);
            ownedPLATStocks += PLATBuyAmt;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellPLATStocks').click(function () {
        if (ownedPLATStocks > 0) {
            money += PLATCurrentStockPrice - PLATCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedPLATStocks--;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPLATStocks10').click(function () {
        if (ownedPLATStocks > 9) {
            money += (PLATCurrentStockPrice - PLATCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedPLATStocks -= 10;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPLATStocks100').click(function () {
        if (ownedPLATStocks > 99) {
            money += (PLATCurrentStockPrice - PLATCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedPLATStocks -= 100;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellPLATStocksAll').click(function () {
        if (ownedPLATStocks > 0) {
            money += (PLATCurrentStockPrice - PLATCurrentStockPrice / 10) * ownedPLATStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPLATStocks = 0;
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
            if (ownedPLATStocks > 0)
                $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PLATSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);