$(window).load(function () {

    $('#aceholdStockDisplayCost').html('$' + aceholdCurrentStockPrice.toFixed(2));
    $('#aceholdStockSellPrice').html('$' + (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider).toFixed(2));
    $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
    $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - (aceholdCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyAceholdStocks').click(function () {

        if (money >= aceholdCurrentStockPrice) {
            money -= aceholdCurrentStockPrice;
            ownedAceholdStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyAceholdStocks10').click(function () {

        if (money >= aceholdCurrentStockPrice * 10) {
            money -= aceholdCurrentStockPrice * 10;
            ownedAceholdStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyAceholdStocks100').click(function () {

        if (money >= aceholdCurrentStockPrice * 100) {
            money -= aceholdCurrentStockPrice * 100;
            ownedAceholdStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyAceholdStocksAll').click(function () {
        var aceholdBuyAmt = Math.floor(money / aceholdCurrentStockPrice);
        if (aceholdBuyAmt >= 1) {
            money -= aceholdCurrentStockPrice * aceholdBuyAmt;
            ownedAceholdStocks += aceholdBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellAceholdStocks').click(function () {
        if (ownedAceholdStocks > 0) {
            money += aceholdCurrentStockPrice - aceholdCurrentStockPrice / 10;
            ownedAceholdStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAceholdStocks10').click(function () {
        if (ownedAceholdStocks > 9) {
            money += (aceholdCurrentStockPrice - aceholdCurrentStockPrice / 10) * 10;
            ownedAceholdStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAceholdStocks100').click(function () {
        if (ownedAceholdStocks > 99) {
            money += (aceholdCurrentStockPrice - aceholdCurrentStockPrice / 10) * 100;
            ownedAceholdStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellAceholdStocksAll').click(function () {
        if (ownedAceholdStocks > 0) {
            money += (aceholdCurrentStockPrice - aceholdCurrentStockPrice / 10) * ownedAceholdStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAceholdStocks = 0;
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#aceholdSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);