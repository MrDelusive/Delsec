$(document).ready(function () {

    $('#aceholdStockDisplayCost').html('$' + aceholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#aceholdCurrentPrice').html('$' + aceholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#aceholdStockSellPrice').html('$' + (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
    $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - (aceholdCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyAceholdStocks').click(function () {

        if (money >= aceholdCurrentStockPrice) {
            money -= aceholdCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedAceholdStocks++;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            aceholdSpentAmt += aceholdCurrentStockPrice;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyAceholdStocks10').click(function () {

        if (money >= aceholdCurrentStockPrice * 10) {
            money -= aceholdCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedAceholdStocks += 10;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            aceholdSpentAmt += aceholdCurrentStockPrice * 10;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyAceholdStocks100').click(function () {

        if (money >= aceholdCurrentStockPrice * 100) {
            money -= aceholdCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedAceholdStocks += 100;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            aceholdSpentAmt += aceholdCurrentStockPrice * 100;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyAceholdStocksAll').click(function () {
        var aceholdBuyAmt = Math.floor(money / aceholdCurrentStockPrice);
        if (aceholdBuyAmt >= 1) {
            money -= aceholdCurrentStockPrice * aceholdBuyAmt;
            localStorage.setItem("money", money);
            ownedAceholdStocks += aceholdBuyAmt;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            aceholdSpentAmt += aceholdCurrentStockPrice * aceholdBuyAmt;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAceholdStocks').click(function () {
        if (ownedAceholdStocks > 0) {
            money += aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = aceholdSpentAmt / ownedAceholdStocks;
            aceholdSpentAmt -= average;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAceholdStocks--;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);            
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAceholdStocks10').click(function () {
        if (ownedAceholdStocks > 9) {
            money += (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = aceholdSpentAmt / ownedAceholdStocks;
            aceholdSpentAmt -= average * 10;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAceholdStocks -= 10;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAceholdStocks100').click(function () {
        if (ownedAceholdStocks > 99) {
            money += (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = aceholdSpentAmt / ownedAceholdStocks;
            aceholdSpentAmt -= average * 100;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAceholdStocks -= 100;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAceholdStocksAll').click(function () {
        if (ownedAceholdStocks > 0) {
            money += (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider) * ownedAceholdStocks;
            localStorage.setItem("money", money);
            aceholdSpentAmt = 0;
            localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);
            $('#aceholdMoneySpent').html('$' + aceholdSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAceholdStocks = 0;
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
            if (ownedAceholdStocks > 0)
                $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#aceholdSellEstimate').html('$0.00');
        }
        return false;
    });
});