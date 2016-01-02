$(document).ready(function () {

    $('#exxocredStockDisplayCost').html('$' + exxocredCurrentStockPrice.toFixed(2));
    $('#exxocredStockSellPrice').html('$' + (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider).toFixed(2));
    $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
    $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - (exxocredCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyExxocredStocks').click(function () {

        if (money >= exxocredCurrentStockPrice) {
            money -= exxocredCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedExxocredStocks++;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyExxocredStocks10').click(function () {

        if (money >= exxocredCurrentStockPrice * 10) {
            money -= exxocredCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedExxocredStocks += 10;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyExxocredStocks100').click(function () {

        if (money >= exxocredCurrentStockPrice * 100) {
            money -= exxocredCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedExxocredStocks += 100;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyExxocredStocksAll').click(function () {
        var exxocredBuyAmt = Math.floor(money / exxocredCurrentStockPrice);
        if (exxocredBuyAmt >= 1) {
            money -= exxocredCurrentStockPrice * exxocredBuyAmt;
            localStorage.setItem("money", money);
            ownedExxocredStocks += exxocredBuyAmt;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellExxocredStocks').click(function () {
        if (ownedExxocredStocks > 0) {
            money += exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedExxocredStocks--;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExxocredStocks10').click(function () {
        if (ownedExxocredStocks > 9) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedExxocredStocks -= 10;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellExxocredStocks100').click(function () {
        if (ownedExxocredStocks > 99) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedExxocredStocks -= 100;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellExxocredStocksAll').click(function () {
        if (ownedExxocredStocks > 0) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / 10) * ownedExxocredStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExxocredStocks = 0;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#exxocredSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);