$(document).ready(function () {

    $('#KELVStockDisplayCost').html('$' + KELVCurrentStockPrice.toFixed(2));
    $('#KELVStockSellPrice').html('$' + (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider).toFixed(2));
    $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
    $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - (KELVCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyKELVStocks').click(function () {

        if (money >= KELVCurrentStockPrice) {
            money -= KELVCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedKELVStocks++;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyKELVStocks10').click(function () {

        if (money >= KELVCurrentStockPrice * 10) {
            money -= KELVCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedKELVStocks += 10;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyKELVStocks100').click(function () {

        if (money >= KELVCurrentStockPrice * 100) {
            money -= KELVCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedKELVStocks += 100;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyKELVStocksAll').click(function () {
        var KELVBuyAmt = Math.floor(money / KELVCurrentStockPrice);
        if (KELVBuyAmt >= 1) {
            money -= KELVCurrentStockPrice * KELVBuyAmt;
            localStorage.setItem("money", money);
            ownedKELVStocks += KELVBuyAmt;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellKELVStocks').click(function () {
        if (ownedKELVStocks > 0) {
            money += KELVCurrentStockPrice - KELVCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedKELVStocks--;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellKELVStocks10').click(function () {
        if (ownedKELVStocks > 9) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedKELVStocks -= 10;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellKELVStocks100').click(function () {
        if (ownedKELVStocks > 99) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedKELVStocks -= 100;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellKELVStocksAll').click(function () {
        if (ownedKELVStocks > 0) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / 10) * ownedKELVStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKELVStocks = 0;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#KELVSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);