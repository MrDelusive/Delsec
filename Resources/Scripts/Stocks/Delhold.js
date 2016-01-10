$(document).ready(function () {

    $('#delholdStockDisplayCost').html('$' + delholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delholdCurrentPrice').html('$' + delholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delholdStockSellPrice').html('$' + (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
    $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - (delholdCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyDelholdStocks').click(function () {

        if (money >= delholdCurrentStockPrice) {
            money -= delholdCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedDelholdStocks++;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            delholdSpentAmt += delholdCurrentStockPrice;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyDelholdStocks10').click(function () {

        if (money >= delholdCurrentStockPrice * 10) {
            money -= delholdCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedDelholdStocks += 10;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            delholdSpentAmt += delholdCurrentStockPrice * 10;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyDelholdStocks100').click(function () {

        if (money >= delholdCurrentStockPrice * 100) {
            money -= delholdCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedDelholdStocks += 100;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            delholdSpentAmt += delholdCurrentStockPrice * 100;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyDelholdStocksAll').click(function () {
        var delholdBuyAmt = Math.floor(money / delholdCurrentStockPrice);
        if (delholdBuyAmt >= 1) {
            money -= delholdCurrentStockPrice * delholdBuyAmt;
            localStorage.setItem("money", money);
            ownedDelholdStocks += delholdBuyAmt;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            delholdSpentAmt += delholdCurrentStockPrice * delholdBuyAmt;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellDelholdStocks').click(function () {
        if (ownedDelholdStocks > 0) {
            money += delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = delholdSpentAmt / ownedDelholdStocks;
            delholdSpentAmt -= average;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelholdStocks--;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellDelholdStocks10').click(function () {
        if (ownedDelholdStocks > 9) {
            money += (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = delholdSpentAmt / ownedDelholdStocks;
            delholdSpentAmt -= average * 10;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelholdStocks -= 10;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellDelholdStocks100').click(function () {
        if (ownedDelholdStocks > 99) {
            money += (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = delholdSpentAmt / ownedDelholdStocks;
            delholdSpentAmt -= average * 100;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelholdStocks -= 100;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellDelholdStocksAll').click(function () {
        if (ownedDelholdStocks > 0) {
            money += (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider) * ownedDelholdStocks;
            localStorage.setItem("money", money);
            delholdSpentAmt = 0;
            localStorage.setItem("delholdSpentAmt", delholdSpentAmt);
            $('#delholdMoneySpent').html('$' + delholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedDelholdStocks = 0;
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
            if (ownedDelholdStocks > 0)
                $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#delholdSellEstimate').html('$0.00');
        }
        return false;
    });
});