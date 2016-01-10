$(document).ready(function () {

    $('#KELVStockDisplayCost').html('$' + KELVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#KELVCurrentPrice').html('$' + KELVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#KELVStockSellPrice').html('$' + (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
    $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - (KELVCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyKELVStocks').click(function () {

        if (money >= KELVCurrentStockPrice) {
            money -= KELVCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedKELVStocks++;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            KELVSpentAmt += KELVCurrentStockPrice;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyKELVStocks10').click(function () {

        if (money >= KELVCurrentStockPrice * 10) {
            money -= KELVCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedKELVStocks += 10;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            KELVSpentAmt += KELVCurrentStockPrice * 10;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyKELVStocks100').click(function () {

        if (money >= KELVCurrentStockPrice * 100) {
            money -= KELVCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedKELVStocks += 100;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            KELVSpentAmt += KELVCurrentStockPrice * 100;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyKELVStocksAll').click(function () {
        var KELVBuyAmt = Math.floor(money / KELVCurrentStockPrice);
        if (KELVBuyAmt >= 1) {
            money -= KELVCurrentStockPrice * KELVBuyAmt;
            localStorage.setItem("money", money);
            ownedKELVStocks += KELVBuyAmt;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            KELVSpentAmt += KELVCurrentStockPrice * KELVBuyAmt;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellKELVStocks').click(function () {
        if (ownedKELVStocks > 0) {
            money += KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = KELVSpentAmt / ownedKELVStocks;
            KELVSpentAmt -= average;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKELVStocks--;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellKELVStocks10').click(function () {
        if (ownedKELVStocks > 9) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = KELVSpentAmt / ownedKELVStocks;
            KELVSpentAmt -= average * 10;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKELVStocks -= 10;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellKELVStocks100').click(function () {
        if (ownedKELVStocks > 99) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = KELVSpentAmt / ownedKELVStocks;
            KELVSpentAmt -= average * 100;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKELVStocks -= 100;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellKELVStocksAll').click(function () {
        if (ownedKELVStocks > 0) {
            money += (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider) * ownedKELVStocks;
            localStorage.setItem("money", money);
            KELVSpentAmt = 0;
            localStorage.setItem("KELVSpentAmt", KELVSpentAmt);
            $('#KELVMoneySpent').html('$' + KELVSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedKELVStocks = 0;
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            $('#KELVOwnedStocksDisplay').html(ownedKELVStocks);
            $('#KELVOwnedStocks').html(ownedKELVStocks);
            if (ownedKELVStocks > 0)
                $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#KELVSellEstimate').html('$0.00');
        }
        return false;
    });
});