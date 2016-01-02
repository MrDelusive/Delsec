$(document).ready(function () {

    $('#turborusStockDisplayCost').html('$' + turborusCurrentStockPrice.toFixed(2));
    $('#turborusStockSellPrice').html('$' + (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider).toFixed(2));
    $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
    $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - (turborusCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyTurborusStocks').click(function () {

        if (money >= turborusCurrentStockPrice) {
            money -= turborusCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedTurborusStocks++;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyTurborusStocks10').click(function () {

        if (money >= turborusCurrentStockPrice * 10) {
            money -= turborusCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedTurborusStocks += 10;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyTurborusStocks100').click(function () {

        if (money >= turborusCurrentStockPrice * 100) {
            money -= turborusCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedTurborusStocks += 100;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyTurborusStocksAll').click(function () {
        var turborusBuyAmt = Math.floor(money / turborusCurrentStockPrice);
        if (turborusBuyAmt >= 1) {
            money -= turborusCurrentStockPrice * turborusBuyAmt;
            localStorage.setItem("money", money);
            ownedTurborusStocks += turborusBuyAmt;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellTurborusStocks').click(function () {
        if (ownedTurborusStocks > 0) {
            money += turborusCurrentStockPrice - turborusCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedTurborusStocks--;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellTurborusStocks10').click(function () {
        if (ownedTurborusStocks > 9) {
            money += (turborusCurrentStockPrice - turborusCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedTurborusStocks -= 10;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellTurborusStocks100').click(function () {
        if (ownedTurborusStocks > 99) {
            money += (turborusCurrentStockPrice - turborusCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedTurborusStocks -= 100;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellTurborusStocksAll').click(function () {
        if (ownedTurborusStocks > 0) {
            money += (turborusCurrentStockPrice - turborusCurrentStockPrice / 10) * ownedTurborusStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTurborusStocks = 0;
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
            if (ownedTurborusStocks > 0)
                $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#turborusSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);