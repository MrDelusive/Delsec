$(document).ready(function () {

    $('#pentaccStockDisplayCost').html('$' + pentaccCurrentStockPrice.toFixed(2));
    $('#pentaccStockSellPrice').html('$' + (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider).toFixed(2));
    $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
    $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - (pentaccCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyPentaccStocks').click(function () {

        if (money >= pentaccCurrentStockPrice) {
            money -= pentaccCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedPentaccStocks++;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyPentaccStocks10').click(function () {

        if (money >= pentaccCurrentStockPrice * 10) {
            money -= pentaccCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedPentaccStocks += 10;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyPentaccStocks100').click(function () {

        if (money >= pentaccCurrentStockPrice * 100) {
            money -= pentaccCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedPentaccStocks += 100;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyPentaccStocksAll').click(function () {
        var pentaccBuyAmt = Math.floor(money / pentaccCurrentStockPrice);
        if (pentaccBuyAmt >= 1) {
            money -= pentaccCurrentStockPrice * pentaccBuyAmt;
            localStorage.setItem("money", money);
            ownedPentaccStocks += pentaccBuyAmt;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellPentaccStocks').click(function () {
        if (ownedPentaccStocks > 0) {
            money += pentaccCurrentStockPrice - pentaccCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedPentaccStocks--;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPentaccStocks10').click(function () {
        if (ownedPentaccStocks > 9) {
            money += (pentaccCurrentStockPrice - pentaccCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedPentaccStocks -= 10;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPentaccStocks100').click(function () {
        if (ownedPentaccStocks > 99) {
            money += (pentaccCurrentStockPrice - pentaccCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedPentaccStocks -= 100;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellPentaccStocksAll').click(function () {
        if (ownedPentaccStocks > 0) {
            money += (pentaccCurrentStockPrice - pentaccCurrentStockPrice / 10) * ownedPentaccStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPentaccStocks = 0;
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            $('#pentaccOwnedStocksDisplay').html(ownedPentaccStocks);
            if (ownedPentaccStocks > 0)
                $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#pentaccSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);