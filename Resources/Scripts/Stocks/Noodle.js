$(document).ready(function () {

    $('#noodleStockDisplayCost').html('$' + noodleCurrentStockPrice.toFixed(2));
    $('#noodleStockSellPrice').html('$' + (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider).toFixed(2));
    $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
    $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - (noodleCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyNoodleStocks').click(function () {

        if (money >= noodleCurrentStockPrice) {
            money -= noodleCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedNoodleStocks++;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyNoodleStocks10').click(function () {

        if (money >= noodleCurrentStockPrice * 10) {
            money -= noodleCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedNoodleStocks += 10;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyNoodleStocks100').click(function () {

        if (money >= noodleCurrentStockPrice * 100) {
            money -= noodleCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedNoodleStocks += 100;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyNoodleStocksAll').click(function () {
        var noodleBuyAmt = Math.floor(money / noodleCurrentStockPrice);
        if (noodleBuyAmt >= 1) {
            money -= noodleCurrentStockPrice * noodleBuyAmt;
            localStorage.setItem("money", money);
            ownedNoodleStocks += noodleBuyAmt;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellNoodleStocks').click(function () {
        if (ownedNoodleStocks > 0) {
            money += noodleCurrentStockPrice - noodleCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedNoodleStocks--;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellNoodleStocks10').click(function () {
        if (ownedNoodleStocks > 9) {
            money += (noodleCurrentStockPrice - noodleCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedNoodleStocks -= 10;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellNoodleStocks100').click(function () {
        if (ownedNoodleStocks > 99) {
            money += (noodleCurrentStockPrice - noodleCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedNoodleStocks -= 100;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellNoodleStocksAll').click(function () {
        if (ownedNoodleStocks > 0) {
            money += (noodleCurrentStockPrice - noodleCurrentStockPrice / 10) * ownedNoodleStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedNoodleStocks = 0;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#noodleSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);