$(document).ready(function () {

    $('#DIAMStockDisplayCost').html('$' + DIAMCurrentStockPrice.toFixed(2));
    $('#DIAMStockSellPrice').html('$' + (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider).toFixed(2));
    $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
    $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - (DIAMCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyDIAMStocks').click(function () {

        if (money >= DIAMCurrentStockPrice) {
            money -= DIAMCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedDIAMStocks++;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyDIAMStocks10').click(function () {

        if (money >= DIAMCurrentStockPrice * 10) {
            money -= DIAMCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedDIAMStocks += 10;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyDIAMStocks100').click(function () {

        if (money >= DIAMCurrentStockPrice * 100) {
            money -= DIAMCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedDIAMStocks += 100;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyDIAMStocksAll').click(function () {
        var DIAMBuyAmt = Math.floor(money / DIAMCurrentStockPrice);
        if (DIAMBuyAmt >= 1) {
            money -= DIAMCurrentStockPrice * DIAMBuyAmt;
            localStorage.setItem("money", money);
            ownedDIAMStocks += DIAMBuyAmt;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellDIAMStocks').click(function () {
        if (ownedDIAMStocks > 0) {
            money += DIAMCurrentStockPrice - DIAMCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedDIAMStocks--;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDIAMStocks10').click(function () {
        if (ownedDIAMStocks > 9) {
            money += (DIAMCurrentStockPrice - DIAMCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedDIAMStocks -= 10;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDIAMStocks100').click(function () {
        if (ownedDIAMStocks > 99) {
            money += (DIAMCurrentStockPrice - DIAMCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedDIAMStocks -= 100;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellDIAMStocksAll').click(function () {
        if (ownedDIAMStocks > 0) {
            money += (DIAMCurrentStockPrice - DIAMCurrentStockPrice / 10) * ownedDIAMStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDIAMStocks = 0;
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
            if (ownedDIAMStocks > 0)
                $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#DIAMSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);