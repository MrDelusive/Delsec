$(document).ready(function () {

    $('#megahardStockDisplayCost').html('$' + megahardCurrentStockPrice.toFixed(2));
    $('#megahardStockSellPrice').html('$' + (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider).toFixed(2));
    $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
    $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - (megahardCurrentStockPrice / sellDivider))).toFixed(2));

    $('#btnBuyMegahardStocks').click(function () {

        if (money >= megahardCurrentStockPrice) {
            money -= megahardCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedMegahardStocks++;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }

        return false;
    });
    $('#btnBuyMegahardStocks10').click(function () {

        if (money >= megahardCurrentStockPrice * 10) {
            money -= megahardCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedMegahardStocks += 10;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnBuyMegahardStocks100').click(function () {

        if (money >= megahardCurrentStockPrice * 100) {
            money -= megahardCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedMegahardStocks += 100;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnBuyMegahardStocksAll').click(function () {
        var megahardBuyAmt = Math.floor(money / megahardCurrentStockPrice);
        if (megahardBuyAmt >= 1) {
            money -= megahardCurrentStockPrice * megahardBuyAmt;
            localStorage.setItem("money", money);
            ownedMegahardStocks += megahardBuyAmt;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }
        return false;
    });

    // Always sell amt at 10% lower
    $('#btnSellMegahardStocks').click(function () {
        if (ownedMegahardStocks > 0) {
            money += megahardCurrentStockPrice - megahardCurrentStockPrice / 10;
            localStorage.setItem("money", money);
            ownedMegahardStocks--;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellMegahardStocks10').click(function () {
        if (ownedMegahardStocks > 9) {
            money += (megahardCurrentStockPrice - megahardCurrentStockPrice / 10) * 10;
            localStorage.setItem("money", money);
            ownedMegahardStocks -= 10;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }
        return false;
    });
    $('#btnSellMegahardStocks100').click(function () {
        if (ownedMegahardStocks > 99) {
            money += (megahardCurrentStockPrice - megahardCurrentStockPrice / 10) * 100;
            localStorage.setItem("money", money);
            ownedMegahardStocks -= 100;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }
        return false;
    });

    $('#btnSellMegahardStocksAll').click(function () {
        if (ownedMegahardStocks > 0) {
            money += (megahardCurrentStockPrice - megahardCurrentStockPrice / 10) * ownedMegahardStocks;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedMegahardStocks = 0;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
            else
                $('#megahardSellEstimate').html('$0');
        }
        return false;
    });
})(jQuery);