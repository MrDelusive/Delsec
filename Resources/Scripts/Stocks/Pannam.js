$(document).ready(function () {

    $('#pannamStockDisplayCost').html('$' + pannamCurrentStockPrice.toFixed(2));
    $('#pannamStockSellPrice').html('$' + (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider).toFixed(2));
    $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
    $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - (pannamCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyPannamStocks').click(function () {

        if (money >= pannamCurrentStockPrice) {
            money -= pannamCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedPannamStocks++;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyPannamStocks10').click(function () {

        if (money >= pannamCurrentStockPrice * 10) {
            money -= pannamCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedPannamStocks += 10;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyPannamStocks100').click(function () {

        if (money >= pannamCurrentStockPrice * 100) {
            money -= pannamCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedPannamStocks += 100;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyPannamStocksAll').click(function () {
        var pannamBuyAmt = Math.floor(money / pannamCurrentStockPrice);
        if (pannamBuyAmt >= 1) {
            money -= pannamCurrentStockPrice * pannamBuyAmt;
            localStorage.setItem("money", money);
            ownedPannamStocks += pannamBuyAmt;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellPannamStocks').click(function () {
        if (ownedPannamStocks > 0) {
            money += pannamCurrentStockPrice - pannamCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedPannamStocks--;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPannamStocks10').click(function () {
        if (ownedPannamStocks > 9) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedPannamStocks -= 10;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPannamStocks100').click(function () {
        if (ownedPannamStocks > 99) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedPannamStocks -= 100;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellPannamStocksAll').click(function () {
        if (ownedPannamStocks > 0) {
            money += (pannamCurrentStockPrice - pannamCurrentStockPrice / 10) * ownedPannamStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPannamStocks = 0;
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            $('#pannamOwnedStocksDisplay').html(ownedPannamStocks);
            if (ownedPannamStocks > 0)
                $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pannamSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);