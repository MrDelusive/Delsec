$(document).ready(function () {

    $('#rustecStockDisplayCost').html('$' + rustecCurrentStockPrice.toFixed(2));
    $('#rustecStockSellPrice').html('$' + (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider).toFixed(2));
    $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
    $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - (rustecCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyRustecStocks').click(function () {

        if (money >= rustecCurrentStockPrice) {
            money -= rustecCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedRustecStocks++;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyRustecStocks10').click(function () {

        if (money >= rustecCurrentStockPrice * 10) {
            money -= rustecCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedRustecStocks += 10;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyRustecStocks100').click(function () {

        if (money >= rustecCurrentStockPrice * 100) {
            money -= rustecCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedRustecStocks += 100;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyRustecStocksAll').click(function () {
        var rustecBuyAmt = Math.floor(money / rustecCurrentStockPrice);
        if (rustecBuyAmt >= 1) {
            money -= rustecCurrentStockPrice * rustecBuyAmt;
            localStorage.setItem("money", money);
            ownedRustecStocks += rustecBuyAmt;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellRustecStocks').click(function () {
        if (ownedRustecStocks > 0) {
            money += rustecCurrentStockPrice - rustecCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedRustecStocks--;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellRustecStocks10').click(function () {
        if (ownedRustecStocks > 9) {
            money += (rustecCurrentStockPrice - rustecCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedRustecStocks -= 10;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellRustecStocks100').click(function () {
        if (ownedRustecStocks > 99) {
            money += (rustecCurrentStockPrice - rustecCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedRustecStocks -= 100;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellRustecStocksAll').click(function () {
        if (ownedRustecStocks > 0) {
            money += (rustecCurrentStockPrice - rustecCurrentStockPrice / 10) * ownedRustecStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedRustecStocks = 0;
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
            if (ownedRustecStocks > 0)
                $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#rustecSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);