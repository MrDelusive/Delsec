$(document).ready(function () {

    $('#infoneStockDisplayCost').html('$' + infoneCurrentStockPrice.toFixed(2));
    $('#infoneStockSellPrice').html('$' + (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider).toFixed(2));
    $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
    $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - (infoneCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyInfoneStocks').click(function () {

        if (money >= infoneCurrentStockPrice) {
            money -= infoneCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedInfoneStocks++;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyInfoneStocks10').click(function () {

        if (money >= infoneCurrentStockPrice * 10) {
            money -= infoneCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedInfoneStocks += 10;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyInfoneStocks100').click(function () {

        if (money >= infoneCurrentStockPrice * 100) {
            money -= infoneCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedInfoneStocks += 100;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyInfoneStocksAll').click(function () {
        var infoneBuyAmt = Math.floor(money / infoneCurrentStockPrice);
        if (infoneBuyAmt >= 1) {
            money -= infoneCurrentStockPrice * infoneBuyAmt;
            localStorage.setItem("money", money);
            ownedInfoneStocks += infoneBuyAmt;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellInfoneStocks').click(function () {
        if (ownedInfoneStocks > 0) {
            money += infoneCurrentStockPrice - infoneCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedInfoneStocks--;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellInfoneStocks10').click(function () {
        if (ownedInfoneStocks > 9) {
            money += (infoneCurrentStockPrice - infoneCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedInfoneStocks -= 10;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellInfoneStocks100').click(function () {
        if (ownedInfoneStocks > 99) {
            money += (infoneCurrentStockPrice - infoneCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedInfoneStocks -= 100;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellInfoneStocksAll').click(function () {
        if (ownedInfoneStocks > 0) {
            money += (infoneCurrentStockPrice - infoneCurrentStockPrice / 10) * ownedInfoneStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedInfoneStocks = 0;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#infoneSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);