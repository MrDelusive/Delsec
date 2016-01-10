$(document).ready(function () {

    $('#alphacenStockDisplayCost').html('$' + alphacenCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#alphacenCurrentPrice').html('$' + alphacenCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#alphacenStockSellPrice').html('$' + (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
    $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - (alphacenCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyAlphacenStocks').click(function () {

        if (money >= alphacenCurrentStockPrice) {
            money -= alphacenCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedAlphacenStocks++;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            alphacenSpentAmt += alphacenCurrentStockPrice;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyAlphacenStocks10').click(function () {

        if (money >= alphacenCurrentStockPrice * 10) {
            money -= alphacenCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedAlphacenStocks += 10;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            alphacenSpentAmt += alphacenCurrentStockPrice * 10;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyAlphacenStocks100').click(function () {

        if (money >= alphacenCurrentStockPrice * 100) {
            money -= alphacenCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedAlphacenStocks += 100;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            alphacenSpentAmt += alphacenCurrentStockPrice * 100;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyAlphacenStocksAll').click(function () {
        var alphacenBuyAmt = Math.floor(money / alphacenCurrentStockPrice);
        if (alphacenBuyAmt >= 1) {
            money -= alphacenCurrentStockPrice * alphacenBuyAmt;
            localStorage.setItem("money", money);
            ownedAlphacenStocks += alphacenBuyAmt;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            alphacenSpentAmt += alphacenCurrentStockPrice * alphacenBuyAmt;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAlphacenStocks').click(function () {
        if (ownedAlphacenStocks > 0) {
            money += alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = alphacenSpentAmt / ownedAlphacenStocks;
            alphacenSpentAmt -= average;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAlphacenStocks--;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAlphacenStocks10').click(function () {
        if (ownedAlphacenStocks > 9) {
            money += (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = alphacenSpentAmt / ownedAlphacenStocks;
            alphacenSpentAmt -= average * 10;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAlphacenStocks -= 10;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAlphacenStocks100').click(function () {
        if (ownedAlphacenStocks > 99) {
            money += (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = alphacenSpentAmt / ownedAlphacenStocks;
            alphacenSpentAmt -= average * 100;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAlphacenStocks -= 100;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAlphacenStocksAll').click(function () {
        if (ownedAlphacenStocks > 0) {
            money += (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider) * ownedAlphacenStocks;
            localStorage.setItem("money", money);
            alphacenSpentAmt = 0;
            localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);
            $('#alphacenMoneySpent').html('$' + alphacenSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAlphacenStocks = 0;
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            $('#alphacenOwnedStocksDisplay').html(ownedAlphacenStocks);
            $('#alphacenOwnedStocks').html(ownedAlphacenStocks);
            if (ownedAlphacenStocks > 0)
                $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#alphacenSellEstimate').html('$0.00');
        }
        return false;
    });
});