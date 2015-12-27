$(window).load(function () {

    $('#alphacenStockDisplayCost').html('$' + alphacenCurrentStockPrice.toFixed(2));
    $('#alphacenStockSellPrice').html('$' + (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider).toFixed(2));
    $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
    $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - (alphacenCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyAlphacenStocks').click(function () {

        if (money >= alphacenCurrentStockPrice) {
            money -= alphacenCurrentStockPrice;
            ownedAlphacenStocks++;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyAlphacenStocks10').click(function () {

        if (money >= alphacenCurrentStockPrice * 10) {
            money -= alphacenCurrentStockPrice * 10;
            ownedAlphacenStocks += 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyAlphacenStocks100').click(function () {

        if (money >= alphacenCurrentStockPrice * 100) {
            money -= alphacenCurrentStockPrice * 100;
            ownedAlphacenStocks += 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyAlphacenStocksAll').click(function () {
        var alphacenBuyAmt = Math.floor(money / alphacenCurrentStockPrice);
        if (alphacenBuyAmt >= 1) {
            money -= alphacenCurrentStockPrice * alphacenBuyAmt;
            ownedAlphacenStocks += alphacenBuyAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellAlphacenStocks').click(function () {
        if (ownedAlphacenStocks > 0) {
            money += alphacenCurrentStockPrice - alphacenCurrentStockPrice / 10;
            ownedAlphacenStocks--;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAlphacenStocks10').click(function () {
        if (ownedAlphacenStocks > 9) {
            money += (alphacenCurrentStockPrice - alphacenCurrentStockPrice / 10) * 10;
            ownedAlphacenStocks -= 10;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAlphacenStocks100').click(function () {
        if (ownedAlphacenStocks > 99) {
            money += (alphacenCurrentStockPrice - alphacenCurrentStockPrice / 10) * 100;
            ownedAlphacenStocks -= 100;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellAlphacenStocksAll').click(function () {
        if (ownedAlphacenStocks > 0) {
            money += (alphacenCurrentStockPrice - alphacenCurrentStockPrice / 10) * ownedAlphacenStocks;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAlphacenStocks = 0;
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#alphacenSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);