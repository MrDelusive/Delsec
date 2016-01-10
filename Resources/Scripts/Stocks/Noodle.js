$(document).ready(function () {

    $('#noodleStockDisplayCost').html('$' + noodleCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#noodleCurrentPrice').html('$' + noodleCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#noodleStockSellPrice').html('$' + (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
    $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - (noodleCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyNoodleStocks').click(function () {

        if (money >= noodleCurrentStockPrice) {
            money -= noodleCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedNoodleStocks++;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            noodleSpentAmt += noodleCurrentStockPrice;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyNoodleStocks10').click(function () {

        if (money >= noodleCurrentStockPrice * 10) {
            money -= noodleCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedNoodleStocks += 10;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            noodleSpentAmt += noodleCurrentStockPrice * 10;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyNoodleStocks100').click(function () {

        if (money >= noodleCurrentStockPrice * 100) {
            money -= noodleCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedNoodleStocks += 100;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            noodleSpentAmt += noodleCurrentStockPrice * 100;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyNoodleStocksAll').click(function () {
        var noodleBuyAmt = Math.floor(money / noodleCurrentStockPrice);
        if (noodleBuyAmt >= 1) {
            money -= noodleCurrentStockPrice * noodleBuyAmt;
            localStorage.setItem("money", money);
            ownedNoodleStocks += noodleBuyAmt;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            noodleSpentAmt += noodleCurrentStockPrice * noodleBuyAmt;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellNoodleStocks').click(function () {
        if (ownedNoodleStocks > 0) {
            money += noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = noodleSpentAmt / ownedNoodleStocks;
            noodleSpentAmt -= average;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedNoodleStocks--;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellNoodleStocks10').click(function () {
        if (ownedNoodleStocks > 9) {
            money += (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = noodleSpentAmt / ownedNoodleStocks;
            noodleSpentAmt -= average * 10;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedNoodleStocks -= 10;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellNoodleStocks100').click(function () {
        if (ownedNoodleStocks > 99) {
            money += (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = noodleSpentAmt / ownedNoodleStocks;
            noodleSpentAmt -= average * 100;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedNoodleStocks -= 100;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellNoodleStocksAll').click(function () {
        if (ownedNoodleStocks > 0) {
            money += (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider) * ownedNoodleStocks;
            localStorage.setItem("money", money);
            noodleSpentAmt = 0;
            localStorage.setItem("noodleSpentAmt", noodleSpentAmt);
            $('#noodleMoneySpent').html('$' + noodleSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedNoodleStocks = 0;
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            $('#noodleOwnedStocksDisplay').html(ownedNoodleStocks);
            if (ownedNoodleStocks > 0)
                $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#noodleSellEstimate').html('$0.00');
        }
        return false;
    });
});