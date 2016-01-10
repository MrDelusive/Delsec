$(document).ready(function () {

    $('#megahardStockDisplayCost').html('$' + megahardCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#megahardCurrentPrice').html('$' + megahardCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#megahardStockSellPrice').html('$' + (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
    $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - (megahardCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyMegahardStocks').click(function () {

        if (money >= megahardCurrentStockPrice) {
            money -= megahardCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedMegahardStocks++;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            megahardSpentAmt += megahardCurrentStockPrice;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyMegahardStocks10').click(function () {

        if (money >= megahardCurrentStockPrice * 10) {
            money -= megahardCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedMegahardStocks += 10;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            megahardSpentAmt += megahardCurrentStockPrice * 10;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyMegahardStocks100').click(function () {

        if (money >= megahardCurrentStockPrice * 100) {
            money -= megahardCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedMegahardStocks += 100;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            megahardSpentAmt += megahardCurrentStockPrice * 100;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
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
            megahardSpentAmt += megahardCurrentStockPrice * megahardBuyAmt;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellMegahardStocks').click(function () {
        if (ownedMegahardStocks > 0) {
            money += megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = megahardSpentAmt / ownedMegahardStocks;
            megahardSpentAmt -= average;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedMegahardStocks--;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellMegahardStocks10').click(function () {
        if (ownedMegahardStocks > 9) {
            money += (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = megahardSpentAmt / ownedMegahardStocks;
            megahardSpentAmt -= average * 10;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedMegahardStocks -= 10;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellMegahardStocks100').click(function () {
        if (ownedMegahardStocks > 99) {
            money += (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = megahardSpentAmt / ownedMegahardStocks;
            megahardSpentAmt -= average * 100;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedMegahardStocks -= 100;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellMegahardStocksAll').click(function () {
        if (ownedMegahardStocks > 0) {
            money += (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider) * ownedMegahardStocks;
            localStorage.setItem("money", money);
            megahardSpentAmt = 0;
            localStorage.setItem("megahardSpentAmt", megahardSpentAmt);
            $('#megahardMoneySpent').html('$' + megahardSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedMegahardStocks = 0;
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            $('#megahardOwnedStocksDisplay').html(ownedMegahardStocks);
            $('#megahardOwnedStocks').html(ownedMegahardStocks);
            if (ownedMegahardStocks > 0)
                $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#megahardSellEstimate').html('$0.00');
        }
        return false;
    });
});