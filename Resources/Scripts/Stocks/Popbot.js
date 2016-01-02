$(document).ready(function () {
    $('#popbotStockDisplayCost').html('$' + popbotCurrentStockPrice.toFixed(2));
    $('#popbotStockSellPrice').html('$' + (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider).toFixed(2));
    $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
    $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));

    $('#btnBuyPopbotStocks').click(function () {

        if (money >= popbotCurrentStockPrice) {
            money -= popbotCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedPopbotStocks++;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyPopbotStocks10').click(function () {

        if (money >= popbotCurrentStockPrice * 10) {
            money -= popbotCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedPopbotStocks += 10;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyPopbotStocks100').click(function () {

        if (money >= popbotCurrentStockPrice * 100) {
            money -= popbotCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedPopbotStocks += 100;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyPopbotStocksAll').click(function () {
        var popbotBuyAmt = Math.floor(money / popbotCurrentStockPrice);
        if (popbotBuyAmt >= 1) {
            money -= popbotCurrentStockPrice * popbotBuyAmt;
            localStorage.setItem("money", money);
            ownedPopbotStocks += popbotBuyAmt;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellPopbotStocks').click(function () {
        if (ownedPopbotStocks > 0) {
            money += popbotCurrentStockPrice - popbotCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedPopbotStocks--;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPopbotStocks10').click(function () {
        if (ownedPopbotStocks > 9) {
            money += (popbotCurrentStockPrice - popbotCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedPopbotStocks -= 10;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPopbotStocks100').click(function () {
        if (ownedPopbotStocks > 99) {
            money += (popbotCurrentStockPrice - popbotCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedPopbotStocks -= 100;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellPopbotStocksAll').click(function () {
        if (ownedPopbotStocks > 0) {
            money += (popbotCurrentStockPrice - popbotCurrentStockPrice / 10) * ownedPopbotStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPopbotStocks = 0;
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
            if (ownedPopbotStocks > 0)
                $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#popbotSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);