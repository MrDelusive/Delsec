$(document).ready(function () {

    $('#TRITStockDisplayCost').html('$' + TRITCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#TRITCurrentPrice').html('$' + TRITCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#TRITStockSellPrice').html('$' + (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
    $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - (TRITCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyTRITStocks').click(function () {

        if (money >= TRITCurrentStockPrice) {
            money -= TRITCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedTRITStocks++;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            TRITSpentAmt += TRITCurrentStockPrice;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyTRITStocks10').click(function () {

        if (money >= TRITCurrentStockPrice * 10) {
            money -= TRITCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedTRITStocks += 10;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            TRITSpentAmt += TRITCurrentStockPrice * 10;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyTRITStocks100').click(function () {

        if (money >= TRITCurrentStockPrice * 100) {
            money -= TRITCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedTRITStocks += 100;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            TRITSpentAmt += TRITCurrentStockPrice * 100;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyTRITStocksAll').click(function () {
        var TRITBuyAmt = Math.floor(money / TRITCurrentStockPrice);
        if (TRITBuyAmt >= 1) {
            money -= TRITCurrentStockPrice * TRITBuyAmt;
            localStorage.setItem("money", money);
            ownedTRITStocks += TRITBuyAmt;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            TRITSpentAmt += TRITCurrentStockPrice * TRITBuyAmt;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellTRITStocks').click(function () {
        if (ownedTRITStocks > 0) {
            money += TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = TRITSpentAmt / ownedTRITStocks;
            TRITSpentAmt -= average;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTRITStocks--;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellTRITStocks10').click(function () {
        if (ownedTRITStocks > 9) {
            money += (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = TRITSpentAmt / ownedTRITStocks;
            TRITSpentAmt -= average * 10;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTRITStocks -= 10;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellTRITStocks100').click(function () {
        if (ownedTRITStocks > 99) {
            money += (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = TRITSpentAmt / ownedTRITStocks;
            TRITSpentAmt -= average * 100;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTRITStocks -= 100;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellTRITStocksAll').click(function () {
        if (ownedTRITStocks > 0) {
            money += (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider) * ownedTRITStocks;
            localStorage.setItem("money", money);
            TRITSpentAmt = 0;
            localStorage.setItem("TRITSpentAmt", TRITSpentAmt);
            $('#TRITMoneySpent').html('$' + TRITSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedTRITStocks = 0;
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
            if (ownedTRITStocks > 0)
                $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#TRITSellEstimate').html('$0.00');
        }
        return false;
    });
});