$(document).ready(function () {

    $('#vipersecStockDisplayCost').html('$' + vipersecCurrentStockPrice.toFixed(2));
    $('#vipersecStockSellPrice').html('$' + (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider).toFixed(2));
    $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
    $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - (vipersecCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyVipersecStocks').click(function () {

        if (money >= vipersecCurrentStockPrice) {
            money -= vipersecCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedVipersecStocks++;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyVipersecStocks10').click(function () {

        if (money >= vipersecCurrentStockPrice * 10) {
            money -= vipersecCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedVipersecStocks += 10;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyVipersecStocks100').click(function () {

        if (money >= vipersecCurrentStockPrice * 100) {
            money -= vipersecCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedVipersecStocks += 100;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyVipersecStocksAll').click(function () {
        var vipersecBuyAmt = Math.floor(money / vipersecCurrentStockPrice);
        if (vipersecBuyAmt >= 1) {
            money -= vipersecCurrentStockPrice * vipersecBuyAmt;
            localStorage.setItem("money", money);
            ownedVipersecStocks += vipersecBuyAmt;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellVipersecStocks').click(function () {
        if (ownedVipersecStocks > 0) {
            money += vipersecCurrentStockPrice - vipersecCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedVipersecStocks--;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellVipersecStocks10').click(function () {
        if (ownedVipersecStocks > 9) {
            money += (vipersecCurrentStockPrice - vipersecCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedVipersecStocks -= 10;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellVipersecStocks100').click(function () {
        if (ownedVipersecStocks > 99) {
            money += (vipersecCurrentStockPrice - vipersecCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedVipersecStocks -= 100;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellVipersecStocksAll').click(function () {
        if (ownedVipersecStocks > 0) {
            money += (vipersecCurrentStockPrice - vipersecCurrentStockPrice / 10) * ownedVipersecStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedVipersecStocks = 0;
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            $('#vipersecOwnedStocksDisplay').html(ownedVipersecStocks);
            if (ownedVipersecStocks > 0)
                $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#vipersecSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);