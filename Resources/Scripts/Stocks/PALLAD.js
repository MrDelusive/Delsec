$(window).load(function () {

    $('#PALLADStockDisplayCost').html('$' + PALLADCurrentStockPrice.toFixed(2));
    $('#PALLADStockSellPrice').html('$' + (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider).toFixed(2));
    $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
    $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - (PALLADCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyPALLADStocks').click(function () {

        if (money >= PALLADCurrentStockPrice) {
            money -= PALLADCurrentStockPrice;
            ownedPALLADStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyPALLADStocks10').click(function () {

        if (money >= PALLADCurrentStockPrice * 10) {
            money -= PALLADCurrentStockPrice * 10;
            ownedPALLADStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyPALLADStocks100').click(function () {

        if (money >= PALLADCurrentStockPrice * 100) {
            money -= PALLADCurrentStockPrice * 100;
            ownedPALLADStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyPALLADStocksAll').click(function () {
        var PALLADBuyAmt = Math.floor(money / PALLADCurrentStockPrice);
        if (PALLADBuyAmt >= 1) {
            money -= PALLADCurrentStockPrice * PALLADBuyAmt;
            ownedPALLADStocks += PALLADBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellPALLADStocks').click(function () {
        if (ownedPALLADStocks > 0) {
            money += PALLADCurrentStockPrice - PALLADCurrentStockPrice / 10;
            ownedPALLADStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPALLADStocks10').click(function () {
        if (ownedPALLADStocks > 9) {
            money += (PALLADCurrentStockPrice - PALLADCurrentStockPrice / 10) * 10;
            ownedPALLADStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellPALLADStocks100').click(function () {
        if (ownedPALLADStocks > 99) {
            money += (PALLADCurrentStockPrice - PALLADCurrentStockPrice / 10) * 100;
            ownedPALLADStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellPALLADStocksAll').click(function () {
        if (ownedPALLADStocks > 0) {
            money += (PALLADCurrentStockPrice - PALLADCurrentStockPrice / 10) * ownedPALLADStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedPALLADStocks = 0;
            $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
            if (ownedPALLADStocks > 0)
                $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#PALLADSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);