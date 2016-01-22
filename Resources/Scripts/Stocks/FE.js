$(document).ready(function () {

    $('#FEStockDisplayCost').html('$' + FECurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#FECurrentPrice').html('$' + FECurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#FEStockSellPrice').html('$' + (FECurrentStockPrice - FECurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#FEOwnedStocksDisplay').html(ownedFEStocks);
    $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - (FECurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyFEStocks').click(function () {

        if (money >= FECurrentStockPrice) {
            money -= FECurrentStockPrice;
            localStorage.setItem("money", money);
            ownedFEStocks++;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            FESpentAmt += FECurrentStockPrice;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyFEStocks10').click(function () {

        if (money >= FECurrentStockPrice * 10) {
            money -= FECurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedFEStocks += 10;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            FESpentAmt += FECurrentStockPrice * 10;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyFEStocks100').click(function () {

        if (money >= FECurrentStockPrice * 100) {
            money -= FECurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedFEStocks += 100;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            FESpentAmt += FECurrentStockPrice * 100;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyFEStocksAll').click(function () {
        var FEBuyAmt = Math.floor(money / FECurrentStockPrice);
        if (FEBuyAmt >= 1) {
            money -= FECurrentStockPrice * FEBuyAmt;
            localStorage.setItem("money", money);
            ownedFEStocks += FEBuyAmt;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            FESpentAmt += FECurrentStockPrice * FEBuyAmt;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellFEStocks').click(function () {
        if (ownedFEStocks > 0) {
            money += FECurrentStockPrice - FECurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = FESpentAmt / ownedFEStocks;
            FESpentAmt -= average;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedFEStocks--;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellFEStocks10').click(function () {
        if (ownedFEStocks > 9) {
            money += (FECurrentStockPrice - FECurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = FESpentAmt / ownedFEStocks;
            FESpentAmt -= average * 10;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedFEStocks -= 10;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellFEStocks100').click(function () {
        if (ownedFEStocks > 99) {
            money += (FECurrentStockPrice - FECurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = FESpentAmt / ownedFEStocks;
            FESpentAmt -= average * 100;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedFEStocks -= 100;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellFEStocksAll').click(function () {
        if (ownedFEStocks > 0) {
            money += (FECurrentStockPrice - FECurrentStockPrice / sellDivider) * ownedFEStocks;
            localStorage.setItem("money", money);
            FESpentAmt = 0;
            localStorage.setItem("FESpentAmt", FESpentAmt);
            $('#FEMoneySpent').html('$' + FESpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedFEStocks = 0;
            localStorage.setItem("ownedFEStocks", ownedFEStocks);
            $('#FEOwnedStocksDisplay').html(ownedFEStocks);
            $('#FEOwnedStocks').html(ownedFEStocks);
            if (ownedFEStocks > 0)
                $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#FESellEstimate').html('$0.00');
        }
        return false;
    });
});