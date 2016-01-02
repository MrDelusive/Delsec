$(document).ready(function () {

    $('#AUStockDisplayCost').html('$' + AUCurrentStockPrice.toFixed(2));
    $('#AUStockSellPrice').html('$' + (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider).toFixed(2));
    $('#AUOwnedStocksDisplay').html(ownedAUStocks);
    $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - (AUCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyAUStocks').click(function () {

        if (money >= AUCurrentStockPrice) {
            money -= AUCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedAUStocks++;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyAUStocks10').click(function () {

        if (money >= AUCurrentStockPrice * 10) {
            money -= AUCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedAUStocks += 10;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyAUStocks100').click(function () {

        if (money >= AUCurrentStockPrice * 100) {
            money -= AUCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedAUStocks += 100;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyAUStocksAll').click(function () {
        var AUBuyAmt = Math.floor(money / AUCurrentStockPrice);
        if (AUBuyAmt >= 1) {
            money -= AUCurrentStockPrice * AUBuyAmt;
            localStorage.setItem("money", money);
            ownedAUStocks += AUBuyAmt;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellAUStocks').click(function () {
        if (ownedAUStocks > 0) {
            money += AUCurrentStockPrice - AUCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedAUStocks--;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAUStocks10').click(function () {
        if (ownedAUStocks > 9) {
            money += (AUCurrentStockPrice - AUCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedAUStocks -= 10;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellAUStocks100').click(function () {
        if (ownedAUStocks > 99) {
            money += (AUCurrentStockPrice - AUCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedAUStocks -= 100;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellAUStocksAll').click(function () {
        if (ownedAUStocks > 0) {
            money += (AUCurrentStockPrice - AUCurrentStockPrice / 10) * ownedAUStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAUStocks = 0;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#AUSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);