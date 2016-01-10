$(document).ready(function () {

    $('#chimeraholdStockDisplayCost').html('$' + chimeraholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimeraholdCurrentPrice').html('$' + chimeraholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimeraholdStockSellPrice').html('$' + (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
    $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - (chimeraholdCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyChimeraholdStocks').click(function () {

        if (money >= chimeraholdCurrentStockPrice) {
            money -= chimeraholdCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks++;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            chimeraholdSpentAmt += chimeraholdCurrentStockPrice;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyChimeraholdStocks10').click(function () {

        if (money >= chimeraholdCurrentStockPrice * 10) {
            money -= chimeraholdCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks += 10;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            chimeraholdSpentAmt += chimeraholdCurrentStockPrice * 10;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyChimeraholdStocks100').click(function () {

        if (money >= chimeraholdCurrentStockPrice * 100) {
            money -= chimeraholdCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedChimeraholdStocks += 100;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            chimeraholdSpentAmt += chimeraholdCurrentStockPrice * 100;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
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
            chimeraholdSpentAmt += chimeraholdCurrentStockPrice * chimeraholdBuyAmt;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellChimeraholdStocks').click(function () {
        if (ownedChimeraholdStocks > 0) {
            money += chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = chimeraholdSpentAmt / ownedChimeraholdStocks;
            chimeraholdSpentAmt -= average;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimeraholdStocks--;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellChimeraholdStocks10').click(function () {
        if (ownedChimeraholdStocks > 9) {
            money += (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = chimeraholdSpentAmt / ownedChimeraholdStocks;
            chimeraholdSpentAmt -= average * 10;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimeraholdStocks -= 10;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellChimeraholdStocks100').click(function () {
        if (ownedChimeraholdStocks > 99) {
            money += (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = chimeraholdSpentAmt / ownedChimeraholdStocks;
            chimeraholdSpentAmt -= average * 100;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimeraholdStocks -= 100;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellChimeraholdStocksAll').click(function () {
        if (ownedChimeraholdStocks > 0) {
            money += (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider) * ownedChimeraholdStocks;
            localStorage.setItem("money", money);
            chimeraholdSpentAmt = 0;
            localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);
            $('#chimeraholdMoneySpent').html('$' + chimeraholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedChimeraholdStocks = 0;
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
            if (ownedChimeraholdStocks > 0)
                $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#chimeraholdSellEstimate').html('$0.00');
        }
        return false;
    });
});