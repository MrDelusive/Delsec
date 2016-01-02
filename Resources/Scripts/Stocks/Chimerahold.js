$(document).ready(function () {

    $('#chimeraholdStockDisplayCost').html('$' + chimeraholdCurrentStockPrice.toFixed(2));
    $('#chimeraholdStockSellPrice').html('$' + (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider).toFixed(2));
    $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
    $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - (chimeraholdCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyChimeraholdStocks').click(function () {

        if (money >= chimeraholdCurrentStockPrice) {
            money -= chimeraholdCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks++;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyChimeraholdStocks10').click(function () {

        if (money >= chimeraholdCurrentStockPrice * 10) {
            money -= chimeraholdCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks += 10;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyChimeraholdStocks100').click(function () {

        if (money >= chimeraholdCurrentStockPrice * 100) {
            money -= chimeraholdCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks += 100;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyChimeraholdStocksAll').click(function () {
        var chimeraholdBuyAmt = Math.floor(money / chimeraholdCurrentStockPrice);
        if (chimeraholdBuyAmt >= 1) {
            money -= chimeraholdCurrentStockPrice * chimeraholdBuyAmt;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks += chimeraholdBuyAmt;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellChimeraholdStocks').click(function () {
        if (ownedChimeraholdStocks > 0) {
            money += chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks--;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellChimeraholdStocks10').click(function () {
        if (ownedChimeraholdStocks > 9) {
            money += (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks -= 10;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellChimeraholdStocks100').click(function () {
        if (ownedChimeraholdStocks > 99) {
            money += (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks -= 100;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellChimeraholdStocksAll').click(function () {
        if (ownedChimeraholdStocks > 0) {
            money += (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / 10) * ownedChimeraholdStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimeraholdStocks = 0;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#chimeraholdSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);