$(document).ready(function () {

    $('#astorStockDisplayCost').html('$' + astorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#astorCurrentPrice').html('$' + astorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#astorStockSellPrice').html('$' + (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
    $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - (astorCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyAstorStocks').click(function () {

        if (money >= astorCurrentStockPrice) {
            money -= astorCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedAstorStocks++;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            astorSpentAmt += astorCurrentStockPrice;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyAstorStocks10').click(function () {

        if (money >= astorCurrentStockPrice * 10) {
            money -= astorCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedAstorStocks += 10;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            astorSpentAmt += astorCurrentStockPrice * 10;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyAstorStocks100').click(function () {

        if (money >= astorCurrentStockPrice * 100) {
            money -= astorCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedAstorStocks += 100;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            astorSpentAmt += astorCurrentStockPrice * 100;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyAstorStocksAll').click(function () {
        var astorBuyAmt = Math.floor(money / astorCurrentStockPrice);
        if (astorBuyAmt >= 1) {
            money -= astorCurrentStockPrice * astorBuyAmt;
            localStorage.setItem("money", money);
            ownedAstorStocks += astorBuyAmt;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            astorSpentAmt += astorCurrentStockPrice * astorBuyAmt;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAstorStocks').click(function () {
        if (ownedAstorStocks > 0) {
            money += astorCurrentStockPrice - astorCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = astorSpentAmt / ownedAstorStocks;
            astorSpentAmt -= average;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAstorStocks--;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAstorStocks10').click(function () {
        if (ownedAstorStocks > 9) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = astorSpentAmt / ownedAstorStocks;
            astorSpentAmt -= average * 10;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAstorStocks -= 10;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAstorStocks100').click(function () {
        if (ownedAstorStocks > 99) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = astorSpentAmt / ownedAstorStocks;
            astorSpentAmt -= average * 100;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAstorStocks -= 100;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAstorStocksAll').click(function () {
        if (ownedAstorStocks > 0) {
            money += (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider) * ownedAstorStocks;
            localStorage.setItem("money", money);
            astorSpentAmt = 0;
            localStorage.setItem("astorSpentAmt", astorSpentAmt);
            $('#astorMoneySpent').html('$' + astorSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAstorStocks = 0;
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
            if (ownedAstorStocks > 0)
                $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#astorSellEstimate').html('$0.00');
        }
        return false;
    });
});