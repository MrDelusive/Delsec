﻿$(window).load(function () {

    $('#delholdStockDisplayCost').html('$' + delholdCurrentStockPrice.toFixed(2));
    $('#delholdStockSellPrice').html('$' + (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider).toFixed(2));
    $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
    $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - (delholdCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyDelholdStocks').click(function () {

        if (money >= delholdCurrentStockPrice) {
            money -= delholdCurrentStockPrice;
            ownedDelholdStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyDelholdStocks10').click(function () {

        if (money >= delholdCurrentStockPrice * 10) {
            money -= delholdCurrentStockPrice * 10;
            ownedDelholdStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyDelholdStocks100').click(function () {

        if (money >= delholdCurrentStockPrice * 100) {
            money -= delholdCurrentStockPrice * 100;
            ownedDelholdStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyDelholdStocksAll').click(function () {
        var delholdBuyAmt = Math.floor(money / delholdCurrentStockPrice);
        if (delholdBuyAmt >= 1) {
            money -= delholdCurrentStockPrice * delholdBuyAmt;
            ownedDelholdStocks += delholdBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellDelholdStocks').click(function () {
        if (ownedDelholdStocks > 0) {
            money += delholdCurrentStockPrice - delholdCurrentStockPrice / 10;
            ownedDelholdStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDelholdStocks10').click(function () {
        if (ownedDelholdStocks > 9) {
            money += (delholdCurrentStockPrice - delholdCurrentStockPrice / 10) * 10;
            ownedDelholdStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellDelholdStocks100').click(function () {
        if (ownedDelholdStocks > 99) {
            money += (delholdCurrentStockPrice - delholdCurrentStockPrice / 10) * 100;
            ownedDelholdStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellDelholdStocksAll').click(function () {
        if (ownedDelholdStocks > 0) {
            money += (delholdCurrentStockPrice - delholdCurrentStockPrice / 10) * ownedDelholdStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelholdStocks = 0;
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#delholdSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);