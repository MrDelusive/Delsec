$(document).ready(function () {

    $('#exxocredStockDisplayCost').html('$' + exxocredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exxocredCurrentPrice').html('$' + exxocredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exxocredStockSellPrice').html('$' + (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
    $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - (exxocredCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyExxocredStocks').click(function () {

        if (money >= exxocredCurrentStockPrice) {
            money -= exxocredCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedExxocredStocks++;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            exxocredSpentAmt += exxocredCurrentStockPrice;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyExxocredStocks10').click(function () {

        if (money >= exxocredCurrentStockPrice * 10) {
            money -= exxocredCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedExxocredStocks += 10;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            exxocredSpentAmt += exxocredCurrentStockPrice * 10;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyExxocredStocks100').click(function () {

        if (money >= exxocredCurrentStockPrice * 100) {
            money -= exxocredCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedExxocredStocks += 100;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            exxocredSpentAmt += exxocredCurrentStockPrice * 100;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyExxocredStocksAll').click(function () {
        var exxocredBuyAmt = Math.floor(money / exxocredCurrentStockPrice);
        if (exxocredBuyAmt >= 1) {
            money -= exxocredCurrentStockPrice * exxocredBuyAmt;
            localStorage.setItem("money", money);
            ownedExxocredStocks += exxocredBuyAmt;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            exxocredSpentAmt += exxocredCurrentStockPrice * exxocredBuyAmt;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellExxocredStocks').click(function () {
        if (ownedExxocredStocks > 0) {
            money += exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = exxocredSpentAmt / ownedExxocredStocks;
            exxocredSpentAmt -= average;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExxocredStocks--;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellExxocredStocks10').click(function () {
        if (ownedExxocredStocks > 9) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = exxocredSpentAmt / ownedExxocredStocks;
            exxocredSpentAmt -= average * 10;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExxocredStocks -= 10;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellExxocredStocks100').click(function () {
        if (ownedExxocredStocks > 99) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = exxocredSpentAmt / ownedExxocredStocks;
            exxocredSpentAmt -= average * 100;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExxocredStocks -= 100;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellExxocredStocksAll').click(function () {
        if (ownedExxocredStocks > 0) {
            money += (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider) * ownedExxocredStocks;
            localStorage.setItem("money", money);
            exxocredSpentAmt = 0;
            localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);
            $('#exxocredMoneySpent').html('$' + exxocredSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedExxocredStocks = 0;
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            $('#exxocredOwnedStocksDisplay').html(ownedExxocredStocks);
            if (ownedExxocredStocks > 0)
                $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#exxocredSellEstimate').html('$0.00');
        }
        return false;
    });
});